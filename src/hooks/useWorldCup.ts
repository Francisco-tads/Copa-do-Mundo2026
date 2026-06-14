import { useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import type { Team, Match, GroupStanding } from '../types';

export function useTeams() {
  const [teams, setTeams] = useState<Team[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
        setError(err instanceof Error ? err.message : 'Failed to fetch teams');
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
        setError(err instanceof Error ? err.message : 'Failed to fetch matches');
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
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
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
        setError(err instanceof Error ? err.message : 'Failed to fetch standings');
      } finally {
        setLoading(false);
      }
    }

    fetchStandings();
  }, [groupId]);

  return { standings, loading, error };
}

export function useGroups() {
  const groups = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
  return groups;
}
