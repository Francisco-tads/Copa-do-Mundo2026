-- Insert scheduled matches for group stage
INSERT INTO matches (match_number, stage, round, group_name, home_team_id, away_team_id, match_date, match_time, day_of_week, stadium, city, status) VALUES
(1, 'Group Stage', '1', 'A', (SELECT id FROM teams WHERE code = 'MEX'), (SELECT id FROM teams WHERE code = 'RSA'), '2026-06-11', '17:00', 'THU', 'Estadio Azteca', 'Mexico City', 'scheduled'),
(2, 'Group Stage', '1', 'A', (SELECT id FROM teams WHERE code = 'CZE'), (SELECT id FROM teams WHERE code = 'KOR'), '2026-06-12', '14:00', 'FRI', 'SoFi Stadium', 'Los Angeles', 'scheduled'),
(3, 'Group Stage', '2', 'A', (SELECT id FROM teams WHERE code = 'MEX'), (SELECT id FROM teams WHERE code = 'CZE'), '2026-06-17', '16:00', 'WED', 'Estadio Azteca', 'Mexico City', 'scheduled'),
(4, 'Group Stage', '2', 'A', (SELECT id FROM teams WHERE code = 'KOR'), (SELECT id FROM teams WHERE code = 'RSA'), '2026-06-17', '19:00', 'WED', 'SoFi Stadium', 'Los Angeles', 'scheduled'),
(5, 'Group Stage', '3', 'A', (SELECT id FROM teams WHERE code = 'RSA'), (SELECT id FROM teams WHERE code = 'CZE'), '2026-06-23', '15:00', 'TUE', 'AT&T Stadium', 'Dallas', 'scheduled'),
(6, 'Group Stage', '3', 'A', (SELECT id FROM teams WHERE code = 'KOR'), (SELECT id FROM teams WHERE code = 'MEX'), '2026-06-23', '15:00', 'TUE', 'Estadio Azteca', 'Mexico City', 'scheduled');