-- Update group standings for all 12 groups based on actual results
-- Data as of June 26, 2026 (after matchday 3 of groups A-F, matchday 2 of groups G-L)

-- ============================================================
-- GROUP A: Mexico(1), South Africa(2), Czechia(3), Korea(4)
-- Results: M1 MEX 2-0 RSA, M2 CZE 1-2 KOR, M3 MEX 1-0 KOR, M4 CZE 1-1 RSA, M5 MEX 3-0 CZE, M6 RSA 1-0 KOR
-- Mexico: 3W 0D 0L 6GF 0GA +6 9pts
-- South Africa: 1W 1D 1L 2GF 3GA -1 4pts
-- Korea Republic: 1W 0D 2L 2GF 3GA -1 3pts
-- Czechia: 0W 1D 2L 2GF 6GA -4 1pt
-- ============================================================
UPDATE group_standings SET played=3, won=3, drawn=0, lost=0, goals_for=6, goals_against=0, goal_difference=6, points=9, position=1 WHERE team_id=1;
UPDATE group_standings SET played=3, won=1, drawn=1, lost=1, goals_for=2, goals_against=3, goal_difference=-1, points=4, position=2 WHERE team_id=2;
UPDATE group_standings SET played=3, won=1, drawn=0, lost=2, goals_for=2, goals_against=3, goal_difference=-1, points=3, position=3 WHERE team_id=4;
UPDATE group_standings SET played=3, won=0, drawn=1, lost=2, goals_for=2, goals_against=6, goal_difference=-4, points=1, position=4 WHERE team_id=3;

-- ============================================================
-- GROUP B: Canada(5), Qatar(6), Bosnia(7), Switzerland(8)
-- Results: M7 CAN 1-1 BIH, M8 SUI 1-1 QAT, M9 SUI 4-1 BIH, M10 CAN 6-0 QAT, M11 BIH 3-1 QAT, M12 SUI 3-1 CAN
-- Switzerland: 2W 1D 0L 8GF 3GA +5 7pts
-- Canada: 1W 1D 1L 8GF 5GA +3 4pts
-- Bosnia: 1W 1D 1L 5GF 6GA -1 4pts
-- Qatar: 0W 0D 3L 2GF 11GA -9 0pts
-- ============================================================
UPDATE group_standings SET played=3, won=2, drawn=1, lost=0, goals_for=8, goals_against=3, goal_difference=5, points=7, position=1 WHERE team_id=8;
UPDATE group_standings SET played=3, won=1, drawn=1, lost=1, goals_for=8, goals_against=5, goal_difference=3, points=4, position=2 WHERE team_id=5;
UPDATE group_standings SET played=3, won=1, drawn=1, lost=1, goals_for=5, goals_against=6, goal_difference=-1, points=4, position=3 WHERE team_id=7;
UPDATE group_standings SET played=3, won=0, drawn=0, lost=3, goals_for=2, goals_against=11, goal_difference=-9, points=0, position=4 WHERE team_id=6;

-- ============================================================
-- GROUP C: Brazil(9), Morocco(10), Scotland(11), Haiti(12)
-- Results: M13 BRA 1-1 MAR, M14 SCO 1-0 HAI, M15 SCO 0-1 MAR, M16 BRA 3-0 HAI, M17 MAR 4-2 HAI, M18 SCO 0-3 BRA
-- Morocco: 2W 1D 0L 6GF 2GA +4 7pts
-- Brazil: 2W 1D 0L 7GF 1GA +6 7pts
-- Scotland: 1W 0D 2L 1GF 4GA -3 3pts
-- Haiti: 0W 0D 3L 2GF 9GA -7 0pts
-- ============================================================
UPDATE group_standings SET played=3, won=2, drawn=1, lost=0, goals_for=7, goals_against=1, goal_difference=6, points=7, position=1 WHERE team_id=9;
UPDATE group_standings SET played=3, won=2, drawn=1, lost=0, goals_for=6, goals_against=2, goal_difference=4, points=7, position=2 WHERE team_id=10;
UPDATE group_standings SET played=3, won=1, drawn=0, lost=2, goals_for=1, goals_against=4, goal_difference=-3, points=3, position=3 WHERE team_id=11;
UPDATE group_standings SET played=3, won=0, drawn=0, lost=3, goals_for=2, goals_against=9, goal_difference=-7, points=0, position=4 WHERE team_id=12;

