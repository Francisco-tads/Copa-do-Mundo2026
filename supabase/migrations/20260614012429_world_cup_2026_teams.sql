-- Insert all 48 teams for World Cup 2026
INSERT INTO teams (name, code, flag_url, group_name, is_host, confederation) VALUES
-- Group A
('Mexico', 'MEX', 'https://flagcdn.com/w80/mx.png', 'A', true, 'CONCACAF'),
('South Africa', 'RSA', 'https://flagcdn.com/w80/za.png', 'A', false, 'CAF'),
('Czechia', 'CZE', 'https://flagcdn.com/w80/cz.png', 'A', false, 'UEFA'),
('Korea Republic', 'KOR', 'https://flagcdn.com/w80/kr.png', 'A', false, 'AFC'),
-- Group B
('Canada', 'CAN', 'https://flagcdn.com/w80/ca.png', 'B', true, 'CONCACAF'),
('Qatar', 'QAT', 'https://flagcdn.com/w80/qa.png', 'B', false, 'AFC'),
('Bosnia and Herzegovina', 'BIH', 'https://flagcdn.com/w80/ba.png', 'B', false, 'UEFA'),
('Switzerland', 'SUI', 'https://flagcdn.com/w80/ch.png', 'B', false, 'UEFA'),
-- Group C
('Brazil', 'BRA', 'https://flagcdn.com/w80/br.png', 'C', false, 'CONMEBOL'),
('Morocco', 'MAR', 'https://flagcdn.com/w80/ma.png', 'C', false, 'CAF'),
('Scotland', 'SCO', 'https://flagcdn.com/w80/gb-sct.png', 'C', false, 'UEFA'),
('Haiti', 'HAI', 'https://flagcdn.com/w80/ht.png', 'C', false, 'CONCACAF'),
-- Group D
('USA', 'USA', 'https://flagcdn.com/w80/us.png', 'D', true, 'CONCACAF'),
('Australia', 'AUS', 'https://flagcdn.com/w80/au.png', 'D', false, 'AFC'),
('Paraguay', 'PAR', 'https://flagcdn.com/w80/py.png', 'D', false, 'CONMEBOL'),
('Türkiye', 'TUR', 'https://flagcdn.com/w80/tr.png', 'D', false, 'UEFA'),
-- Group E
('Germany', 'GER', 'https://flagcdn.com/w80/de.png', 'E', false, 'UEFA'),
('Côte d''Ivoire', 'CIV', 'https://flagcdn.com/w80/ci.png', 'E', false, 'CAF'),
('Curaçao', 'CUW', 'https://flagcdn.com/w80/cw.png', 'E', false, 'CONCACAF'),
('Ecuador', 'ECU', 'https://flagcdn.com/w80/ec.png', 'E', false, 'CONMEBOL'),
-- Group F
('Japan', 'JPN', 'https://flagcdn.com/w80/jp.png', 'F', false, 'AFC'),
('Netherlands', 'NED', 'https://flagcdn.com/w80/nl.png', 'F', false, 'UEFA'),
('Sweden', 'SWE', 'https://flagcdn.com/w80/se.png', 'F', false, 'UEFA'),
('Tunisia', 'TUN', 'https://flagcdn.com/w80/tn.png', 'F', false, 'CAF'),
-- Group G
('Belgium', 'BEL', 'https://flagcdn.com/w80/be.png', 'G', false, 'UEFA'),
('IR Iran', 'IRN', 'https://flagcdn.com/w80/ir.png', 'G', false, 'AFC'),
('Egypt', 'EGY', 'https://flagcdn.com/w80/eg.png', 'G', false, 'CAF'),
('New Zealand', 'NZL', 'https://flagcdn.com/w80/nz.png', 'G', false, 'OFC'),
-- Group H
('Uruguay', 'URU', 'https://flagcdn.com/w80/uy.png', 'H', false, 'CONMEBOL'),
('Saudi Arabia', 'KSA', 'https://flagcdn.com/w80/sa.png', 'H', false, 'AFC'),
('Spain', 'ESP', 'https://flagcdn.com/w80/es.png', 'H', false, 'UEFA'),
('Cabo Verde', 'CPV', 'https://flagcdn.com/w80/cv.png', 'H', false, 'CAF'),
-- Group I
('France', 'FRA', 'https://flagcdn.com/w80/fr.png', 'I', false, 'UEFA'),
('Iraq', 'IRQ', 'https://flagcdn.com/w80/iq.png', 'I', false, 'AFC'),
('Norway', 'NOR', 'https://flagcdn.com/w80/no.png', 'I', false, 'UEFA'),
('Senegal', 'SEN', 'https://flagcdn.com/w80/sn.png', 'I', false, 'CAF'),
-- Group J
('Argentina', 'ARG', 'https://flagcdn.com/w80/ar.png', 'J', false, 'CONMEBOL'),
('Austria', 'AUT', 'https://flagcdn.com/w80/at.png', 'J', false, 'UEFA'),
('Algeria', 'ALG', 'https://flagcdn.com/w80/dz.png', 'J', false, 'CAF'),
('Jordan', 'JOR', 'https://flagcdn.com/w80/jo.png', 'J', false, 'AFC'),
-- Group K
('Portugal', 'POR', 'https://flagcdn.com/w80/pt.png', 'K', false, 'UEFA'),
('Colombia', 'COL', 'https://flagcdn.com/w80/co.png', 'K', false, 'CONMEBOL'),
('Uzbekistan', 'UZB', 'https://flagcdn.com/w80/uz.png', 'K', false, 'AFC'),
('Congo DR', 'COD', 'https://flagcdn.com/w80/cd.png', 'K', false, 'CAF'),
-- Group L
('England', 'ENG', 'https://flagcdn.com/w80/gb-eng.png', 'L', false, 'UEFA'),
('Croatia', 'CRO', 'https://flagcdn.com/w80/hr.png', 'L', false, 'UEFA'),
('Ghana', 'GHA', 'https://flagcdn.com/w80/gh.png', 'L', false, 'CAF'),
('Panama', 'PAN', 'https://flagcdn.com/w80/pa.png', 'L', false, 'CONCACAF');