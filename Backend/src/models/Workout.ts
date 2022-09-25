import mongoose from "mongoose";

const workoutSchema = new mongoose.Schema({
  title: {
    type: 'string',
    required: true,
  },
  repetitions: {
    type: Number,
    required: true,
  },
  load: {
    type: Number,
    required: true,
  }
}, { timestamps: true });

export default mongoose.model('Workout', workoutSchema);