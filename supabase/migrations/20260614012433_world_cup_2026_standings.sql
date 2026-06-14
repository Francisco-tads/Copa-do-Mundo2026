-- Initialize group standings for all teams
INSERT INTO group_standings (team_id, group_name)
SELECT id, group_name FROM teams;