-- ============================================================
-- GROUP D: USA(13), Australia(14), Paraguay(15), Türkiye(16)
-- Results: M19 USA 4-1 PAR, M20 AUS 2-0 TUR, M21 USA 2-0 AUS, M22 TUR 0-1 PAR
-- (M23 AUS vs PAR and M24 TUR vs USA on June 26 - scheduled today)
-- USA: 2W 0D 0L 6GF 1GA +5 6pts
-- Australia: 1W 0D 1L 2GF 2GA 0 3pts
-- Paraguay: 1W 0D 1L 2GF 5GA -3 3pts
-- Türkiye: 0W 0D 2L 0GF 3GA -3 0pts
-- ============================================================
UPDATE group_standings SET played=2, won=2, drawn=0, lost=0, goals_for=6, goals_against=1, goal_difference=5, points=6, position=1 WHERE team_id=13;
UPDATE group_standings SET played=2, won=1, drawn=0, lost=1, goals_for=2, goals_against=2, goal_difference=0, points=3, position=2 WHERE team_id=14;
UPDATE group_standings SET played=2, won=1, drawn=0, lost=1, goals_for=2, goals_against=5, goal_difference=-3, points=3, position=3 WHERE team_id=15;
UPDATE group_standings SET played=2, won=0, drawn=0, lost=2, goals_for=0, goals_against=3, goal_difference=-3, points=0, position=4 WHERE team_id=16;

-- ============================================================
-- GROUP E: Germany(17), Côte d'Ivoire(18), Curaçao(19), Ecuador(20)
-- Results: M25 GER 7-1 CUW, M26 CIV 1-0 ECU, M27 GER 2-1 CIV, M28 ECU 0-0 CUW
-- (Matchday 3: CUW 0-2 CIV and ECU 2-1 GER on June 25 - already played)
-- Germany: 2W 0D 1L 10GF 3GA +7 6pts
-- Côte d'Ivoire: 2W 0D 1L 4GF 3GA +1 6pts
-- Ecuador: 1W 1D 1L 2GF 2GA 0 4pts
-- Curaçao: 0W 1D 2L 1GF 9GA -8 1pt
-- ============================================================
UPDATE group_standings SET played=3, won=2, drawn=0, lost=1, goals_for=10, goals_against=3, goal_difference=7, points=6, position=1 WHERE team_id=17;
UPDATE group_standings SET played=3, won=2, drawn=0, lost=1, goals_for=4, goals_against=3, goal_difference=1, points=6, position=2 WHERE team_id=18;
UPDATE group_standings SET played=3, won=1, drawn=1, lost=1, goals_for=2, goals_against=2, goal_difference=0, points=4, position=3 WHERE team_id=20;
UPDATE group_standings SET played=3, won=0, drawn=1, lost=2, goals_for=1, goals_against=9, goal_difference=-8, points=1, position=4 WHERE team_id=19;

-- ============================================================
-- GROUP F: Japan(21), Netherlands(22), Sweden(23), Tunisia(24)
-- Results: M31 NED 2-2 JPN, M32 SWE 5-1 TUN, M33 NED 5-1 SWE, M34 JPN 4-0 TUN
-- (Matchday 3: JPN vs SWE and TUN vs NED on June 25 - scheduled)
-- Netherlands: 1W 1D 0L 7GF 3GA +4 4pts (after 2 games)
-- Japan: 1W 1D 0L 6GF 2GA +4 4pts (after 2 games)
-- Sweden: 1W 0D 1L 6GF 6GA 0 3pts (after 2 games)
-- Tunisia: 0W 0D 2L 1GF 9GA -8 0pts (after 2 games)
-- ============================================================
UPDATE group_standings SET played=2, won=1, drawn=1, lost=0, goals_for=7, goals_against=3, goal_difference=4, points=4, position=1 WHERE team_id=22;
UPDATE group_standings SET played=2, won=1, drawn=1, lost=0, goals_for=6, goals_against=2, goal_difference=4, points=4, position=2 WHERE team_id=21;
UPDATE group_standings SET played=2, won=1, drawn=0, lost=1, goals_for=6, goals_against=6, goal_difference=0, points=3, position=3 WHERE team_id=23;
UPDATE group_standings SET played=2, won=0, drawn=0, lost=2, goals_for=1, goals_against=9, goal_difference=-8, points=0, position=4 WHERE team_id=24;

