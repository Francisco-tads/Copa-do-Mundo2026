-- Group B matches
INSERT INTO matches (match_number, stage, round, group_name, home_team_id, away_team_id, match_date, match_time, day_of_week, stadium, city, status) VALUES
(7, 'Group Stage', '1', 'B', (SELECT id FROM teams WHERE code = 'CAN'), (SELECT id FROM teams WHERE code = 'QAT'), '2026-06-12', '18:00', 'FRI', 'BMO Field', 'Toronto', 'scheduled'),
(8, 'Group Stage', '1', 'B', (SELECT id FROM teams WHERE code = 'BIH'), (SELECT id FROM teams WHERE code = 'SUI'), '2026-06-12', '21:00', 'FRI', 'Mercedes-Benz Stadium', 'Atlanta', 'scheduled'),
(9, 'Group Stage', '2', 'B', (SELECT id FROM teams WHERE code = 'CAN'), (SELECT id FROM teams WHERE code = 'BIH'), '2026-06-18', '15:00', 'THU', 'BMO Field', 'Toronto', 'scheduled'),
(10, 'Group Stage', '2', 'B', (SELECT id FROM teams WHERE code = 'SUI'), (SELECT id FROM teams WHERE code = 'QAT'), '2026-06-18', '18:00', 'THU', 'Mercedes-Benz Stadium', 'Atlanta', 'scheduled'),
(11, 'Group Stage', '3', 'B', (SELECT id FROM teams WHERE code = 'QAT'), (SELECT id FROM teams WHERE code = 'BIH'), '2026-06-24', '16:00', 'WED', 'Lumen Field', 'Seattle', 'scheduled'),
(12, 'Group Stage', '3', 'B', (SELECT id FROM teams WHERE code = 'SUI'), (SELECT id FROM teams WHERE code = 'CAN'), '2026-06-24', '16:00', 'WED', 'BMO Field', 'Toronto', 'scheduled');

-- Group C matches
INSERT INTO matches (match_number, stage, round, group_name, home_team_id, away_team_id, match_date, match_time, day_of_week, stadium, city, status) VALUES
(13, 'Group Stage', '1', 'C', (SELECT id FROM teams WHERE code = 'BRA'), (SELECT id FROM teams WHERE code = 'HAI'), '2026-06-13', '16:00', 'SAT', 'SoFi Stadium', 'Los Angeles', 'scheduled'),
(14, 'Group Stage', '1', 'C', (SELECT id FROM teams WHERE code = 'MAR'), (SELECT id FROM teams WHERE code = 'SCO'), '2026-06-14', '13:00', 'SUN', 'MetLife Stadium', 'New York', 'scheduled'),
(15, 'Group Stage', '2', 'C', (SELECT id FROM teams WHERE code = 'BRA'), (SELECT id FROM teams WHERE code = 'MAR'), '2026-06-19', '18:00', 'THU', 'SoFi Stadium', 'Los Angeles', 'scheduled'),
(16, 'Group Stage', '2', 'C', (SELECT id FROM teams WHERE code = 'SCO'), (SELECT id FROM teams WHERE code = 'HAI'), '2026-06-19', '21:00', 'THU', 'MetLife Stadium', 'New York', 'scheduled'),
(17, 'Group Stage', '3', 'C', (SELECT id FROM teams WHERE code = 'HAI'), (SELECT id FROM teams WHERE code = 'MAR'), '2026-06-25', '17:00', 'THU', 'MetLife Stadium', 'New York', 'scheduled'),
(18, 'Group Stage', '3', 'C', (SELECT id FROM teams WHERE code = 'SCO'), (SELECT id FROM teams WHERE code = 'BRA'), '2026-06-25', '17:00', 'THU', 'SoFi Stadium', 'Los Angeles', 'scheduled');

