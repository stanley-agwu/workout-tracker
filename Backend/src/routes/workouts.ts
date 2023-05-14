import express from 'express';

import {
  createWorkout,
  deleteWorkout,
  getAllWorkouts,
  getWorkout,
  updateWorkout,
} from '../controllers/workoutsController';
import { requireAuth } from '../middlewares/requireAuth';

const router = express.Router();

// require auth for all routes
router.use(requireAuth);

// Get all workouts
router.get('/', getAllWorkouts);

// Get a single workout
router.get('/:id', getWorkout);

// Post a single workout
router.post('/', createWorkout);

// Delete a single workout
router.delete('/:id', deleteWorkout);

// Update a single workout
router.patch('/:id', updateWorkout);

export default router;
