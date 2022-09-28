import mongoose from "mongoose";
import bcrypt from "bcrypt";
import isEmail from 'validator/lib/isEmail';
import isStrongPassword from 'validator/lib/isStrongPassword';

import { IUser, Login, ILogin } from "../types";

const userSchema = new mongoose.Schema<IUser>({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
});

// static signup method
userSchema.statics.signup = async function ({ email, username, password }: IUser) {
  //validation
  if (!email || !username || !password) {
    throw new Error('All fields are required');
  }
  if (!isEmail(email)) throw new Error('Email is invalid');
  if (!isStrongPassword(password)) throw new Error('Password not strong enough');

  const userExist = await this.findOne({ email });
  
  if (userExist) throw new Error('User with email already exists');

  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);

  const user: IUser = await this.create({ email, username, password: hash });

  return user;
};

// static signin method
userSchema.statics.signin = async function ({ email, username, password}: ILogin) {
    //validation
  if ((!email && !username) || !password) {
    throw new Error('All fields are required');
  }
  const user: ILogin = email ? await this.findOne({ email })
                              : await this.findOne({ username });
  if (!user) throw new Error(email ? 'Incorrect email' : 'Incorrect username');

  const match = await bcrypt.compare(password, user.password);
  if (!match) throw new Error('Invalid password');

  return user;
}

module.exports = mongoose.model<IUser>('User', userSchema);