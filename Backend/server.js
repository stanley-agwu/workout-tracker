import express from 'express';
import dotenv from 'dotenv';


const app  = express();
dotenv.config({ path: './config/config.env' });


// middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
})

// route
app.get('/', (req, res) => {
  res.json({ msg: 'Welcome to the App'})
})

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`listening on port ${PORT}`));