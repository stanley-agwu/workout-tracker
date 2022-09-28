import express, { Application, Request, Response, NextFunction } from 'express';
import connectDB from './db/db';

import WorkoutsRoutes from './routes/workouts';
import UsersRoutes from './routes/users';

const app: Application  = express();

// middleware
app.use(express.json())

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.path, req.method);
  next();
})

// routes
app.use('/api/workouts', WorkoutsRoutes);
app.use('/api/users', UsersRoutes);

// connect to database
connectDB();

const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`listening on port ${PORT}`));