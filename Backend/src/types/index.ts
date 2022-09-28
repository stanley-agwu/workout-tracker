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

interface ILogin1 {
  username: string;
  password: string;
}

interface ILogin2 {
  email: string;
  password: string;
}

export interface ILogin {
  email?: string;
  username?: string;
  password: string;
}

export type Login = ILogin1 | ILogin2;