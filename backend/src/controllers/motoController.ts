import { Request, Response } from 'express';
import Moto from '../models/Moto';

export const getAllMotos = async (req: Request, res: Response): Promise<void> =>{
    try{
        const motos = await Moto.find();
        res.status(200).json(motos);
    }catch(error){
        const errorMessage = error instanceof Error ? error.message : 'Ha ocurrido un error';
        res.status(500).json({ error: errorMessage });        
    }
}

export const addMoto = async ( req: Request, res: Response): Promise<void> => {
    try{
        const newMoto = new Moto(req.body);
        await newMoto.save();
        res.status(201).json(newMoto);
    }catch(error){
        const errorMessage = error instanceof Error ? error.message : 'Ha ocurrido un error';
        res.status(500).json({ error: errorMessage });
    }
};