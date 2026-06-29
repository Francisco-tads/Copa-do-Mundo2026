-- ============================================================
-- Round of 32: assign teams, scores, dates, stadiums
-- ============================================================

-- M73: Sun June 28 - South Africa(2) vs Canada(5) → 0-1
UPDATE matches SET
  home_team_id = 2, away_team_id = 5,
  home_score = 0, away_score = 1, winner_id = 5,
  status = 'completed',
  match_date = '2026-06-28', day_of_week = 'DOM', match_time = '16:00',
  stadium = 'SoFi Stadium', city = 'Los Angeles'
WHERE match_number = 73;

-- M74: Mon June 29 - Brazil(9) vs Japan(21) → 2-1
UPDATE matches SET
  home_team_id = 9, away_team_id = 21,
  home_score = 2, away_score = 1, winner_id = 9,
  status = 'completed',
  match_date = '2026-06-29', day_of_week = 'SEG', match_time = '13:00',
  stadium = 'Levi''s Stadium', city = 'Santa Clara'
WHERE match_number = 74;

-- M75: Mon June 29 - Germany(17) vs Paraguay(15) → scheduled
UPDATE matches SET
  home_team_id = 17, away_team_id = 15,
  home_score = NULL, away_score = NULL, winner_id = NULL,
  status = 'scheduled',
  match_date = '2026-06-29', day_of_week = 'SEG', match_time = '17:30',
  stadium = 'Gillette Stadium', city = 'Foxborough'
WHERE match_number = 75;

-- M76: Mon June 29 - Netherlands(22) vs Morocco(10) → scheduled
UPDATE matches SET
  home_team_id = 22, away_team_id = 10,
  home_score = NULL, away_score = NULL, winner_id = NULL,
  status = 'scheduled',
  match_date = '2026-06-29', day_of_week = 'SEG', match_time = '22:00',
  stadium = 'Estadio BBVA', city = 'Monterrey'
WHERE match_number = 76;

-- M77: Tue June 30 - Ivory Coast(18) vs Norway(35) → scheduled
UPDATE matches SET
  home_team_id = 18, away_team_id = 35,
  home_score = NULL, away_score = NULL, winner_id = NULL,
  status = 'scheduled',
  match_date = '2026-06-30', day_of_week = 'TER', match_time = '14:00',
  stadium = 'AT&T Stadium', city = 'Arlington'
WHERE match_number = 77;

-- M78: Tue June 30 - France(33) vs Sweden(23) → scheduled
UPDATE matches SET
  home_team_id = 33, away_team_id = 23,
  home_score = NULL, away_score = NULL, winner_id = NULL,
  status = 'scheduled',
  match_date = '2026-06-30', day_of_week = 'TER', match_time = '18:00',
  stadium = 'MetLife Stadium', city = 'East Rutherford'
WHERE match_number = 78;

-- M79: Tue June 30 - Mexico(1) vs Ecuador(20) → scheduled
UPDATE matches SET
  home_team_id = 1, away_team_id = 20,
  home_score = NULL, away_score = NULL, winner_id = NULL,
  status = 'scheduled',
  match_date = '2026-06-30', day_of_week = 'TER', match_time = '22:00',
  stadium = 'Estadio Azteca', city = 'Cidade do México'
WHERE match_number = 79;

-- M80: Wed July 1 - England(45) vs Congo DR(44) → scheduled
UPDATE matches SET
  home_team_id = 45, away_team_id = 44,
  home_score = NULL, away_score = NULL, winner_id = NULL,
  status = 'scheduled',
  match_date = '2026-07-01', day_of_week = 'QUA', match_time = '13:00',
  stadium = 'Mercedes-Benz Stadium', city = 'Atlanta'
WHERE match_number = 80;

-- M81: Wed July 1 - Belgium(25) vs Senegal(36) → scheduled
UPDATE matches SET
  home_team_id = 25, away_team_id = 36,
  home_score = NULL, away_score = NULL, winner_id = NULL,
  status = 'scheduled',
  match_date = '2026-07-01', day_of_week = 'QUA', match_time = '17:00',
  stadium = 'Lumen Field', city = 'Seattle'
WHERE match_number = 81;

-- M82: Wed July 1 - USA(13) vs Bosnia(7) → scheduled
UPDATE matches SET
  home_team_id = 13, away_team_id = 7,
  home_score = NULL, away_score = NULL, winner_id = NULL,
  status = 'scheduled',
  match_date = '2026-07-01', day_of_week = 'QUA', match_time = '21:00',
  stadium = 'Levi''s Stadium', city = 'Santa Clara'