-- ============================================================
-- GROUP G: Belgium(25), Iran(26), Egypt(27), New Zealand(28)
-- Results: M37 BEL 1-1 EGY, M38 IRN 2-2 NZL, M39 BEL 0-0 IRN, M40 EGY 3-1 NZL
-- (M41 EGY vs IRN and M42 NZL vs BEL on June 26 - today)
-- Egypt: 1W 1D 0L 4GF 2GA +2 4pts
-- Belgium: 0W 2D 0L 1GF 1GA 0 2pts
-- Iran: 0W 2D 0L 2GF 3GA -1 2pts
-- New Zealand: 0W 1D 1L 3GF 5GA -2 1pt
-- ============================================================
UPDATE group_standings SET played=2, won=1, drawn=1, lost=0, goals_for=4, goals_against=2, goal_difference=2, points=4, position=1 WHERE team_id=27;
UPDATE group_standings SET played=2, won=0, drawn=2, lost=0, goals_for=1, goals_against=1, goal_difference=0, points=2, position=2 WHERE team_id=25;
UPDATE group_standings SET played=2, won=0, drawn=2, lost=0, goals_for=2, goals_against=3, goal_difference=-1, points=2, position=3 WHERE team_id=26;
UPDATE group_standings SET played=2, won=0, drawn=1, lost=1, goals_for=3, goals_against=5, goal_difference=-2, points=1, position=4 WHERE team_id=28;

-- ============================================================
-- GROUP H: Uruguay(29), Saudi Arabia(30), Spain(31), Cabo Verde(32)
-- Results: M43 ESP 0-0 CPV, M44 KSA 1-1 URU, M45 ESP 4-0 KSA, M46 URU 2-2 CPV
-- (M47 CPV vs KSA and M48 ESP vs URU on June 26 - today)
-- Spain: 1W 1D 0L 4GF 0GA +4 4pts
-- Uruguay: 0W 2D 0L 3GF 3GA 0 2pts
-- Cabo Verde: 0W 2D 0L 2GF 4GA -2 2pts
-- Saudi Arabia: 0W 1D 1L 1GF 5GA -4 1pt
-- ============================================================
UPDATE group_standings SET played=2, won=1, drawn=1, lost=0, goals_for=4, goals_against=0, goal_difference=4, points=4, position=1 WHERE team_id=31;
UPDATE group_standings SET played=2, won=0, drawn=2, lost=0, goals_for=3, goals_against=3, goal_difference=0, points=2, position=2 WHERE team_id=29;
UPDATE group_standings SET played=2, won=0, drawn=2, lost=0, goals_for=2, goals_against=4, goal_difference=-2, points=2, position=3 WHERE team_id=32;
UPDATE group_standings SET played=2, won=0, drawn=1, lost=1, goals_for=1, goals_against=5, goal_difference=-4, points=1, position=4 WHERE team_id=30;

-- ============================================================
-- GROUP I: France(33), Iraq(34), Norway(35), Senegal(36)
-- Results: M49 FRA 3-1 SEN, M50 NOR 4-1 IRQ, M51 FRA 3-0 IRQ, M52 NOR 3-2 SEN
-- (M53 IRQ vs NOR and M54 SEN vs FRA on June 29)
-- France: 2W 0D 0L 6GF 1GA +5 6pts
-- Norway: 2W 0D 0L 7GF 3GA +4 6pts
-- Senegal: 0W 0D 2L 3GF 6GA -3 0pts
-- Iraq: 0W 0D 2L 1GF 7GA -6 0pts
-- ============================================================
UPDATE group_standings SET played=2, won=2, drawn=0, lost=0, goals_for=6, goals_against=1, goal_difference=5, points=6, position=1 WHERE team_id=33;
UPDATE group_standings SET played=2, won=2, drawn=0, lost=0, goals_for=7, goals_against=3, goal_difference=4, points=6, position=2 WHERE team_id=35;
UPDATE group_standings SET played=2, won=0, drawn=0, lost=2, goals_for=3, goals_against=6, goal_difference=-3, points=0, position=3 WHERE team_id=36;
UPDATE group_standings SET played=2, won=0, drawn=0, lost=2, goals_for=1, goals_against=7, goal_difference=-6, points=0, position=4 WHERE team_id=34;

