import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const User = require('../models/User');
import { IUserPayload } from '../types';

export const requireAuth = async (req: Request, res: Response, next: NextFunction) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization?.startsWith('Bearer')) {
    return res.status(401).json({ error: 'Authorization token required'})
  }

  const token: string = authorization.split(' ').reverse()[0];

  try {
    const { _id } = jwt.verify(token, process.env.SECRET!) as IUserPayload;
    const user_id = await User.findOne({ _id }).select('_id');
    req.body.user_id = user_id._id;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Request is not authorized'})
  }
}