import { Request, Response } from 'express';
import { User } from '../models/userModel';

export const createUser = async (req: Request, res: Response): Promise<void> => {
  try {
    const user = new User(req.body);
    // Add your database logic here
    res.status(201).json({ user });
  } catch (err) {
    const error = err as Error;  // Type assertion for error
    res.status(400).json({ error: error.message });
  }
};