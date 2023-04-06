import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

export default class MatchesController {
  private _service: MatchesService;

  constructor() {
    this._service = new MatchesService();
  }

  getMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;

    if (!inProgress) {
      const result = await this._service.getMatches();
      return res.status(200).json(result);
    }

    const filter = await this._service.progress(inProgress as string);
    return res.status(200).json(filter);
  };

  finish = async (req: Request, res: Response) => {
    await this._service.finish(Number(req.params));
    return res.status(200).json({ message: 'Finished' });
  };
}
