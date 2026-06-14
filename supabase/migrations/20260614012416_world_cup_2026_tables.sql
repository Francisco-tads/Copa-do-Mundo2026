-- World Cup 2026 Schema

-- Teams table
CREATE TABLE teams (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  code TEXT NOT NULL UNIQUE,
  flag_url TEXT NOT NULL,
  group_name TEXT NOT NULL,
  is_host BOOLEAN DEFAULT FALSE,
  confederation TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Matches table
CREATE TABLE matches (
  id SERIAL PRIMARY KEY,
  match_number INTEGER,
  stage TEXT NOT NULL,
  round TEXT,
  group_name TEXT,
  home_team_id INTEGER REFERENCES teams(id),
  away_team_id INTEGER REFERENCES teams(id),
  home_score INTEGER,
  away_score INTEGER,
  home_penalties INTEGER,
  away_penalties INTEGER,
  has_extra_time BOOLEAN DEFAULT FALSE,
  has_penalties BOOLEAN DEFAULT FALSE,
  winner_id INTEGER REFERENCES teams(id),
  match_date DATE,
  match_time TEXT,
  day_of_week TEXT,
  stadium TEXT,
  city TEXT,
  status TEXT DEFAULT 'scheduled',
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Group standings (calculated from match results)
CREATE TABLE group_standings (
  id SERIAL PRIMARY KEY,
  team_id INTEGER REFERENCES teams(id) UNIQUE,
  group_name TEXT NOT NULL,
  played INTEGER DEFAULT 0,
  won INTEGER DEFAULT 0,
  drawn INTEGER DEFAULT 0,
  lost INTEGER DEFAULT 0,
  goals_for INTEGER DEFAULT 0,
  goals_against INTEGER DEFAULT 0,
  goal_difference INTEGER DEFAULT 0,
  points INTEGER DEFAULT 0,
  position INTEGER,
  yellow_cards INTEGER DEFAULT 0,
  red_cards INTEGER DEFAULT 0
);

-- Enable RLS
ALTER TABLE teams ENABLE ROW LEVEL SECURITY;
ALTER TABLE matches ENABLE ROW LEVEL SECURITY;
ALTER TABLE group_standings ENABLE ROW LEVEL SECURITY;

-- RLS Policies (public read access)
CREATE POLICY "public_read_teams" ON teams FOR SELECT TO PUBLIC USING (true);
CREATE POLICY "public_read_matches" ON matches FOR SELECT TO PUBLIC USING (true);
CREATE POLICY "public_read_standings" ON group_standings FOR SELECT TO PUBLIC USING (true);