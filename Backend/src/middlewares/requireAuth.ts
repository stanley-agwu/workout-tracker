import { NextFunction, Request, Response } from 'express';
import jwt from 'jsonwebtoken';

import { IUser, IUserPayload } from '../types';

const User = require('../models/User');

// eslint-disable-next-line consistent-return
export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization?.startsWith('Bearer')) {
    return res.status(401).json({ error: 'Authorization token required' });
  }

  const token: string = authorization.split(' ').reverse()[0];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET!) as IUserPayload;
    const user_id: string = await User.findOne({ _id }).select('_id'); // eslint-disable-line @typescript-eslint/no-unsafe-call
    req.body[user_id] = user_id;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Request is not authorized' });
  }
};
