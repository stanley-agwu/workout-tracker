export type Workout = {
  title: string,
  repetitions: string,
  load: string,
  _id: string,
  createdAt: string,
  updatedAt: string,
}

export interface IFormProps {
  title: string | undefined,
  repetitions: string | undefined,
  load: string | undefined,
  error: any | null,
  showError: Boolean;
  fieldError: string[],
  setTitle: React.Dispatch<React.SetStateAction<string | undefined>>;
  setRepetitions: React.Dispatch<React.SetStateAction<string | undefined>>;
  setLoad: React.Dispatch<React.SetStateAction<string | undefined>>;
  setShowError: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit: (e: React.FormEvent) => Promise<void>;
  createdAt?: string;
  updatedAt?: string;
  _id?: string;
}

export interface IHookProps {
  workout: Workout;
  handleEdit: React.Dispatch<React.SetStateAction<Workout | undefined>>;
  handleDelete: (workout: Workout) => Promise<void>;
}

export interface IWorkoutState {
  workouts: Workout[];
}

export interface IWorkoutContext {
  state: IWorkoutState;
  dispatch: React.Dispatch<WorkoutActions>;
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