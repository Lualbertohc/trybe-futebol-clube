import Model from '../../database/models';
import home from '../../utils/queries/home';

export default class LeaderboardService {
  protected model = Model;

  get = async () => {
    const [result] = await this.model.query(home);
    return result;
  };
}
