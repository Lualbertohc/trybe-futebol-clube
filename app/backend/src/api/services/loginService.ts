import { ModelStatic } from 'sequelize';
import * as bcryptjs from 'bcryptjs';
import { generate } from '../../utils/jwt';
import Users from '../../database/models/Users';
// import ILogin from '../interfaces/ILogin';

export default class LoginService {
  protected model: ModelStatic<Users> = Users;

  async login(userEmail: string, userPassword: string): Promise<string | null> {
    const result = await this.model.findOne({ where: { email: userEmail } });
    console.log(`resultado da função do findOne: ${result}`);
    if (!result) return null;
    const encryption = bcryptjs.compareSync(userPassword, result.password);
    console.log(`encryption: ${encryption}`);
    if (!encryption) return null;
    const { id, email, role, username } = result;
    const token = generate({ id, email, role, username });
    return token;
  }
}