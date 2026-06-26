-- Update Group Stage results for World Cup 2026
-- All results sourced from public sports reporting (Yahoo Sports) as of June 26, 2026

-- ============================================================
-- GROUP A
-- ============================================================
-- M1: Mexico 2-0 South Africa (already correct)
-- M2: Czechia 1-2 Korea Republic (already correct)

-- M3: Real match was Mexico 1-0 South Korea (home_team stays Mexico=1, away was Czechia=3, should be Korea=4)
UPDATE matches SET away_team_id=4, home_score=1, away_score=0, status='completed',
  winner_id=1 WHERE match_number=3;

-- M4: Real match was Czechia 1-1 South Africa (home was Korea=4, should be Czechia=3; away was S.Africa=2, correct)
UPDATE matches SET home_team_id=3, home_score=1, away_score=1, status='completed',
  winner_id=NULL WHERE match_number=4;

-- M5: Real match was Mexico 3-0 Czechia (home was S.Africa=2, should be Mexico=1; away was Czechia=3, correct)
UPDATE matches SET home_team_id=1, home_score=3, away_score=0, status='completed',
  winner_id=1 WHERE match_number=5;

-- M6: Real match was South Africa 1-0 South Korea (home was Korea=4, should be S.Africa=2; away was Mexico=1, should be Korea=4)
UPDATE matches SET home_team_id=2, away_team_id=4, home_score=1, away_score=0, status='completed',
  winner_id=2 WHERE match_number=6;

-- ============================================================
-- GROUP B
-- M7: Canada 1-1 Bosnia (already correct)
-- M8: Switzerland 1-1 Qatar (already correct)
-- ============================================================

-- M9: Real match was Switzerland 4-1 Bosnia (home was Canada=5, should be Switzerland=8; away was Bosnia=7, correct)
UPDATE matches SET home_team_id=8, home_score=4, away_score=1, status='completed',
  winner_id=8 WHERE match_number=9;

-- M10: Real match was Canada 6-0 Qatar (home was Switzerland=8, should be Canada=5; away was Qatar=6, correct)
UPDATE matches SET home_team_id=5, home_score=6, away_score=0, status='completed',
  winner_id=5 WHERE match_number=10;

-- M11: Real match was Bosnia 3-1 Qatar (home was Qatar=6, away was Bosnia=7 → swap)
UPDATE matches SET home_team_id=7, away_team_id=6, home_score=3, away_score=1, status='completed',
  winner_id=7 WHERE match_number=11;

-- M12: Real match was Switzerland 3-1 Canada (home was Switzerland=8, away was Canada=5, correct)
UPDATE matches SET home_score=3, away_score=1, status='completed',
  winner_id=8 WHERE match_number=12;

-- ============================================================
-- GROUP C
-- M13: Brazil 1-1 Morocco (already correct)
-- ============================================================

-- M14: Scotland 1-0 Haiti (home Scotland=11, away Haiti=12, correct)
UPDATE matches SET home_score=1, away_score=0, status='completed',
  winner_id=11 WHERE match_number=14;

-- M15: Real match was Scotland 0-1 Morocco (home was Brazil=9, should be Scotland=11; away was Morocco=10)
UPDATE matches SET home_team_id=11, away_team_id=10, home_score=0, away_score=1, status='completed',
  winner_id=10 WHERE match_number=15;

-- M16: Real match was Brazil 3-0 Haiti (home was Scotland=11, should be Brazil=9; away was Haiti=12, correct)
UPDATE matches SET home_team_id=9, home_score=3, away_score=0, status='completed',
  winner_id=9 WHERE match_number=16;

-- M17: Real match was Morocco 4-2 Haiti (home was Haiti=12, away was Morocco=10 → swap)
UPDATE matches SET home_team_id=10, away_team_id=12, home_score=4, away_score=2, status='completed',
  winner_id=10 WHERE match_number=17;

-- M18: Real match was Scotland 0-3 Brazil (home was Scotland=11, away was Brazil=9)
UPDATE matches SET home_score=0, away_score=3, status='completed',
  winner_id=9 WHERE match_number=18;

-- ============================================================
-- GROUP D
-- M19: USA 4-1 Paraguay (already correct)
-- ============================================================

-- M20: Australia 2-0 Türkiye (home was Türkiye=16, away was Australia=14 → swap)
UPDATE matches SET home_team_id=14, away_team_id=16, home_score=2, away_score=0, status='completed',
  winner_id=14 WHERE match_number=20;

-- M21: USA 2-0 Australia (home USA=13, away was Paraguay=15, should be Australia=14)
UPDATE matches SET away_team_id=14, home_score=2, away_score=0, status='completed',
  winner_id=13 WHERE match_number=21;

