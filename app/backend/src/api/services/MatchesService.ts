import { ModelStatic } from 'sequelize';
import Matches from '../../database/models/Match';
import Team from '../../database/models/Team';
import IMatch from '../interfaces/IMatch';
import IError from '../interfaces/IError';
import IInfo from '../interfaces/IInfo';

export default class MatchesService {
  protected model: ModelStatic<Matches> = Matches;

  getMatches = async (inProgress?: boolean) => {
    if (inProgress) {
      const result = await this.model.findAll(
        { include: [
          { model: Team, as: 'homeTeam', attributes: ['teamName'] },
          { model: Team, as: 'awayTeam', attributes: ['teamName'] },
        ],
        where: { inProgress } },
      );
      return result;
    }
    const result = await this.model.findAll(
      { include: [
        { model: Team, as: 'homeTeam', attributes: ['teamName'] },
        { model: Team, as: 'awayTeam', attributes: ['teamName'] },
      ],
      },
    );
    return result;
  };

  add = async (match: IMatch): Promise<IMatch | IError> => {
    const {
      homeTeamId,
      awayTeamId,
      awayTeamGoals,
      homeTeamGoals,
    } = match;
    const verOne = await this.model.findOne({ where: { homeTeamId } });
    const verTwo = await this.model.findOne({ where: { awayTeamId } });
    if (!verOne || !verTwo) return { status: 404, message: 'There is no team with such id!' };
    const result = await this.model
      .create({ homeTeamId, awayTeamId, awayTeamGoals, homeTeamGoals, inProgress: true });
    return result;
  };

  finish = async (id: number) => this.model.update({ inProgress: false }, { where: { id } });

  update = async (id: number, info: IInfo) => {
    this.model.update(
      {
        homeTeamGoals: info.homeTeamGoals, awayTeamGoals: info.awayTeamGoals,
      },
      { where: { id } },
    );
  };
}
