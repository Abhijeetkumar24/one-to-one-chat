import { Request, Response } from 'express';
import chatService from '../services/chatService';

const createChat = async (req: Request, res: Response) => {
  try {
    const { userId, otherUserId } = req.body;
    const chat = await chatService.createChat(userId, otherUserId);
    res.status(201).json(chat);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default {
  createChat,
};
