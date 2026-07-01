import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const FIXTURES_API = "https://www.thestatsapi.com/world-cup/data/fixtures.json";

interface ApiFixture {
  matchNumber: number;
  date: string;
  kickoffUtc: string;
  stage: string;
  group: string | null;
  homeTeam: string;
  awayTeam: string;
  stadium: string;
  hostCity: string;
}

interface ApiFixturesResponse {
  fixtures: ApiFixture[];
}

function mapStage(apiStage: string): string {
  const stageMap: Record<string, string> = {
    "group-stage": "Group Stage",
    "round-of-32": "Round of 32",
    "round-of-16": "Round of 16",
    "quarter-finals": "Quarter Finals",
    "semi-finals": "Semi Finals",
    "third-place": "Third Place",
    "final": "Final",
  };
  return stageMap[apiStage] || apiStage;
}

function getDayOfWeek(dateStr: string): string {
  const days = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SÁB'];
  const date = new Date(dateStr + 'T12:00:00');
  return days[date.getDay()];
}

function formatHostCity(city: string): string {
  const cityMap: Record<string, string> = {
    'mexico-city': 'Cidade do México',
    'guadalajara': 'Guadalajara',
    'toronto': 'Toronto',
    'los-angeles': 'Los Angeles',
    'boston': 'Boston',
    'vancouver': 'Vancouver',
    'new-york': 'New York',
    'san-francisco': 'San Francisco',
    'philadelphia': 'Philadelphia',
    'houston': 'Houston',
    'dallas': 'Dallas',
    'monterrey': 'Monterrey',
    'miami': 'Miami',
    'atlanta': 'Atlanta',
    'seattle': 'Seattle',
    'kansas-city': 'Kansas City',
  };
  return cityMap[city] || city.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ');
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseServiceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    // Fetch fixtures from TheStatsAPI
    let fixtures: ApiFixture[] = [];
    try {
      const response = await fetch(FIXTURES_API);
      if (response.ok) {
        const data: ApiFixturesResponse = await response.json();
        fixtures = data.fixtures || [];
      }
    } catch (e) {
      console.log("API fetch failed:", e);
    }

    // Get teams mapping from DB
    const { data: teams } = await supabase
      .from("teams")
      .select("id, name, code");

    const teamMap = new Map<string, number>();
    teams?.forEach(t => {
      teamMap.set(t.name.toLowerCase(), t.id);
      teamMap.set(t.code.toLowerCase(), t.id);
    });

    // Team name mappings for API names that differ
    const teamNameMappings: Record<string, string> = {
      'cote divoire': 'ivory coast',
      'cabo verde': 'cape verde',
      'ir iran': 'iran',
      'korea republic': 'south korea',
      'turkiye': 'turkey',
      'bosnia and herzegovina': 'bosnia',
      'united states': 'usa',
    };

    function getTeamId(teamName: string): number | null {
      const normalized = teamName.toLowerCase();
      const mapped = teamNameMappings[normalized] || normalized;
      return teamMap.get(mapped) || null;
    }

    let updated = 0;
    let errors = 0;

    for (const fixture of fixtures) {
      const matchNumber = fixture.matchNumber;

      // Extract time from kickoffUtc
      const kickoffTime = fixture.kickoffUtc ? fixture.kickoffUtc.split('T')[1]?.substring(0, 5) : null;

      // Map stage
      const stage = mapStage(fixture.stage);

      // Get home/away team IDs if they're actual team names (not placeholders like "Winner Match X")
      let homeTeamId = null;
      let awayTeamId = null;

      if (!fixture.homeTeam.includes('Winner') && !fixture.homeTeam.includes('Loser') && !fixture.homeTeam.includes('Group')) {
        homeTeamId = getTeamId(fixture.homeTeam);
      }
      if (!fixture.awayTeam.includes('Winner') && !fixture.awayTeam.includes('Loser') && !fixture.awayTeam.includes('Group')) {
        awayTeamId = getTeamId(fixture.awayTeam);
      }

      // Update match
      const { error } = await supabase
        .from("matches")
        .update({
          match_date: fixture.date,
          match_time: kickoffTime,
          day_of_week: getDayOfWeek(fixture.date),
          stadium: fixture.stadium,
          city: formatHostCity(fixture.hostCity),
          ...(homeTeamId && { home_team_id: homeTeamId }),
          ...(awayTeamId && { away_team_id: awayTeamId }),
        })
        .eq("match_number", matchNumber);

      if (error) {
        console.error(`Error updating match ${matchNumber}:`, error);
        errors++;
      } else {
        updated++;
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
      .order("match_number");

    return new Response(JSON.stringify({
      success: true,
      message: `Atualizado ${updated} partidas`,
      fixtures_found: fixtures.length,
      errors,
      matches: dbMatches || [],
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
