Requête N°1

SELECT COUNT(*) AS NbrDeVideo FROM video
NbrDeVideo
59


Requête N°2

SELECT `VideoTitre` AS Titre, `ThemeLib` AS Theme FROM video,theme,thematic 
WHERE `VideoNum`=`ThematicVideoNum` AND `ThematicThemeNum`=`ThemeNum` AND `ThemeNum`=3 GROUP BY `VideoTitre`;
