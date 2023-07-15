import { Request, Response } from 'express';
import messageService from '../services/allMessageService';

const getAllMessages = async (req: Request, res: Response) => {
try {
const { chatId, page, pageSize } = req.body;
const messages = await messageService.getAllMessages(chatId, page, pageSize);
res.status(200).json(messages);
} catch (error) {
res.status(500).json({ error: 'Internal Server Error' });
}
};

export default {
getAllMessages,
};
