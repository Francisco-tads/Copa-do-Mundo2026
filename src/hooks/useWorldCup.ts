import { useState, useEffect, useCallback } from 'react';
import { supabase, supabaseMisconfigured } from '../lib/supabase';
import type { Team, Match, GroupStanding } from '../types';

const CONFIG_ERROR = 'SUPABASE_NOT_CONFIGURED';

export function useTeams() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(!supabaseMisconfigured);
  const [error, setError] = useState<string | null>(supabaseMisconfigured ? CONFIG_ERROR : null);

  useEffect(() => {
    if (supabaseMisconfigured) return;

    async function fetchTeams() {
      try {
        const { data, error: fetchError } = await supabase
          .from('teams')
          .select('*')
          .order('group_name')
          .order('name');

        if (fetchError) throw fetchError;
        setTeams(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao buscar seleções');
      } finally {
        setLoading(false);
      }
    }

    fetchTeams();
  }, []);

  return { teams, loading, error };
}

export function useMatches(stage?: string) {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(!supabaseMisconfigured);
  const [error, setError] = useState<string | null>(supabaseMisconfigured ? CONFIG_ERROR : null);

  useEffect(() => {
    if (supabaseMisconfigured) return;

    async function fetchMatches() {
      try {
        let query = supabase
          .from('matches')
          .select(`
            *,
            home_team:teams!matches_home_team_id_fkey(*),
            away_team:teams!matches_away_team_id_fkey(*),
            winner:teams!matches_winner_id_fkey(*)
          `)
          .order('match_number');

        if (stage) {
          query = query.eq('stage', stage);
        }

        const { data, error: fetchError } = await query;

        if (fetchError) throw fetchError;
        setMatches(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao buscar partidas');
      } finally {
        setLoading(false);
      }
    }

    fetchMatches();
  }, [stage]);

  return { matches, loading, error };
}

export function useGroupStandings(groupId?: string) {
  const [standings, setStandings] = useState<GroupStanding[]>([]);
  const [loading, setLoading] = useState(!supabaseMisconfigured);
  const [error, setError] = useState<string | null>(supabaseMisconfigured ? CONFIG_ERROR : null);

  useEffect(() => {
    if (supabaseMisconfigured) return;

    async function fetchStandings() {
      try {
        let query = supabase
          .from('group_standings')
          .select(`
            *,
            team:teams(*)
          `)
          .order('points', { ascending: false })
          .order('goal_difference', { ascending: false })
          .order('goals_for', { ascending: false });

        if (groupId) {
          query = query.eq('group_name', groupId);
        }

        const { data, error: fetchError } = await query;

        if (fetchError) throw fetchError;
        setStandings(data || []);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Erro ao buscar classificação');
      } finally {
        setLoading(false);
      }
    }

    fetchStandings();
  }, [groupId]);

  return { standings, loading, error };
}

export function useGroups() {
  return ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
}

export function useSyncMatches() {
  const [syncing, setSyncing] = useState(false);
  const [lastSync, setLastSync] = useState<Date | null>(null);
  const [syncError, setSyncError] = useState<string | null>(null);

  const sync = useCallback(async () => {
    if (supabaseMisconfigured) {
      setSyncError(CONFIG_ERROR);
      return { success: false, error: CONFIG_ERROR };
    }

    setSyncing(true);
    setSyncError(null);

    try {
      const { data: { session } } = await supabase.auth.getSession();
      const response = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/sync-matches`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${session?.access_token || import.meta.env.VITE_SUPABASE_ANON_KEY}`,
          },
        }
      );

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.error || 'Falha ao sincronizar');
      }

      setLastSync(new Date());
      return { success: true as const, data: result };
    } catch (err) {
      const errorMsg = err instanceof Error ? err.message : 'Erro ao sincronizar partidas';
      setSyncError(errorMsg);
      return { success: false as const, error: errorMsg };
    } finally {
      setSyncing(false);
    }
  }, []);

  return { sync, syncing, lastSync, syncError };
}
