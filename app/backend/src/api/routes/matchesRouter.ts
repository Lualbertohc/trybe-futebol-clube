import { Router, Request, Response } from 'express';
import MatchesController from '../controller/MatchesController';

const matchesRoutes = Router();
const matchesCrontroller = new MatchesController();

matchesRoutes
  .get(
    '/matches',
    (req: Request, res: Response) => matchesCrontroller.getMatches(req, res),
  );

export default matchesRoutes;
