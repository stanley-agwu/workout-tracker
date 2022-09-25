import Workout from '../models/Workout';
import mongoose from 'mongoose';
import { Request, Response } from 'express';

// get all workouts
export const getAllWorkouts = async (req: Request, res: Response) => {
  const workouts = await Workout.find({}).sort({ createdAt: 'asc' });
  res.status(200).json({ workouts });
}

// get a single workout
export const getWorkout = async (req: Request, res: Response) => {
  const { id }= req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid id, no such workout' });
  }
  const workout = await Workout.findById(id);

  if (!workout) {
    return res.status(404).json({ error: 'workout not found' });
  }
  res.status(200).json({ workout });
}

// create new workout
export const createWorkout = async (req: Request, res: Response) => {
  try {
    const workout = await Workout.create(req.body);
    res.status(200).json({ workout });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
}

// delete a workout
export const deleteWorkout = async (req: Request, res: Response) => {
  const { id }= req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid id, no such workout' });
  }
  const workout = await Workout.findByIdAndDelete(id);
  if (!workout) {
    return res.status(404).json({ error: 'workout not found' });
  }
  res.status(200).json({ workout });
}

// update a workout
export const updateWorkout = async (req: Request, res: Response) => {
  const { id }= req.params;
  
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: 'Invalid id, no such workout' });
  }
  const workout = await Workout.findByIdAndUpdate(id, { ...req.body });
  if (!workout) {
    return res.status(404).json({ error: 'workout not found' });
  }

  res.status(200).json({ workout });
}