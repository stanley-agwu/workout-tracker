import express, { Request, Response } from 'express';
import Workout from '../models/Workout';

const router = express.Router();

// Get all workouts
router.get('/', async (req: Request, res: Response) => {
  const workout = await Workout.find();
  res.status(200).json({ workout });
});

// Get a single workout
router.get('/:id', (req: Request, res: Response) => {
  res.json({ msg: 'This is a single workout'})
});

// Post a single workout
router.post('/', async (req: Request, res: Response) => {
  try {
    const workout = await Workout.create(req.body);
    res.status(200).json({ workout });
  } catch (error) {
    console.error(error);
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
  res.json({ msg: 'This is a workout POST'});
});

// Delete a single workout
router.delete('/:id', (req: Request, res: Response) => {
  res.json({ msg: 'This is to delete a single workout'})
});

// Update a single workout
router.patch('/:id', (req: Request, res: Response) => {
  res.json({ msg: 'This is to update a single workout'})
});

export default router;