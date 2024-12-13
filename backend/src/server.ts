import cors from 'cors'; 
import express, { Request, Response } from 'express';
import Moto from './models/Moto'; 
import app from './app'; 
import connectDB from './utilities/mongodb'; 
import dotenv from 'dotenv'; 

dotenv.config();  

app.use(cors());

app.get('/api/motos', async (req: Request, res: Response) => {
  try {
    const motos = await Moto.find();
    res.json(motos);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : 'Ha ocurrido un error';
    res.status(500).json({ error: errorMessage });
  }
});

const PORT = process.env.PORT || 5000; 

connectDB(); 

app.listen(PORT, () => {
    console.log(`Server is running on: http://localhost:${PORT}`);
});