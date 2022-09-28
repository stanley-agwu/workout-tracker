import { Request, Response } from 'express';
import jwt from 'jsonwebtoken';

const User = require('../models/User');

const SECRET: string = process.env.SECRET!;

const createToken = (_id: string) => {
  return jwt.sign({_id}, SECRET, {expiresIn: '5d'});
}

export const signup = async (req: Request, res: Response) => {
  try {
    const user = await User.signup(req.body);
    const { email } = user;

    const token = createToken(user._id);

    res.status(200).json({ email, token, user })
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message })
    }
  }
};

export const signin = async (req: Request, res: Response) => {
  try {
    const user = await User.signin(req.body);
    const { email } = user;

    const token = createToken(user._id);

    res.status(200).json({ email, token, user })
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message })
    }
  }
};