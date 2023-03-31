import { ModelStatic } from 'sequelize';
import Team from '../../database/models/Team';
import ITeamService from '../interfaces/ITeamService';

export default class TeamService implements ITeamService {
  protected model: ModelStatic<Team> = Team;

  findAll = async (): Promise<Team[]> => this.model.findAll();

  findById = async (id: number): Promise<Team> => {
    const team = await this.model.findByPk(id);
    return team as unknown as Team;
  };
}
