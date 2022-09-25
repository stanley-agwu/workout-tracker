import mongoose from "mongoose";
import dotenv from 'dotenv';

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NODE_ENV: 'development' | 'production';
      PORT?: string;
      MONGO_URI: string;
    }
  }
}

dotenv.config({ path: './config/config.env' });

const connectDB = async () =>{
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`)
  } catch (error) {
    console.error(error)
    process.exit(1)   
  }
}

export default connectDB;