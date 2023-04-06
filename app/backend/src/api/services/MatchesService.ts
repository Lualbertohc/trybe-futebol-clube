import { ModelStatic } from 'sequelize';
import Matches from '../../database/models/Match';
import Team from '../../database/models/Team';

export default class MatchesService {
  protected model: ModelStatic<Matches> = Matches;

  getMatches = async (): Promise<Matches[]> => this.model.findAll(
    {
      include: [
        { model: Team, as: 'homeTeam', attributes: ['teamName'] },
        { model: Team, as: 'awayTeam', attributes: ['teamName'] },
      ],
    },
  );

  progress = async (inProgress: string): Promise<Matches[]> => {
    let verify;
    if (inProgress === 'true') verify = true;
    if (inProgress === 'false') verify = false;
    return this.model.findAll(
      {
        include: [
          { model: Team, as: 'homeTeam', attributes: ['teamName'] },
          { model: Team, as: 'awayTeam', attributes: ['teamName'] },
        ],
        where: { inProgress: verify },
      },
    );
  };

  finish = async (id: number) => this.model.update({ inProgress: false }, { where: { id } });
}
