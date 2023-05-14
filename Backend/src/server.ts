import express, { Application, NextFunction, Request, Response } from 'express';

import connectDB from './db/db';
import UsersRoutes from './routes/users';
import WorkoutsRoutes from './routes/workouts';

const app: Application = express();

// middleware
app.use(express.json());

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.path, req.method);
  next();
});

// routes
app.use('/api/workouts', WorkoutsRoutes);
app.use('/api/users', UsersRoutes);

// connect to database
connectDB();

const { PORT } = process.env;
app.listen(PORT, () => console.log(`listening on port ${PORT || 5000}`));
