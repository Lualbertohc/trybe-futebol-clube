import Team from '../../database/models/Team';

export default interface ITeamService {
  findAll(): Promise<Team[]>;
  findById(id: number): Promise<Team>;
}
