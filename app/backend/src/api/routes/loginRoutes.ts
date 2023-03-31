import { Router, Request, Response } from 'express';
import LoginController from '../controller/LoginController';
import {
  bodyValidation,
  emailValidation,
  passwordValidation,
} from '../middleware/login';

const loginRoutes = Router();
const loginCrontroller = new LoginController();

loginRoutes
  .post(
    '/login',
    bodyValidation,
    emailValidation,
    passwordValidation,
    (req: Request, res: Response) => loginCrontroller.login(req, res),
  );

export default loginRoutes;