-- M22: Türkiye 0-1 Paraguay (home was Türkiye=16, away was Australia=14, should be Paraguay=15)
UPDATE matches SET away_team_id=15, home_score=0, away_score=1, status='completed',
  winner_id=15 WHERE match_number=22;

-- ============================================================
-- GROUP E
-- ============================================================

-- M25: Germany 7-1 Curaçao (home Germany=17, away was CIV=18, should be Curaçao=19)
UPDATE matches SET away_team_id=19, home_score=7, away_score=1, status='completed',
  winner_id=17 WHERE match_number=25;

-- M26: Ivory Coast 1-0 Ecuador (home was Curaçao=19, away was Ecuador=20, home should be CIV=18)
UPDATE matches SET home_team_id=18, home_score=1, away_score=0, status='completed',
  winner_id=18 WHERE match_number=26;

-- M27: Germany 2-1 Ivory Coast (home Germany=17, away was Curaçao=19, should be CIV=18)
UPDATE matches SET away_team_id=18, home_score=2, away_score=1, status='completed',
  winner_id=17 WHERE match_number=27;

-- M28: Ecuador 0-0 Curaçao (home was Ecuador=20, away was CIV=18, should be Curaçao=19)
UPDATE matches SET away_team_id=19, home_score=0, away_score=0, status='completed',
  winner_id=NULL WHERE match_number=28;

-- ============================================================
-- GROUP F
-- ============================================================

-- M31: Netherlands 2-2 Japan (home was Japan=21, away was Tunisia=24; should be Netherlands=22 vs Japan=21)
UPDATE matches SET home_team_id=22, away_team_id=21, home_score=2, away_score=2, status='completed',
  winner_id=NULL WHERE match_number=31;

-- M32: Sweden 5-1 Tunisia (home was Netherlands=22, away was Sweden=23; should be Sweden=23 vs Tunisia=24)
UPDATE matches SET home_team_id=23, away_team_id=24, home_score=5, away_score=1, status='completed',
  winner_id=23 WHERE match_number=32;

-- M33: Netherlands 5-1 Sweden (home Japan=21, away Netherlands=22; swap to Netherlands=22 vs Sweden=23)
UPDATE matches SET home_team_id=22, away_team_id=23, home_score=5, away_score=1, status='completed',
  winner_id=22 WHERE match_number=33;

-- M34: Japan 4-0 Tunisia (home Sweden=23, away Tunisia=24; swap to Japan=21 vs Tunisia=24)
UPDATE matches SET home_team_id=21, home_score=4, away_score=0, status='completed',
  winner_id=21 WHERE match_number=34;

-- ============================================================
-- GROUP G
-- ============================================================

-- M37: Belgium 1-1 Egypt (home Belgium=25, away Iran=26; away should be Egypt=27)
UPDATE matches SET away_team_id=27, home_score=1, away_score=1, status='completed',
  winner_id=NULL WHERE match_number=37;

-- M38: Iran 2-2 New Zealand (home Egypt=27, away N.Zealand=28; home should be Iran=26)
UPDATE matches SET home_team_id=26, home_score=2, away_score=2, status='completed',
  winner_id=NULL WHERE match_number=38;

-- M39: Belgium 0-0 Iran (home Belgium=25, away Egypt=27; away should be Iran=26)
UPDATE matches SET away_team_id=26, home_score=0, away_score=0, status='completed',
  winner_id=NULL WHERE match_number=39;

-- M40: Egypt 3-1 New Zealand (home N.Zealand=28, away Iran=26; home should be Egypt=27, away N.Zealand=28)
UPDATE matches SET home_team_id=27, away_team_id=28, home_score=3, away_score=1, status='completed',
  winner_id=27 WHERE match_number=40;

-- ============================================================
-- GROUP H
-- ============================================================

-- M43: Spain 0-0 Cape Verde (home Uruguay=29, away CaboVerde=32; home should be Spain=31)
UPDATE matches SET home_team_id=31, home_score=0, away_score=0, status='completed',
  winner_id=NULL WHERE match_number=43;

-- M44: Saudi Arabia 1-1 Uruguay (home Saudi=30, away Spain=31; away should be Uruguay=29)
UPDATE matches SET away_team_id=29, home_score=1, away_score=1, status='completed',
  winner_id=NULL WHERE match_number=44;

-- M45: Spain 4-0 Saudi Arabia (home Uruguay=29, away Saudi=30; home should be Spain=31)
UPDATE matches SET home_team_id=31, home_score=4, away_score=0, status='completed',
  winner_id=31 WHERE match_number=45;

