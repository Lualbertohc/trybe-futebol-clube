const away = `SELECT 
teams.team_name AS name,
CAST(SUM(CASE 
    WHEN matches.away_team_goals > matches.home_team_goals THEN 3
    WHEN matches.away_team_goals = matches.home_team_goals THEN 1 
    ELSE 0 
    END) AS CHAR) AS totalPoints,
    COUNT(*) AS totalGames,
    CAST(SUM(matches.away_team_goals > matches.home_team_goals) AS CHAR) AS totalVictories,
    CAST(SUM(matches.away_team_goals = matches.home_team_goals) AS CHAR) AS totalDraws,
    CAST(SUM(matches.away_team_goals < matches.home_team_goals) AS CHAR) AS totalLosses,
    CAST(SUM(matches.away_team_goals) AS CHAR) AS goalsFavor,
    CAST(SUM(matches.home_team_goals) AS CHAR) AS goalsOwn,
    CAST((SUM(matches.away_team_goals) - SUM(matches.home_team_goals)) AS SIGNED) AS goalsBalance,
    CAST(ROUND((SUM(CASE
        WHEN matches.away_team_goals > matches.home_team_goals THEN 3
        WHEN matches.away_team_goals = matches.home_team_goals THEN 1
        ELSE 0
        END) / (COUNT(*) * 3) * 100), 2) AS CHAR) AS efficiency
        FROM teams INNER JOIN matches ON matches.away_team_id = teams.id
        WHERE matches.in_progress = FALSE
        GROUP BY name
        ORDER BY totalPoints DESC,
        totalVictories DESC,
        goalsBalance DESC,
        goalsFavor DESC,
        goalsOwn DESC;`;

export default away;
