import { Request, Response } from 'express';
import LoginService from '../services/loginService';

export default class LoginController {
  private _service: LoginService;

  constructor() {
    this._service = new LoginService();
  }

  login = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    const result = await this._service.login(email, password);
    if (!result) return res.status(401).json({ message: 'Invalid email or password' });
    return res.status(200).json(result);
  };

  role = (req: Request, res: Response) => {
    const { authorization } = req.headers;
    const { userToken } = req.body;
    if (authorization) return res.status(200).json({ role: userToken.role });
  };
}
