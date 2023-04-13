import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

export default class LeaderboardController {
  private _service: LeaderboardService;

  constructor() {
    this._service = new LeaderboardService();
  }

  async home(_req: Request, res: Response) {
    const result = await this._service.home();
    return res.status(200).json(result);
  }

  async away(_req: Request, res: Response) {
    const result = await this._service.away();
    return res.status(200).json(result);
  }

  async teams(_req: Request, res: Response) {
    const result = await this._service.teams();
    return res.status(200).json(result);
  }
}
