import { ModelStatic } from 'sequelize';
import * as bcryptjs from 'bcryptjs';
import { generate } from '../../utils/jwt';
import Users from '../../database/models/Users';

export default class LoginService {
  protected model: ModelStatic<Users> = Users;

  login = async (userEmail: string, userPassword: string): Promise<string | null> => {
    const result = await this.model.findOne({ where: { email: userEmail } });
    if (!result) return null;
    const encryption = bcryptjs.compareSync(userPassword, result.password);
    if (!encryption) return null;
    const { id, email, role, username } = result;
    const token = generate({ id, email, role, username });
    return token;
  };
}
