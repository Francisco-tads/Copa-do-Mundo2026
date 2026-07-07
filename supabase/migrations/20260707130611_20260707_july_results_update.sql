-- ============================================================
-- Round of 32: June 30 - July 3 Results
-- ============================================================

-- M77: June 30 - Ivory Coast vs Norway → 2-1
UPDATE matches SET
  home_score = 2, away_score = 1, winner_id = 18,
  status = 'completed'
WHERE match_number = 77;

-- M78: June 30 - France vs Sweden → 3-0
UPDATE matches SET
  home_score = 3, away_score = 0, winner_id = 33,
  status = 'completed'
WHERE match_number = 78;

-- M79: June 30 - Mexico vs Ecuador → 2-1
UPDATE matches SET
  home_score = 2, away_score = 1, winner_id = 1,
  status = 'completed'
WHERE match_number = 79;

-- M80: July 1 - England vs Congo DR → 2-0
UPDATE matches SET
  home_score = 2, away_score = 0, winner_id = 45,
  status = 'completed'
WHERE match_number = 80;

-- M81: July 1 - Belgium vs Senegal → 1-1 (Pên: 4-3)
UPDATE matches SET
  home_score = 1, away_score = 1, 
  has_penalties = true, home_penalties = 4, away_penalties = 3,
  winner_id = 25,
  status = 'completed'
WHERE match_number = 81;

-- M82: July 1 - USA vs Bosnia → 3-1
UPDATE matches SET
  home_score = 3, away_score = 1, winner_id = 13,
  status = 'completed'
WHERE match_number = 82;

-- M83: July 2 - Spain vs Austria → 2-0
UPDATE matches SET
  home_score = 2, away_score = 0, winner_id = 31,
  status = 'completed'
WHERE match_number = 83;

-- M84: July 2 - Portugal vs Croatia → 2-1
UPDATE matches SET
  home_score = 2, away_score = 1, winner_id = 41,
  status = 'completed'
WHERE match_number = 84;

-- M101: July 2 - Switzerland vs Algeria → 1-0
UPDATE matches SET
  home_score = 1, away_score = 0, winner_id = 8,
  status = 'completed'
WHERE match_number = 101;

-- M102: July 3 - Australia vs Egypt → 1-2
UPDATE matches SET
  home_score = 1, away_score = 2, winner_id = 27,
  status = 'completed'
WHERE match_number = 102;

-- M103: July 3 - Argentina vs Cape Verde → 4-0
UPDATE matches SET
  home_score = 4, away_score = 0, winner_id = 37,
  status = 'completed'
WHERE match_number = 103;

-- M104: July 3 - Colombia vs Ghana → 2-1
UPDATE matches SET
  home_score = 2, away_score = 1, winner_id = 42,
  status = 'completed'
WHERE match_number = 104;

-- ============================================================
-- Round of 16: July 4-6 Results
-- ============================================================

-- M85: July 4 - Canada vs Morocco → 1-2
UPDATE matches SET
  away_team_id = 10,
  home_score = 1, away_score = 2, winner_id = 10,
  status = 'completed'
WHERE match_number = 85;

-- M86: July 4 - Paraguay vs Ivory Coast → 1-1 (Pên: 3-5)
UPDATE matches SET
  away_team_id = 18,
  home_score = 1, away_score = 1,
  has_penalties = true, home_penalties = 3, away_penalties = 5,
  winner_id = 18,
  status = 'completed'
WHERE match_number = 86;

-- M87: July 5 - Brazil vs France → 2-1
UPDATE matches SET
  away_team_id = 33,
  home_score = 2, away_score = 1, winner_id = 9,
  status = 'completed'
WHERE match_number = 87;

-- M88: July 5 - Mexico vs England → 0-2
UPDATE matches SET
  home_team_id = 1, away_team_id = 45,
  home_score = 0, away_score = 2, winner_id = 45,
  status = 'completed'
WHERE match_number = 88;

-- M89: July 6 - Belgium vs Portugal → 1-2
UPDATE matches SET
  home_team_id = 25, away_team_id = 41,
  home_score = 1, away_score = 2, winner_id = 41,
  status = 'completed'
WHERE match_number = 89;

-- M90: July 6 - Netherlands vs Argentina → 0-3
UPDATE matches SET
  home_team_id = 22, away_team_id = 37,
  home_score = 0, away_score = 3, winner_id = 37,
  status = 'completed'
WHERE match_number = 90;