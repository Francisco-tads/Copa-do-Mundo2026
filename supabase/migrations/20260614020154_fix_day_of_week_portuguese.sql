UPDATE matches SET day_of_week = CASE day_of_week
  WHEN 'MON' THEN 'SEG'
  WHEN 'TUE' THEN 'TER'
  WHEN 'WED' THEN 'QUA'
  WHEN 'THU' THEN 'QUI'
  WHEN 'FRI' THEN 'SEX'
  WHEN 'SAT' THEN 'SÁB'
  WHEN 'SUN' THEN 'DOM'
  ELSE day_of_week
END
WHERE day_of_week IN ('MON','TUE','WED','THU','FRI','SAT','SUN');