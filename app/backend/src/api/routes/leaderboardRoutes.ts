import { Router, Request, Response } from 'express';
import LeaderboardController from '../controller/LeaderboardController';

const leaderboardRoutes = Router();
const leaderboardCrontroller = new LeaderboardController();

leaderboardRoutes
  .get(
    '/leaderboard/home',
    (req: Request, res: Response) => leaderboardCrontroller.home(req, res),
  );

leaderboardRoutes
  .get(
    '/leaderboard/away',
    (req: Request, res: Response) => leaderboardCrontroller.away(req, res),
  );

export default leaderboardRoutes;
