import 'dotenv/config';
import * as jwt from 'jsonwebtoken';
import { IJwt } from '../api/interfaces/IJwt';

const TOKEN_SECRET = process.env.JWT_SECRET || 'batata';

const config: jwt.SignOptions = { expiresIn: '2d', algorithm: 'HS256' };

const generate = (payload: IJwt) => jwt.sign(payload, TOKEN_SECRET, config);

const authToken = (token: string) => {
  const user = jwt.verify(token, TOKEN_SECRET);
  return { user };
};

export { generate, authToken };
