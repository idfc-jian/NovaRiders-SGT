import { Request, Response } from 'express';
import User from '../models/User';

export const registerUser = async (req: Request, res: Response): Promise<void> =>{
    try{
        const { username, email, address } = req.body;
        const existingUser =await User.findOne({ email });
        if(existingUser){
            res.status(400).json({ message: 'El usuario ya existe' });
            return;
        }
        const newUser = new User({ username, email, address });
        await newUser.save();
        res.status(201).json({ message: 'Usuario registrado', user: newUser });
    }catch (error){
        const errorMessage = error instanceof Error ? error.message : 'Ha ocurrido un error';
        res.status(500).json({ error: errorMessage });
    }
};

export const getAllUsers = async( req: Request, res: Response): Promise<void> =>{
    try{
        const users = await User.find();
        res.status(200).json(users);
    }catch(error){
        const errorMessage = error instanceof Error ? error.message: 'Ha ocurrido un error';
        res.status(500).json({ error: errorMessage });
    }
};