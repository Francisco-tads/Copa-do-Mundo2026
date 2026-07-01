import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const WORLD_CUP_API = "https://worldcupjson.net/matches";

interface ApiMatch {
  id: number;
  fifa_id: string;
  status: string;
  home_team: {
    name: string;
    code: string;
    goals: number | null;
    penalties?: number | null;
  };
  away_team: {
    name: string;
    code: string;
    goals: number | null;
    penalties?: number | null;
  };
  home_team_events?: Array<{
    type: string;
    player: string;
    time: string;
  }>;
  away_team_events?: Array<{
    type: string;
    player: string;
    time: string;
  }>;
  datetime: string;
  stage_name: string;
  stadium?: string;
  location?: string;
}

function mapStage(apiStage: string): string {
  const stageMap: Record<string, string> = {
    "First stage": "Group Stage",
    "Group stage": "Group Stage",
    "Round of 16": "Round of 16",
    "Round of 32": "Round of 32",
    "Quarter-finals": "Quarter Finals",
    "Quarter-final": "Quarter Finals",
    "Semi-finals": "Semi Finals",
    "Semi-final": "Semi Finals",
    "Third Place": "Third Place",
    "Play-off for third place": "Third Place",
    "Final": "Final",
  };
  return stageMap[apiStage] || apiStage;
}

function mapStatus(apiStatus: string): string {
  const statusMap: Record<string, string> = {
    "completed": "completed",
    "in_progress": "live",
    "future": "scheduled",
    "pending": "scheduled",
  };
  return statusMap[apiStatus] || "scheduled";
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Fetch matches from World Cup API
    let apiMatches: ApiMatch[] = [];
    try {
      const response = await fetch(`${WORLD_CUP_API}?by_date=DESC`);
      if (response.ok) {
        apiMatches = await response.json();
      }
    } catch (e) {
      console.log("API fetch failed, will return current DB data");
    }

    // Also try /matches/today and /matches/tomorrow
    try {
      const todayResponse = await fetch(`${WORLD_CUP_API}/today?by_date=DESC`);
      if (todayResponse.ok) {
        const todayMatches = await todayResponse.json();
        apiMatches = [...apiMatches, ...todayMatches];
      }
    } catch (e) {
      console.log("Today endpoint failed");
    }

    try {
      const tomorrowResponse = await fetch(`${WORLD_CUP_API}/tomorrow?by_date=DESC`);
      if (tomorrowResponse.ok) {
        const tomorrowMatches = await tomorrowResponse.json();
        apiMatches = [...apiMatches, ...tomorrowMatches];
      }
    } catch (e) {
      console.log("Tomorrow endpoint failed");
    }

    // Remove duplicates based on fifa_id
    const uniqueMatches = apiMatches.reduce((acc: ApiMatch[], match: ApiMatch) => {
      if (!acc.find(m => m.fifa_id === match.fifa_id)) {
        acc.push(match);
      }
      return acc;
    }, []);

    // Get teams mapping from DB
    const { data: teams } = await supabase
      .from("teams")
      .select("id, name, code");

    const teamMap = new Map<string, number>();
    teams?.forEach(t => {
      teamMap.set(t.code.toUpperCase(), t.id);
      teamMap.set(t.name.toLowerCase(), t.id);
    });

    // Update matches in DB
    let updated = 0;
    let errors = 0;

    for (const apiMatch of uniqueMatches) {
      const homeTeamId = teamMap.get(apiMatch.home_team?.code?.toUpperCase()) ||
                         teamMap.get(apiMatch.home_team?.name?.toLowerCase());
      const awayTeamId = teamMap.get(apiMatch.away_team?.code?.toUpperCase()) ||
                         teamMap.get(apiMatch.away_team?.name?.toLowerCase());

      if (!homeTeamId && !awayTeamId) continue;

      // Check for extra time based on events
      const hasExtraTime = false;
      const hasPenalties = !!(apiMatch.home_team_events?.some(e =>
        e.type.toLowerCase().includes("penalty")) ||
        apiMatch.away_team_events?.some(e => e.type.toLowerCase().includes("penalty")));

      // Determine winner
      let winnerId = null;
      if (apiMatch.status === "completed" && apiMatch.home_team?.goals != null && apiMatch.away_team?.goals != null) {
        if (apiMatch.home_team.goals > apiMatch.away_team.goals) {
          winnerId = homeTeamId;
        } else if (apiMatch.away_team.goals > apiMatch.home_team.goals) {
          winnerId = awayTeamId;
        } else if (apiMatch.home_team.penalties && apiMatch.away_team.penalties) {
          if (apiMatch.home_team.penalties > apiMatch.away_team.penalties) {
            winnerId = homeTeamId;
          } else {
            winnerId = awayTeamId;
          }
        }
      }

      const matchDate = apiMatch.datetime ? apiMatch.datetime.split("T")[0] : null;
      const matchTime = apiMatch.datetime
        ? new Date(apiMatch.datetime).toTimeString().slice(0, 5)
        : null;

      // Find existing match by stage and teams
      const { data: existingMatch } = await supabase
        .from("matches")
        .select("id")
        .eq("stage", mapStage(apiMatch.stage_name))
        .or(`home_team_id.eq.${homeTeamId},away_team_id.eq.${awayTeamId}`)
        .limit(1);

      if (existingMatch && existingMatch.length > 0) {
        const { error } = await supabase
          .from("matches")
          .update({
            home_team_id: homeTeamId,
            away_team_id: awayTeamId,
            home_score: apiMatch.home_team?.goals,
            away_score: apiMatch.away_team?.goals,
            home_penalties: apiMatch.home_team?.penalties,
            away_penalties: apiMatch.away_team?.penalties,
            has_extra_time: hasExtraTime,
            has_penalties: hasPenalties,
            winner_id: winnerId,
            status: mapStatus(apiMatch.status),
            match_date: matchDate,
            match_time: matchTime,
            stadium: apiMatch.stadium,
            city: apiMatch.location,
          })
          .eq("id", existingMatch[0].id);

        if (error) {
          console.error("Update error:", error);
          errors++;
        } else {
          updated++;
        }
      }
    }

    // Fetch current matches from DB
    const { data: dbMatches } = await supabase
      .from("matches")
      .select(`
        *,
        home_team:teams!matches_home_team_id_fkey(*),
        away_team:teams!matches_away_team_id_fkey(*),
        winner:teams!matches_winner_id_fkey(*)
      `)
      .neq("stage", "Group Stage")
      .order("match_number");

    return new Response(JSON.stringify({
      success: true,
      message: `Synchronized ${updated} matches`,
      api_matches_found: uniqueMatches.length,
      errors,
      matches: dbMatches || [],
      api_status: uniqueMatches.length > 0 ? "API active" : "API returned no data (may be offline or no matches scheduled)"
    }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });

  } catch (error) {
    console.error("Error:", error);
    return new Response(JSON.stringify({
      success: false,
      error: error.message,
    }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
