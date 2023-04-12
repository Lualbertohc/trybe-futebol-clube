import Model from '../../database/models';
import home from '../../utils/queries/home';
import away from '../../utils/queries/away';

export default class LeaderboardService {
  protected model = Model;

  home = async () => {
    const [result] = await this.model.query(home);
    return result;
  };

  away = async () => {
    const [result] = await this.model.query(away);
    return result;
  };
}
