import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';
import WorkoutRoutes from './routes/workouts';


const app: Application  = express();
dotenv.config({ path: './config/config.env' });


// middleware
app.use(express.json())

app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.path, req.method);
  next();
})

// route
app.use('/api/workouts', WorkoutRoutes);

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));