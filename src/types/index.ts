export interface Team {
  id: number;
  name: string;
  code: string;
  flag_url: string;
  group_name: string;
  is_host: boolean;
  confederation: string;
}

export interface Match {
  id: number;
  match_number: number;
  stage: string;
  round: string | null;
  group_name: string | null;
  home_team: Team | null;
  away_team: Team | null;
  home_score: number | null;
  away_score: number | null;
  home_penalties: number | null;
  away_penalties: number | null;
  has_extra_time: boolean;
  has_penalties: boolean;
  winner: Team | null;
  match_date: string | null;
  match_time: string | null;
  day_of_week: string | null;
  stadium: string | null;
  city: string | null;
  status: string;
}

export interface GroupStanding {
  id: number;
  team: Team;
  group_name: string;
  played: number;
  won: number;
  drawn: number;
  lost: number;
  goals_for: number;
  goals_against: number;
  goal_difference: number;
  points: number;
  position: number | null;
  yellow_cards: number;
  red_cards: number;
}

export type Stage = 'Group Stage' | 'Round of 16' | 'Quarter Finals' | 'Semi Finals' | 'Third Place' | 'Final';
