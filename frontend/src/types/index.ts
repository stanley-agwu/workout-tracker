export type Workout = {
  title: String,
  repetitions: Number,
  load: Number,
  _id: String,
  createdAt: String,
  updatedAt: String,
}

export interface IProps {
  workout: Workout;
}