-- M46: Uruguay 2-2 Cape Verde (home Spain=31, away CaboVerde=32; home should be Uruguay=29)
UPDATE matches SET home_team_id=29, home_score=2, away_score=2, status='completed',
  winner_id=NULL WHERE match_number=46;

-- ============================================================
-- GROUP I
-- ============================================================

-- M49: France 3-1 Senegal (home France=33, away Iraq=34; away should be Senegal=36)
UPDATE matches SET away_team_id=36, home_score=3, away_score=1, status='completed',
  winner_id=33 WHERE match_number=49;

-- M50: Norway 4-1 Iraq (home Norway=35, away Senegal=36; away should be Iraq=34)
UPDATE matches SET away_team_id=34, home_score=4, away_score=1, status='completed',
  winner_id=35 WHERE match_number=50;

-- M51: France 3-0 Iraq (home France=33, away Norway=35; away should be Iraq=34)
UPDATE matches SET away_team_id=34, home_score=3, away_score=0, status='completed',
  winner_id=33 WHERE match_number=51;

-- M52: Norway 3-2 Senegal (home Senegal=36, away Iraq=34; home should be Norway=35, away Senegal=36)
UPDATE matches SET home_team_id=35, away_team_id=36, home_score=3, away_score=2, status='completed',
  winner_id=35 WHERE match_number=52;

-- ============================================================
-- GROUP J
-- ============================================================

-- M55: Argentina 3-0 Algeria (home Argentina=37, away Austria=38; away should be Algeria=39)
UPDATE matches SET away_team_id=39, home_score=3, away_score=0, status='completed',
  winner_id=37 WHERE match_number=55;

-- M56: Austria 3-1 Jordan (home Algeria=39, away Jordan=40; home should be Austria=38)
UPDATE matches SET home_team_id=38, home_score=3, away_score=1, status='completed',
  winner_id=38 WHERE match_number=56;

-- M57: Argentina 2-0 Austria (home Argentina=37, away Algeria=39; away should be Austria=38)
UPDATE matches SET away_team_id=38, home_score=2, away_score=0, status='completed',
  winner_id=37 WHERE match_number=57;

-- M58: Jordan 1-2 Algeria (home Jordan=40, away Austria=38; away should be Algeria=39)
UPDATE matches SET away_team_id=39, home_score=1, away_score=2, status='completed',
  winner_id=39 WHERE match_number=58;

-- ============================================================
-- GROUP K
-- ============================================================

-- M61: Portugal 1-1 DR Congo (home Portugal=41, away Uzbekistan=43; away should be CongoDR=44)
UPDATE matches SET away_team_id=44, home_score=1, away_score=1, status='completed',
  winner_id=NULL WHERE match_number=61;

-- M62: Colombia 3-1 Uzbekistan (home Colombia=42, away CongoDR=44; away should be Uzbekistan=43)
UPDATE matches SET away_team_id=43, home_score=3, away_score=1, status='completed',
  winner_id=42 WHERE match_number=62;

-- M63: Portugal 5-0 Uzbekistan (home Portugal=41, away Colombia=42; away should be Uzbekistan=43)
UPDATE matches SET away_team_id=43, home_score=5, away_score=0, status='completed',
  winner_id=41 WHERE match_number=63;

-- M64: Colombia 1-0 DR Congo (home CongoDR=44, away Uzbekistan=43; home should be Colombia=42, away CongoDR=44)
UPDATE matches SET home_team_id=42, away_team_id=44, home_score=1, away_score=0, status='completed',
  winner_id=42 WHERE match_number=64;

-- ============================================================
-- GROUP L
-- ============================================================

-- M67: England 4-2 Croatia (home England=45, away Ghana=47; away should be Croatia=46)
UPDATE matches SET away_team_id=46, home_score=4, away_score=2, status='completed',
  winner_id=45 WHERE match_number=67;

-- M68: Ghana 1-0 Panama (home Croatia=46, away Panama=48; home should be Ghana=47)
UPDATE matches SET home_team_id=47, home_score=1, away_score=0, status='completed',
  winner_id=47 WHERE match_number=68;

-- M69: England 0-0 Ghana (home England=45, away Croatia=46; away should be Ghana=47)
UPDATE matches SET away_team_id=47, home_score=0, away_score=0, status='completed',
  winner_id=NULL WHERE match_number=69;

-- M70: Panama 0-1 Croatia (home Panama=48, away Ghana=47; away should be Croatia=46)
UPDATE matches SET away_team_id=46, home_score=0, away_score=1, status='completed',
  winner_id=46 WHERE match_number=70;
