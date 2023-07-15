import { Request, Response } from 'express';
import messageService from '../services/messageService';

const sendMessage = async (req: Request, res: Response) => {
  try {
    const { chatId, senderId, content } = req.body;
    const message = await messageService.sendMessage(chatId, senderId, content);
    res.status(201).json(message);
  } catch (error) {
    console.error('an error occur', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default {
  sendMessage,
};
