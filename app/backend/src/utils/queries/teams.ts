const teams = `SELECT name,
SUM(leaderboard.totalPoints) AS totalPoints,
SUM(totalGames) AS totalGames,
SUM(totalVictories) AS totalVictories,
SUM(totalDraws) AS totalDraws,
SUM(totalLosses) AS totalLosses,
SUM(goalsFavor) AS goalsFavor,
SUM(goalsOwn) AS goalsOwn,
SUM(goalsBalance) AS goalsBalance,
ROUND((SUM(totalPoints) / (SUM(totalGames) * 3)) * 100, 2) AS efficiency FROM
(SELECT teams.team_name AS name,
        (SUM(IF(matches.home_team_goals > matches.away_team_goals, 3, 0)) +
        SUM(IF(matches.home_team_goals < matches.away_team_goals, 0, 0)) +
        SUM(IF(matches.home_team_goals = matches.away_team_goals, 1, 0))) AS totalPoints,
        COUNT(teams.team_name) AS totalGames,
        SUM(IF(matches.home_team_goals > matches.away_team_goals, 1, 0)) AS totalVictories,
        SUM(IF(matches.home_team_goals = matches.away_team_goals, 1, 0)) AS totalDraws,
        SUM(IF(matches.home_team_goals < matches.away_team_goals, 1, 0)) AS totalLosses,
        SUM(matches.home_team_goals) AS goalsFavor,
        SUM(matches.away_team_goals) AS goalsOwn,
        CAST((SUM(matches.home_team_goals) - SUM(matches.away_team_goals)) AS SIGNED) 
        AS goalsBalance
FROM TRYBE_FUTEBOL_CLUBE.teams JOIN TRYBE_FUTEBOL_CLUBE.matches ON teams.id = matches.home_team_id
WHERE in_progress = 0 GROUP BY teams.team_name UNION ALL SELECT teams.team_name AS name,
        (SUM(IF(matches.away_team_goals > matches.home_team_goals, 3, 0)) + 
        SUM(IF(matches.away_team_goals < matches.home_team_goals, 0, 0)) + 
        SUM(IF(matches.away_team_goals = matches.home_team_goals, 1, 0))) AS totalPoints,
        COUNT(teams.team_name) AS totalGames,
        SUM(IF(matches.away_team_goals > matches.home_team_goals, 1, 0)) AS totalVictories,
        SUM(IF(matches.away_team_goals = matches.home_team_goals, 1, 0)) AS totalDraws,
        SUM(IF(matches.away_team_goals < matches.home_team_goals, 1, 0)) AS totalLosses,
        SUM(matches.away_team_goals) AS goalsFavor,
        SUM(matches.home_team_goals) AS goalsOwn,
        (SUM(matches.away_team_goals) - SUM(matches.home_team_goals)) AS goalsBalance
FROM TRYBE_FUTEBOL_CLUBE.teams JOIN TRYBE_FUTEBOL_CLUBE.matches ON teams.id = matches.away_team_id
WHERE in_progress = 0
GROUP BY teams.team_name) AS leaderboard
GROUP BY leaderboard.name
ORDER BY totalPoints DESC , 
goalsBalance DESC , 
goalsFavor DESC , 
goalsOwn DESC;`;

export default teams;
