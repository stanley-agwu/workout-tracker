import express, { Application, Request, Response, NextFunction } from 'express';
import connectDB from './db/db';

import WorkoutRoutes from './routes/workouts';

const app: Application  = express();

// middleware
app.use(express.json())

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.path, req.method);
  next();
})

// route
app.use('/api/workouts', WorkoutRoutes);

// connect to database
connectDB();

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));