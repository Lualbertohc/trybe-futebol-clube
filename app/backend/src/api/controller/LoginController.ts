import { Request, Response } from 'express';
import LoginService from '../services/loginService';

export default class LoginController {
  private _service: LoginService;

  constructor() {
    this._service = new LoginService();
  }

  async login(req: Request, res: Response) {
    const { email, password } = req.body;
    const result = await this._service.login(email, password);
    return res.status(200).json(result);
  }
}
