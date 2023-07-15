import { Request, Response } from 'express';
import messageService from '../services/deleteAllMessageService';

const deleteAllMessages = async (req: Request, res: Response) => {
  try {
    const { chatId } = req.body;
    await messageService.deleteAllMessages(chatId);
    res.status(200).json({message: `All message deleted for chatId: ${chatId}`});
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export default {
  deleteAllMessages,
};