-- ============================================================
-- GROUP J: Argentina(37), Austria(38), Algeria(39), Jordan(40)
-- Results: M55 ARG 3-0 ALG, M56 AUT 3-1 JOR, M57 ARG 2-0 AUT, M58 JOR 1-2 ALG
-- (M59 AUT vs ALG and M60 JOR vs ARG on June 29)
-- Argentina: 2W 0D 0L 5GF 0GA +5 6pts
-- Algeria: 1W 0D 1L 2GF 4GA -2 3pts
-- Austria: 1W 0D 1L 3GF 3GA 0 3pts
-- Jordan: 0W 0D 2L 2GF 5GA -3 0pts
-- ============================================================
UPDATE group_standings SET played=2, won=2, drawn=0, lost=0, goals_for=5, goals_against=0, goal_difference=5, points=6, position=1 WHERE team_id=37;
UPDATE group_standings SET played=2, won=1, drawn=0, lost=1, goals_for=3, goals_against=3, goal_difference=0, points=3, position=2 WHERE team_id=38;
UPDATE group_standings SET played=2, won=1, drawn=0, lost=1, goals_for=2, goals_against=4, goal_difference=-2, points=3, position=3 WHERE team_id=39;
UPDATE group_standings SET played=2, won=0, drawn=0, lost=2, goals_for=2, goals_against=5, goal_difference=-3, points=0, position=4 WHERE team_id=40;

-- ============================================================
-- GROUP K: Portugal(41), Colombia(42), Uzbekistan(43), Congo DR(44)
-- Results: M61 POR 1-1 COD, M62 COL 3-1 UZB, M63 POR 5-0 UZB, M64 COL 1-0 COD
-- (M65 UZB vs COL and M66 COD vs POR on June 30)
-- Colombia: 2W 0D 0L 4GF 1GA +3 6pts
-- Portugal: 1W 1D 0L 6GF 1GA +5 4pts
-- Congo DR: 0W 1D 1L 1GF 2GA -1 1pt
-- Uzbekistan: 0W 0D 2L 1GF 8GA -7 0pts
-- ============================================================
UPDATE group_standings SET played=2, won=2, drawn=0, lost=0, goals_for=4, goals_against=1, goal_difference=3, points=6, position=1 WHERE team_id=42;
UPDATE group_standings SET played=2, won=1, drawn=1, lost=0, goals_for=6, goals_against=1, goal_difference=5, points=4, position=2 WHERE team_id=41;
UPDATE group_standings SET played=2, won=0, drawn=1, lost=1, goals_for=1, goals_against=2, goal_difference=-1, points=1, position=3 WHERE team_id=44;
UPDATE group_standings SET played=2, won=0, drawn=0, lost=2, goals_for=1, goals_against=8, goal_difference=-7, points=0, position=4 WHERE team_id=43;

-- ============================================================
-- GROUP L: England(45), Croatia(46), Ghana(47), Panama(48)
-- Results: M67 ENG 4-2 CRO, M68 GHA 1-0 PAN, M69 ENG 0-0 GHA, M70 PAN 0-1 CRO
-- (M71 GHA vs CRO and M72 PAN vs ENG on June 30)
-- England: 1W 1D 0L 4GF 2GA +2 4pts
-- Ghana: 1W 1D 0L 1GF 0GA +1 4pts
-- Croatia: 1W 0D 1L 3GF 4GA -1 3pts
-- Panama: 0W 0D 2L 0GF 2GA -2 0pts
-- ============================================================
UPDATE group_standings SET played=2, won=1, drawn=1, lost=0, goals_for=4, goals_against=2, goal_difference=2, points=4, position=1 WHERE team_id=45;
UPDATE group_standings SET played=2, won=1, drawn=1, lost=0, goals_for=1, goals_against=0, goal_difference=1, points=4, position=2 WHERE team_id=47;
UPDATE group_standings SET played=2, won=1, drawn=0, lost=1, goals_for=3, goals_against=4, goal_difference=-1, points=3, position=3 WHERE team_id=46;
UPDATE group_standings SET played=2, won=0, drawn=0, lost=2, goals_for=0, goals_against=2, goal_difference=-2, points=0, position=4 WHERE team_id=48;
