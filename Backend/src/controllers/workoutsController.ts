import { Request, Response } from 'express';
import mongoose from 'mongoose';

import Workout from '../models/Workout';
import { IWorkout } from '../types';

// get all workouts
export const getAllWorkouts = async (req: Request, res: Response) => {
  const { user_id } = req.body;
  const workouts = await Workout.find({ user_id }).sort({ updatedAt: 'desc' });
  return res.status(200).json({ workouts });
};

// get a single workout
export const getWorkout = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid id, no such workout' });
  }
  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: 'workout not found' });
  }
  return res.status(200).json({ workout });
};

// create new workout
// eslint-disable-next-line consistent-return
export const createWorkout = async (req: Request, res: Response) => {
  const { title, repetitions, load } = req.body;

  const fields = [];
  if (!title) fields.push('title');
  if (!repetitions) fields.push('repetitions');
  if (!load) fields.push('load');

  if (fields.length) return res.status(400).json({ error: 'Please fill in all fields', fields });

  try {
    const workout = await Workout.create(req.body);
    return res.status(200).json({ workout });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      return res.status(500).json({ error: error.message });
    }
  }
};

// delete a workout
export const deleteWorkout = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid id, no such workout' });
  }
  const workout = await Workout.findByIdAndDelete(id);
  if (!workout) {
    return res.status(404).json({ error: 'workout not found' });
  }
  return res.status(200).json({ workout });
};

// update a workout
export const updateWorkout = async (req: Request, res: Response) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid id, no such workout' });
  }
  // eslint-disable-next-line  @typescript-eslint/no-unsafe-argument
  const workout: IWorkout | null = await Workout.findByIdAndUpdate(id, req.body, { new: true });
  if (!workout) {
    return res.status(404).json({ error: 'workout not found' });
  }

  return res.status(200).json({ workout });
};
