import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

export default class LeaderboardController {
  private _service: LeaderboardService;

  constructor() {
    this._service = new LeaderboardService();
  }

  home = async (_req: Request, res: Response) => {
    const result = await this._service.home();
    return res.status(200).json(result);
  };

  away = async (_req: Request, res: Response) => {
    const result = await this._service.away();
    return res.status(200).json(result);
  };

  teams = async (_req: Request, res: Response) => {
    const result = await this._service.teams();
    return res.status(200).json(result);
  };
}