-- Group D matches
INSERT INTO matches (match_number, stage, round, group_name, home_team_id, away_team_id, match_date, match_time, day_of_week, stadium, city, status) VALUES
(19, 'Group Stage', '1', 'D', (SELECT id FROM teams WHERE code = 'USA'), (SELECT id FROM teams WHERE code = 'AUS'), '2026-06-13', '19:00', 'SAT', 'MetLife Stadium', 'New York', 'scheduled'),
(20, 'Group Stage', '1', 'D', (SELECT id FROM teams WHERE code = 'PAR'), (SELECT id FROM teams WHERE code = 'TUR'), '2026-06-14', '16:00', 'SUN', 'Arrowhead Stadium', 'Kansas City', 'scheduled'),
(21, 'Group Stage', '2', 'D', (SELECT id FROM teams WHERE code = 'USA'), (SELECT id FROM teams WHERE code = 'PAR'), '2026-06-20', '20:00', 'FRI', 'MetLife Stadium', 'New York', 'scheduled'),
(22, 'Group Stage', '2', 'D', (SELECT id FROM teams WHERE code = 'TUR'), (SELECT id FROM teams WHERE code = 'AUS'), '2026-06-20', '17:00', 'FRI', 'Arrowhead Stadium', 'Kansas City', 'scheduled'),
(23, 'Group Stage', '3', 'D', (SELECT id FROM teams WHERE code = 'AUS'), (SELECT id FROM teams WHERE code = 'PAR'), '2026-06-26', '18:00', 'FRI', 'AT&T Stadium', 'Dallas', 'scheduled'),
(24, 'Group Stage', '3', 'D', (SELECT id FROM teams WHERE code = 'TUR'), (SELECT id FROM teams WHERE code = 'USA'), '2026-06-26', '18:00', 'FRI', 'MetLife Stadium', 'New York', 'scheduled');

-- Group E matches
INSERT INTO matches (match_number, stage, round, group_name, home_team_id, away_team_id, match_date, match_time, day_of_week, stadium, city, status) VALUES
(25, 'Group Stage', '1', 'E', (SELECT id FROM teams WHERE code = 'GER'), (SELECT id FROM teams WHERE code = 'CIV'), '2026-06-15', '15:00', 'MON', 'MetLife Stadium', 'New York', 'scheduled'),
(26, 'Group Stage', '1', 'E', (SELECT id FROM teams WHERE code = 'CUW'), (SELECT id FROM teams WHERE code = 'ECU'), '2026-06-15', '18:00', 'MON', 'Lincoln Financial Field', 'Philadelphia', 'scheduled'),
(27, 'Group Stage', '2', 'E', (SELECT id FROM teams WHERE code = 'GER'), (SELECT id FROM teams WHERE code = 'CUW'), '2026-06-21', '14:00', 'SUN', 'MetLife Stadium', 'New York', 'scheduled'),
(28, 'Group Stage', '2', 'E', (SELECT id FROM teams WHERE code = 'ECU'), (SELECT id FROM teams WHERE code = 'CIV'), '2026-06-21', '17:00', 'SUN', 'Lincoln Financial Field', 'Philadelphia', 'scheduled'),
(29, 'Group Stage', '3', 'E', (SELECT id FROM teams WHERE code = 'CIV'), (SELECT id FROM teams WHERE code = 'CUW'), '2026-06-27', '16:00', 'SAT', 'Mercedes-Benz Stadium', 'Atlanta', 'scheduled'),
(30, 'Group Stage', '3', 'E', (SELECT id FROM teams WHERE code = 'ECU'), (SELECT id FROM teams WHERE code = 'GER'), '2026-06-27', '16:00', 'SAT', 'MetLife Stadium', 'New York', 'scheduled');

