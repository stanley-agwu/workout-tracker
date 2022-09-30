export interface IWorkout {
  title: string;
  repetitions: number;
  load: number;
}

export interface IUser {
  email: string;
  username: string;
  password: string;
}

export interface ILogin {
  identifier: string;
  password: string;
}

export interface IUserPayload {
  _id: string;
}