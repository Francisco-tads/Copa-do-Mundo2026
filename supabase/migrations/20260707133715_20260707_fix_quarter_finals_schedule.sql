-- Corrigir datas das partidas 101-104 (deveriam ser 2-3 julho, não julho 14-19)
UPDATE matches SET
  match_date = '2026-07-02',
  day_of_week = 'QUI',
  match_time = '23:00',
  stadium = 'BC Place',
  city = 'Vancouver'
WHERE match_number = 101;

UPDATE matches SET
  match_date = '2026-07-03',
  day_of_week = 'SEX',
  match_time = '15:00',
  stadium = 'AT&T Stadium',
  city = 'Dallas'
WHERE match_number = 102;

UPDATE matches SET
  match_date = '2026-07-03',
  day_of_week = 'SEX',
  match_time = '19:00',
  stadium = 'Hard Rock Stadium',
  city = 'Miami'
WHERE match_number = 103;

UPDATE matches SET
  match_date = '2026-07-03',
  day_of_week = 'SEX',
  match_time = '22:30',
  stadium = 'Arrowhead Stadium',
  city = 'Kansas City'
WHERE match_number = 104;

-- Atualizar confrontos corretos das Quartas de Final
-- QF1: July 9 - Argentina vs Spain
UPDATE matches SET
  home_team_id = 37, away_team_id = 31
WHERE match_number = 93;

-- QF2: July 10 - Morocco vs Egypt
UPDATE matches SET
  home_team_id = 10, away_team_id = 27
WHERE match_number = 94;

-- QF3: July 11 - Brazil vs Portugal
UPDATE matches SET
  home_team_id = 9, away_team_id = 41
WHERE match_number = 95;

-- QF4: July 11 - England vs Ivory Coast
UPDATE matches SET
  home_team_id = 45, away_team_id = 18
WHERE match_number = 96;

-- Atualizar Semifinais
UPDATE matches SET
  match_date = '2026-07-14',
  day_of_week = 'TER',
  match_time = '19:00'
WHERE match_number = 97;

UPDATE matches SET
  match_date = '2026-07-15',
  day_of_week = 'QUA',
  match_time = '19:00'
WHERE match_number = 98;

-- Atualizar Disputa 3º lugar
UPDATE matches SET
  match_date = '2026-07-18',
  day_of_week = 'SÁB',
  match_time = '21:00'
WHERE match_number = 99;

-- Atualizar Final
UPDATE matches SET
  match_date = '2026-07-19',
  day_of_week = 'DOM',
  match_time = '19:00'
WHERE match_number = 100;