-- Group F matches
INSERT INTO matches (match_number, stage, round, group_name, home_team_id, away_team_id, match_date, match_time, day_of_week, stadium, city, status) VALUES
(31, 'Group Stage', '1', 'F', (SELECT id FROM teams WHERE code = 'JPN'), (SELECT id FROM teams WHERE code = 'TUN'), '2026-06-14', '17:00', 'SUN', 'NRG Stadium', 'Houston', 'scheduled'),
(32, 'Group Stage', '1', 'F', (SELECT id FROM teams WHERE code = 'NED'), (SELECT id FROM teams WHERE code = 'SWE'), '2026-06-15', '20:00', 'MON', 'SoFi Stadium', 'Los Angeles', 'scheduled'),
(33, 'Group Stage', '2', 'F', (SELECT id FROM teams WHERE code = 'JPN'), (SELECT id FROM teams WHERE code = 'NED'), '2026-06-21', '20:00', 'SUN', 'NRG Stadium', 'Houston', 'scheduled'),
(34, 'Group Stage', '2', 'F', (SELECT id FROM teams WHERE code = 'SWE'), (SELECT id FROM teams WHERE code = 'TUN'), '2026-06-21', '15:00', 'SUN', 'SoFi Stadium', 'Los Angeles', 'scheduled'),
(35, 'Group Stage', '3', 'F', (SELECT id FROM teams WHERE code = 'TUN'), (SELECT id FROM teams WHERE code = 'NED'), '2026-06-27', '19:00', 'SAT', 'SoFi Stadium', 'Los Angeles', 'scheduled'),
(36, 'Group Stage', '3', 'F', (SELECT id FROM teams WHERE code = 'SWE'), (SELECT id FROM teams WHERE code = 'JPN'), '2026-06-27', '19:00', 'SAT', 'NRG Stadium', 'Houston', 'scheduled');

-- Group G matches
INSERT INTO matches (match_number, stage, round, group_name, home_team_id, away_team_id, match_date, match_time, day_of_week, stadium, city, status) VALUES
(37, 'Group Stage', '1', 'G', (SELECT id FROM teams WHERE code = 'BEL'), (SELECT id FROM teams WHERE code = 'IRN'), '2026-06-15', '14:00', 'MON', 'FedEx Field', 'Washington DC', 'scheduled'),
(38, 'Group Stage', '1', 'G', (SELECT id FROM teams WHERE code = 'EGY'), (SELECT id FROM teams WHERE code = 'NZL'), '2026-06-15', '17:00', 'MON', 'Hard Rock Stadium', 'Miami', 'scheduled'),
(39, 'Group Stage', '2', 'G', (SELECT id FROM teams WHERE code = 'BEL'), (SELECT id FROM teams WHERE code = 'EGY'), '2026-06-22', '18:00', 'MON', 'FedEx Field', 'Washington DC', 'scheduled'),
(40, 'Group Stage', '2', 'G', (SELECT id FROM teams WHERE code = 'NZL'), (SELECT id FROM teams WHERE code = 'IRN'), '2026-06-22', '15:00', 'MON', 'Hard Rock Stadium', 'Miami', 'scheduled'),
(41, 'Group Stage', '3', 'G', (SELECT id FROM teams WHERE code = 'IRN'), (SELECT id FROM teams WHERE code = 'EGY'), '2026-06-28', '14:00', 'SUN', 'Hard Rock Stadium', 'Miami', 'scheduled'),
(42, 'Group Stage', '3', 'G', (SELECT id FROM teams WHERE code = 'NZL'), (SELECT id FROM teams WHERE code = 'BEL'), '2026-06-28', '14:00', 'SUN', 'FedEx Field', 'Washington DC', 'scheduled');

-- Group H matches
INSERT INTO matches (match_number, stage, round, group_name, home_team_id, away_team_id, match_date, match_time, day_of_week, stadium, city, status) VALUES
(43, 'Group Stage', '1', 'H', (SELECT id FROM teams WHERE code = 'URU'), (SELECT id FROM teams WHERE code = 'CPV'), '2026-06-14', '20:00', 'SUN', 'Gillette Stadium', 'Boston', 'scheduled'),
(44, 'Group Stage', '1', 'H', (SELECT id FROM teams WHERE code = 'KSA'), (SELECT id FROM teams WHERE code = 'ESP'), '2026-06-15', '13:00', 'MON', 'Estadio BBVA', 'Monterrey', 'scheduled'),
(45, 'Group Stage', '2', 'H', (SELECT id FROM teams WHERE code = 'URU'), (SELECT id FROM teams WHERE code = 'KSA'), '2026-06-22', '16:00', 'MON', 'Gillette Stadium', 'Boston', 'scheduled'),
(46, 'Group Stage', '2', 'H', (SELECT id FROM teams WHERE code = 'ESP'), (SELECT id FROM teams WHERE code = 'CPV'), '2026-06-22', '13:00', 'MON', 'Estadio BBVA', 'Monterrey', 'scheduled'),
(47, 'Group Stage', '3', 'H', (SELECT id FROM teams WHERE code = 'CPV'), (SELECT id FROM teams WHERE code = 'KSA'), '2026-06-28', '17:00', 'SUN', 'Estadio BBVA', 'Monterrey', 'scheduled'),
(48, 'Group Stage', '3', 'H', (SELECT id FROM teams WHERE code = 'ESP'), (SELECT id FROM teams WHERE code = 'URU'), '2026-06-28', '17:00', 'SUN', 'Gillette Stadium', 'Boston', 'scheduled');

