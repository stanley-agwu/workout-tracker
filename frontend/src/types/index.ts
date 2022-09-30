export type Workout = {
  title: string,
  repetitions: number,
  load: number,
  _id: string,
  createdAt: string,
  updatedAt: string,
}

export interface IProps {
  workout: Workout;
  handleEdit: React.Dispatch<React.SetStateAction<Workout | undefined>>;
}

export interface IWorkoutState {
  workouts: Workout[];
}

export interface IWorkoutContext {
  state: IWorkoutState;
  dispatch: React.Dispatch<WorkoutActions>;
}

export interface IFormProps {
  workout: Workout | undefined;
}

export interface ISetWorkout {
  type: 'SET_WORKOUTS';
  payload: Workout[];
}

export interface ICreateWorkout {
  type: 'CREATE_WORKOUT';
  payload: Workout;
}

export interface IDeleteWorkout {
  type: 'DELETE_WORKOUT';
  payload: Workout;
}

export interface IUpdateWorkout {
  type: 'UPDATE_WORKOUT';
  payload: Workout;
}

export type WorkoutActions = ISetWorkout | ICreateWorkout | IDeleteWorkout | IUpdateWorkout;

export type User = {
  email: string;
  username: string;
  password: string;
  token?: string;
}

export interface IUser {
  user: User | null;
}

export interface ISignin {
  type: 'SIGNIN';
  payload: User;
}

export interface ISignup {
  type: 'SIGNUP';
  payload: User;
}

export interface ISignout {
  type: 'SIGNOUT';
  payload: null;
}

export interface IUserContext {
  state: IUser;
  dispatch: React.Dispatch<UserActions>;
}

export type UserActions = ISignup | ISignin | ISignout;