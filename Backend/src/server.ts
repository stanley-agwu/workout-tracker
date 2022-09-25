import express, { Application, Request, Response, NextFunction } from 'express';
import dotenv from 'dotenv';


const app: Application  = express();
dotenv.config({ path: './config/config.env' });


// middleware
app.use((req: Request, res: Response, next: NextFunction) => {
  console.log(req.path, req.method);
  next();
})

// route
app.get('/', (req: Request, res: Response) => {
  res.json({ msg: 'Welcome to the App'})
})

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));