-- Group I matches
INSERT INTO matches (match_number, stage, round, group_name, home_team_id, away_team_id, match_date, match_time, day_of_week, stadium, city, status) VALUES
(49, 'Group Stage', '1', 'I', (SELECT id FROM teams WHERE code = 'FRA'), (SELECT id FROM teams WHERE code = 'IRQ'), '2026-06-16', '18:00', 'TUE', 'AT&T Stadium', 'Dallas', 'scheduled'),
(50, 'Group Stage', '1', 'I', (SELECT id FROM teams WHERE code = 'NOR'), (SELECT id FROM teams WHERE code = 'SEN'), '2026-06-17', '15:00', 'WED', 'Lumen Field', 'Seattle', 'scheduled'),
(51, 'Group Stage', '2', 'I', (SELECT id FROM teams WHERE code = 'FRA'), (SELECT id FROM teams WHERE code = 'NOR'), '2026-06-23', '18:00', 'TUE', 'AT&T Stadium', 'Dallas', 'scheduled'),
(52, 'Group Stage', '2', 'I', (SELECT id FROM teams WHERE code = 'SEN'), (SELECT id FROM teams WHERE code = 'IRQ'), '2026-06-23', '14:00', 'TUE', 'Lumen Field', 'Seattle', 'scheduled'),
(53, 'Group Stage', '3', 'I', (SELECT id FROM teams WHERE code = 'IRQ'), (SELECT id FROM teams WHERE code = 'NOR'), '2026-06-29', '15:00', 'MON', 'Lumen Field', 'Seattle', 'scheduled'),
(54, 'Group Stage', '3', 'I', (SELECT id FROM teams WHERE code = 'SEN'), (SELECT id FROM teams WHERE code = 'FRA'), '2026-06-29', '15:00', 'MON', 'AT&T Stadium', 'Dallas', 'scheduled');

-- Group J matches
INSERT INTO matches (match_number, stage, round, group_name, home_team_id, away_team_id, match_date, match_time, day_of_week, stadium, city, status) VALUES
(55, 'Group Stage', '1', 'J', (SELECT id FROM teams WHERE code = 'ARG'), (SELECT id FROM teams WHERE code = 'AUT'), '2026-06-16', '16:00', 'TUE', 'Estadio Akron', 'Guadalajara', 'scheduled'),
(56, 'Group Stage', '1', 'J', (SELECT id FROM teams WHERE code = 'ALG'), (SELECT id FROM teams WHERE code = 'JOR'), '2026-06-16', '19:00', 'TUE', 'Estadio Azteca', 'Mexico City', 'scheduled'),
(57, 'Group Stage', '2', 'J', (SELECT id FROM teams WHERE code = 'ARG'), (SELECT id FROM teams WHERE code = 'ALG'), '2026-06-23', '17:00', 'TUE', 'Estadio Akron', 'Guadalajara', 'scheduled'),
(58, 'Group Stage', '2', 'J', (SELECT id FROM teams WHERE code = 'JOR'), (SELECT id FROM teams WHERE code = 'AUT'), '2026-06-23', '20:00', 'TUE', 'Estadio Azteca', 'Mexico City', 'scheduled'),
(59, 'Group Stage', '3', 'J', (SELECT id FROM teams WHERE code = 'AUT'), (SELECT id FROM teams WHERE code = 'ALG'), '2026-06-29', '18:00', 'MON', 'Estadio Azteca', 'Mexico City', 'scheduled'),
(60, 'Group Stage', '3', 'J', (SELECT id FROM teams WHERE code = 'JOR'), (SELECT id FROM teams WHERE code = 'ARG'), '2026-06-29', '18:00', 'MON', 'Estadio Akron', 'Guadalajara', 'scheduled');

