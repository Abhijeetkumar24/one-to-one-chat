import { Request, Response } from 'express';
import authService from '../services/authService';

const signup = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    
    const user = await authService.signup(username, password);
    res.status(201).json({message: "Signup completed ", user});

  } catch (error) {
    console.error('An error occurred:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const login = async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;
    console.log('Headers', req.headers);
    const token = await authService.login(username, password);
    res.status(200).json({message:"login completed" ,token });
  } catch (error) {
    res.status(401).json({ error: 'Unauthorized' });
  }
};

export default {
  signup,
  login,
};
