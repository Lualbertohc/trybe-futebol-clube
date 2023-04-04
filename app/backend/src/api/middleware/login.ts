import { Request, Response, NextFunction } from 'express';
import { authToken } from '../../utils/jwt';

const bodyValidation = (req: Request, res: Response, next: NextFunction) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: 'All fields must be filled' });
  }
  next();
};

const emailValidation = (req: Request, res: Response, next: NextFunction) => {
  const { email } = req.body;
  const regex = /\S+@\S+\.\S+/;
  const verifyEmail = regex.test(email);
  if (!verifyEmail || !email) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  next();
};

const passwordValidation = (req: Request, res: Response, next: NextFunction) => {
  const { password } = req.body;
  if (password.length < 6 || !password) {
    return res.status(401).json({ message: 'Invalid email or password' });
  }
  next();
};

const tokenValidation = (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;
  if (!authorization) return res.status(401).json({ message: 'Token not found' });
  try {
    const validate = authToken(authorization);
    req.body.user = validate;
    next();
  } catch (e) {
    return res.status(401).json({ message: 'Token must be a valid token' });
  }
  next();
};

export {
  bodyValidation,
  emailValidation,
  passwordValidation,
  tokenValidation,
};
