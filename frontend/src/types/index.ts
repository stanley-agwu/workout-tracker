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
}