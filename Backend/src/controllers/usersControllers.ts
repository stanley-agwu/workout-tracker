import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { ICreatedUser } from '../types';

const User = require('../models/User');

const SECRET: string = process.env.SECRET as string;

const createToken = (_id: string) => {
  return jwt.sign({ _id }, SECRET, { expiresIn: '5d' });
};

// eslint-disable-next-line consistent-return
export const signup = async (req: Request, res: Response) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const user: ICreatedUser = await User.signup(req.body);
    const { email } = user;

    const token = createToken(user._id);

    return res.status(200).json({ email, token, user });
  } catch (error) {
    if (error instanceof Error) {
      return res.status(400).json({ error: error.message });
    }
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    const user: ICreatedUser = await User.signin(req.body);
    const { email } = user;

    const token = createToken(user._id);

    res.status(200).json({ email, token, user });
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }
};
