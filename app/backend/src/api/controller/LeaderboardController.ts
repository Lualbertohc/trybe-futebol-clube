import { Request, Response } from 'express';
import LeaderboardService from '../services/LeaderboardService';

export default class LeaderboardController {
  private _service: LeaderboardService;

  constructor() {
    this._service = new LeaderboardService();
  }

  get = async (_req: Request, res: Response) => {
    const result = await this._service.get();
    return res.status(200).json(result);
  };
}
