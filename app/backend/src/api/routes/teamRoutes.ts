import { Router, Request, Response } from 'express';
import TeamController from '../controller/TeamController';
import TeamService from '../services/TeamService';

const teamRoutes = Router();
const teamService = new TeamService();
const teamCrontroller = new TeamController(teamService);

teamRoutes.get('/teams', (req: Request, res: Response) => teamCrontroller.findAll(req, res));
teamRoutes.get('/teams/:id', (req: Request, res: Response) => teamCrontroller.findById(req, res));

export default teamRoutes;
