import { Request, Response } from 'express';
import MatchesService from '../services/MatchesService';

export default class MatchesController {
  private _service: MatchesService;

  constructor() {
    this._service = new MatchesService();
  }

  getMatches = async (req: Request, res: Response) => {
    const { inProgress } = req.query;
    const allMatches = await this._service.getMatches();
    if (inProgress === 'true') {
      const acting = allMatches.filter((e) => e.inProgress === true);
      return res.status(200).json(acting);
    }
    if (inProgress === 'false') {
      const finished = allMatches.filter((e) => e.inProgress === false);
      return res.status(200).json(finished);
    }
    return res.status(200).json(allMatches);
  };

  add = async (req: Request, res: Response) => {
    const match = req.body;
    if (match.homeTeamId === match.awayTeamId) {
      return res.status(422)
        .json({ message: 'It is not possible to create a match with two equal teams' });
    }
    const created = await this._service.add(match);
    const { message } = created;
    if (message) return res.status(404).json({ message });
    return res.status(201).json(created);
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;
    const info = req.body;
    await this._service.update(Number(id), info);
    return res.status(200).json({ message: 'Updated' });
  };

  finish = async (req: Request, res: Response) => {
    const { id } = req.params;
    await this._service.finish(Number(id));
    return res.status(200).json({ message: 'Finished' });
  };
}
