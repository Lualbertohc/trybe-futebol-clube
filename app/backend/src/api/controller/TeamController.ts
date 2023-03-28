import { Request, Response } from 'express';
import ITeamService from '../interfaces/ITeamService';

export default class TeamController {
  private _service: ITeamService;

  constructor(service: ITeamService) {
    this._service = service;
  }

  async findAll(_req: Request, res: Response) {
    const teams = await this._service.findAll();
    return res.status(200).json(teams);
  }

  async findById(req: Request, res: Response) {
    const { id } = req.params;
    const team = await this._service.findById(Number(id));
    return res.status(200).json(team);
  }
}
