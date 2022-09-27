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

export interface IState {
  workouts: Workout[];
}

export interface IContextProps {
  state: IState;
  dispatch: React.Dispatch<Actions>;
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

export type Actions = ISetWorkout | ICreateWorkout | IDeleteWorkout | IUpdateWorkout;