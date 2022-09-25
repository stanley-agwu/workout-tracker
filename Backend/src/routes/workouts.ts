import express, { Request, Response } from 'express';

const router = express.Router();

// Get all workouts
router.get('/', (req: Request, res: Response) => {
  res.json({ msg: 'This is all workouts'})
});

// Get a single workout
router.get('/:id', (req: Request, res: Response) => {
  res.json({ msg: 'This is a single workout'})
});

// Post a single workout
router.post('/', (req: Request, res: Response) => {
  res.json({ msg: 'This is a workout POST'})
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