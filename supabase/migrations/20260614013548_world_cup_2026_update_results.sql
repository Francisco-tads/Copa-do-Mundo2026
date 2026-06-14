-- Fix Group B Round 1 match assignments and add results
-- Canada 1-1 Bosnia (not Canada vs Qatar)
UPDATE matches SET
  away_team_id = (SELECT id FROM teams WHERE code = 'BIH'),
  home_score = 1, away_score = 1, status = 'completed'
WHERE match_number = 7;

-- Switzerland 1-1 Qatar (not Bosnia vs Switzerland)
UPDATE matches SET
  home_team_id = (SELECT id FROM teams WHERE code = 'SUI'),
  away_team_id = (SELECT id FROM teams WHERE code = 'QAT'),
  home_score = 1, away_score = 1, status = 'completed'
WHERE match_number = 8;

-- Fix Group C Round 1: Brazil 1-1 Morocco (not Brazil vs Haiti)
UPDATE matches SET
  away_team_id = (SELECT id FROM teams WHERE code = 'MAR'),
  home_score = 1, away_score = 1, status = 'completed'
WHERE match_number = 13;

-- Scotland vs Haiti (not Morocco vs Scotland) - scheduled for Jun 14
UPDATE matches SET
  home_team_id = (SELECT id FROM teams WHERE code = 'SCO'),
  away_team_id = (SELECT id FROM teams WHERE code = 'HAI'),
  match_date = '2026-06-14'
WHERE match_number = 14;

-- Fix Group D Round 1: USA 4-1 Paraguay (not USA vs Australia)
UPDATE matches SET
  away_team_id = (SELECT id FROM teams WHERE code = 'PAR'),
  home_score = 4, away_score = 1, status = 'completed',
  match_date = '2026-06-12'
WHERE match_number = 19;

-- Türkiye vs Australia (not Paraguay vs Turkey) - scheduled
UPDATE matches SET
  home_team_id = (SELECT id FROM teams WHERE code = 'TUR'),
  away_team_id = (SELECT id FROM teams WHERE code = 'AUS'),
  match_date = '2026-06-13'
WHERE match_number = 20;

-- Group A: Mexico 2-0 South Africa
UPDATE matches SET home_score = 2, away_score = 0, status = 'completed'
WHERE match_number = 1;

-- Group A: Czechia 1-2 Korea Republic
UPDATE matches SET home_score = 1, away_score = 2, status = 'completed'
WHERE match_number = 2;

-- Update group standings - Group A
UPDATE group_standings SET
  played = 1, won = 1, drawn = 0, lost = 0, goals_for = 2, goals_against = 0, goal_difference = 2, points = 3
WHERE team_id = (SELECT id FROM teams WHERE code = 'MEX');

UPDATE group_standings SET
  played = 1, won = 0, drawn = 0, lost = 1, goals_for = 0, goals_against = 2, goal_difference = -2, points = 0
WHERE team_id = (SELECT id FROM teams WHERE code = 'RSA');

UPDATE group_standings SET
  played = 1, won = 0, drawn = 0, lost = 1, goals_for = 1, goals_against = 2, goal_difference = -1, points = 0
WHERE team_id = (SELECT id FROM teams WHERE code = 'CZE');

UPDATE group_standings SET
  played = 1, won = 1, drawn = 0, lost = 0, goals_for = 2, goals_against = 1, goal_difference = 1, points = 3
WHERE team_id = (SELECT id FROM teams WHERE code = 'KOR');

-- Update group standings - Group B
UPDATE group_standings SET
  played = 1, won = 0, drawn = 1, lost = 0, goals_for = 1, goals_against = 1, goal_difference = 0, points = 1
WHERE team_id = (SELECT id FROM teams WHERE code = 'CAN');

UPDATE group_standings SET
  played = 1, won = 0, drawn = 1, lost = 0, goals_for = 1, goals_against = 1, goal_difference = 0, points = 1
WHERE team_id = (SELECT id FROM teams WHERE code = 'BIH');

UPDATE group_standings SET
  played = 1, won = 0, drawn = 1, lost = 0, goals_for = 1, goals_against = 1, goal_difference = 0, points = 1
WHERE team_id = (SELECT id FROM teams WHERE code = 'SUI');

UPDATE group_standings SET
  played = 1, won = 0, drawn = 1, lost = 0, goals_for = 1, goals_against = 1, goal_difference = 0, points = 1
WHERE team_id = (SELECT id FROM teams WHERE code = 'QAT');

-- Update group standings - Group C
UPDATE group_standings SET
  played = 1, won = 0, drawn = 1, lost = 0, goals_for = 1, goals_against = 1, goal_difference = 0, points = 1
WHERE team_id = (SELECT id FROM teams WHERE code = 'BRA');

UPDATE group_standings SET
  played = 1, won = 0, drawn = 1, lost = 0, goals_for = 1, goals_against = 1, goal_difference = 0, points = 1
WHERE team_id = (SELECT id FROM teams WHERE code = 'MAR');

-- Update group standings - Group D
UPDATE group_standings SET
  played = 1, won = 1, drawn = 0, lost = 0, goals_for = 4, goals_against = 1, goal_difference = 3, points = 3
WHERE team_id = (SELECT id FROM teams WHERE code = 'USA');

UPDATE group_standings SET
  played = 1, won = 0, drawn = 0, lost = 1, goals_for = 1, goals_against = 4, goal_difference = -3, points = 0
WHERE team_id = (SELECT id FROM teams WHERE code = 'PAR');