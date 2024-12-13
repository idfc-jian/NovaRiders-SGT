import express from 'express';
import cors from 'cors';
import motoRoutes from './routes/motoRoutes';
import userRoutes from './routes/userRoutes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/motos', motoRoutes);
app.use('/api/users', userRoutes);

export default app; 