WHERE match_number = 82;

-- M83: Thu July 2 - Spain(31) vs Austria(38) → scheduled
UPDATE matches SET
  home_team_id = 31, away_team_id = 38,
  home_score = NULL, away_score = NULL, winner_id = NULL,
  status = 'scheduled',
  match_date = '2026-07-02', day_of_week = 'QUI', match_time = '16:00',
  stadium = 'SoFi Stadium', city = 'Los Angeles'
WHERE match_number = 83;

-- M84: Thu July 2 - Portugal(41) vs Croatia(46) → scheduled
UPDATE matches SET
  home_team_id = 41, away_team_id = 46,
  home_score = NULL, away_score = NULL, winner_id = NULL,
  status = 'scheduled',
  match_date = '2026-07-02', day_of_week = 'QUI', match_time = '20:00',
  stadium = 'BMO Field', city = 'Toronto'
WHERE match_number = 84;

-- Add 4 missing Round of 32 matches (M85-M88 were Round of 16, so insert with new numbers)
-- We need to renumber: current Round of 16 is M85-M92, shift them up by 4

-- First shift existing Round of 16 matches up by 4 (M85→M89 through M92→M96)
-- But Quarter Finals are M93-M96, Semis M97-M98, 3rd place M99, Final M100
-- So we need to shift:  R16: 85-92 → 89-96, QF: 93-96 → 97-100... that would conflict with Semis/Final
-- Instead: insert the 4 missing R32 games as match_number 101-104 to avoid renumbering

INSERT INTO matches (match_number, stage, match_date, day_of_week, match_time, home_team_id, away_team_id, status, stadium, city)
VALUES
  (101, 'Round of 32', '2026-07-02', 'QUI', '23:00', 8, 39, 'scheduled', 'BC Place', 'Vancouver'),   -- Switzerland vs Algeria
  (102, 'Round of 32', '2026-07-03', 'SEX', '15:00', 14, 27, 'scheduled', 'AT&T Stadium', 'Arlington'), -- Australia vs Egypt
  (103, 'Round of 32', '2026-07-03', 'SEX', '19:00', 37, 32, 'scheduled', 'Hard Rock Stadium', 'Miami Gardens'), -- Argentina vs Cape Verde
  (104, 'Round of 32', '2026-07-03', 'SEX', '22:30', 42, 47, 'scheduled', 'Arrowhead Stadium', 'Kansas City'); -- Colombia vs Ghana

-- Update Round of 16 matches with correct dates/times from article
-- Match 85-92 → stays as Round of 16
UPDATE matches SET
  match_date = '2026-07-05', day_of_week = 'SÁB', match_time = '14:00',
  stadium = 'NRG Stadium', city = 'Houston'
WHERE match_number = 85;

UPDATE matches SET
  match_date = '2026-07-05', day_of_week = 'SÁB', match_time = '18:00',
  stadium = 'Lincoln Financial Field', city = 'Philadelphia'
WHERE match_number = 86;

UPDATE matches SET
  match_date = '2026-07-06', day_of_week = 'DOM', match_time = '17:00',
  stadium = 'MetLife Stadium', city = 'East Rutherford'
WHERE match_number = 87;

UPDATE matches SET
  match_date = '2026-07-06', day_of_week = 'DOM', match_time = '21:00',
  stadium = 'Estadio Azteca', city = 'Cidade do México'
WHERE match_number = 88;

UPDATE matches SET
  match_date = '2026-07-07', day_of_week = 'SEG', match_time = '16:00',
  stadium = 'AT&T Stadium', city = 'Arlington'
WHERE match_number = 89;

UPDATE matches SET
  match_date = '2026-07-07', day_of_week = 'SEG', match_time = '21:00',
  stadium = 'Lumen Field', city = 'Seattle'
WHERE match_number = 90;

UPDATE matches SET
  match_date = '2026-07-08', day_of_week = 'TER', match_time = '15:00',
  stadium = 'Mercedes-Benz Stadium', city = 'Atlanta'
WHERE match_number = 91;

UPDATE matches SET
  match_date = '2026-07-08', day_of_week = 'TER', match_time = '22:00',
  stadium = 'Arrowhead Stadium', city = 'Kansas City'
WHERE match_number = 92;
