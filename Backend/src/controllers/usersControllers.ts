import { Request, Response } from 'express';

const User = require('../models/User')

export const signup = async (req: Request, res: Response) => {
  const { email } = req.body;

  try {
    const user = await User.signup(req.body);

    res.status(200).json({ email, user })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
};

export const signin = async (req: Request, res: Response) => {
  res.send('login created!');
};