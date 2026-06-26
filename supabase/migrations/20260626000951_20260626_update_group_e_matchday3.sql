-- Update matchday 3 results for Groups E (June 25) 
-- Curaçao 0-2 Ivory Coast and Ecuador 2-1 Germany (June 25)

-- M29: CIV 2-0 CUW (real: Curaçao 0-2 Ivory Coast)
-- In the DB, M29 is home=CIV(18) away=Curaçao(19) -> correct teams, update score
UPDATE matches SET home_score=2, away_score=0, status='completed', winner_id=18
  WHERE match_number=29;

-- M30: ECU 2-1 GER (real: Ecuador 2-1 Germany)
-- In the DB, M30 is home=Ecuador(20) away=Germany(17) -> correct teams, update score
UPDATE matches SET home_score=2, away_score=1, status='completed', winner_id=20
  WHERE match_number=30;