-- Group K matches
INSERT INTO matches (match_number, stage, round, group_name, home_team_id, away_team_id, match_date, match_time, day_of_week, stadium, city, status) VALUES
(61, 'Group Stage', '1', 'K', (SELECT id FROM teams WHERE code = 'POR'), (SELECT id FROM teams WHERE code = 'UZB'), '2026-06-17', '13:00', 'WED', 'Rose Bowl', 'Los Angeles', 'scheduled'),
(62, 'Group Stage', '1', 'K', (SELECT id FROM teams WHERE code = 'COL'), (SELECT id FROM teams WHERE code = 'COD'), '2026-06-17', '16:00', 'WED', 'MetLife Stadium', 'New York', 'scheduled'),
(63, 'Group Stage', '2', 'K', (SELECT id FROM teams WHERE code = 'POR'), (SELECT id FROM teams WHERE code = 'COL'), '2026-06-24', '14:00', 'WED', 'Rose Bowl', 'Los Angeles', 'scheduled'),
(64, 'Group Stage', '2', 'K', (SELECT id FROM teams WHERE code = 'COD'), (SELECT id FROM teams WHERE code = 'UZB'), '2026-06-24', '17:00', 'WED', 'MetLife Stadium', 'New York', 'scheduled'),
(65, 'Group Stage', '3', 'K', (SELECT id FROM teams WHERE code = 'UZB'), (SELECT id FROM teams WHERE code = 'COL'), '2026-06-30', '16:00', 'TUE', 'MetLife Stadium', 'New York', 'scheduled'),
(66, 'Group Stage', '3', 'K', (SELECT id FROM teams WHERE code = 'COD'), (SELECT id FROM teams WHERE code = 'POR'), '2026-06-30', '16:00', 'TUE', 'Rose Bowl', 'Los Angeles', 'scheduled');

-- Group L matches
INSERT INTO matches (match_number, stage, round, group_name, home_team_id, away_team_id, match_date, match_time, day_of_week, stadium, city, status) VALUES
(67, 'Group Stage', '1', 'L', (SELECT id FROM teams WHERE code = 'ENG'), (SELECT id FROM teams WHERE code = 'GHA'), '2026-06-17', '19:00', 'WED', 'Lincoln Financial Field', 'Philadelphia', 'scheduled'),
(68, 'Group Stage', '1', 'L', (SELECT id FROM teams WHERE code = 'CRO'), (SELECT id FROM teams WHERE code = 'PAN'), '2026-06-18', '16:00', 'THU', 'MetLife Stadium', 'New York', 'scheduled'),
(69, 'Group Stage', '2', 'L', (SELECT id FROM teams WHERE code = 'ENG'), (SELECT id FROM teams WHERE code = 'CRO'), '2026-06-24', '15:00', 'WED', 'Lincoln Financial Field', 'Philadelphia', 'scheduled'),
(70, 'Group Stage', '2', 'L', (SELECT id FROM teams WHERE code = 'PAN'), (SELECT id FROM teams WHERE code = 'GHA'), '2026-06-24', '18:00', 'WED', 'MetLife Stadium', 'New York', 'scheduled'),
(71, 'Group Stage', '3', 'L', (SELECT id FROM teams WHERE code = 'GHA'), (SELECT id FROM teams WHERE code = 'CRO'), '2026-06-30', '19:00', 'TUE', 'MetLife Stadium', 'New York', 'scheduled'),
(72, 'Group Stage', '3', 'L', (SELECT id FROM teams WHERE code = 'PAN'), (SELECT id FROM teams WHERE code = 'ENG'), '2026-06-30', '19:00', 'TUE', 'Lincoln Financial Field', 'Philadelphia', 'scheduled');