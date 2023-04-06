import { Router, Request, Response } from 'express';
import MatchesController from '../controller/MatchesController';
import { tokenValidation } from '../middleware/login';

const matchesRoutes = Router();
const matchesCrontroller = new MatchesController();

matchesRoutes
  .get(
    '/matches',
    tokenValidation,
    (req: Request, res: Response) => matchesCrontroller.getMatches(req, res),
  );

matchesRoutes
  .post(
    '/matches/:id/finish',
    tokenValidation,
    (req: Request, res: Response) => matchesCrontroller.finish(req, res),
  );

export default matchesRoutes;
