import mongoose from "mongoose";
import { IWorkout } from "../types";

const workoutSchema = new mongoose.Schema<IWorkout>({
  title: {
    type: String,
    required: true,
  },
  repetitions: {
    type: Number,
    required: true,
  },
  load: {
    type: Number,
    required: true,
  },
  user_id: {
    type: String,
    required: true,
  },
}, { timestamps: true });

export default mongoose.model<IWorkout>('Workout', workoutSchema);