import { Router, Request, Response } from 'express';
import LeaderboardController from '../controller/LeaderboardController';

const leaderboardRoutes = Router();
const leaderboardCrontroller = new LeaderboardController();

leaderboardRoutes
  .get(
    '/leaderboard/home',
    (req: Request, res: Response) => leaderboardCrontroller.get(req, res),
  );

export default leaderboardRoutes;
