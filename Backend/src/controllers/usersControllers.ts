import { Request, Response } from 'express';

import User from '../models/User';

export const signup = async (req: Request, res: Response) => {
  res.send('signup created!')
};

export const signin = async (req: Request, res: Response) => {
  res.send('login created!')
};