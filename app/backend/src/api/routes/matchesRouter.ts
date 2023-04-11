import { Router, Request, Response } from 'express';
import MatchesController from '../controller/MatchesController';
import { tokenValidation } from '../middleware/login';

const matchesRoutes = Router();
const matchesCrontroller = new MatchesController();

matchesRoutes
  .get(
    '/matches',
    (req: Request, res: Response) => matchesCrontroller.getMatches(req, res),
  );

matchesRoutes
  .post(
    '/matches',
    tokenValidation,
    (req: Request, res: Response) => matchesCrontroller.add(req, res),
  );

matchesRoutes
  .patch(
    '/matches/:id',
    tokenValidation,
    (req: Request, res: Response) => matchesCrontroller.update(req, res),
  );

matchesRoutes
  .patch(
    '/matches/:id/finish',
    tokenValidation,
    (req: Request, res: Response) => matchesCrontroller.finish(req, res),
  );

export default matchesRoutes;
