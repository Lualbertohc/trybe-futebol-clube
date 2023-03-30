import { Router, Request, Response } from 'express';
import LoginController from '../controller/LoginController';

const loginRoutes = Router();
const loginCrontroller = new LoginController();

loginRoutes.post('/login', (req: Request, res: Response) => loginCrontroller.login(req, res));

export default loginRoutes;
