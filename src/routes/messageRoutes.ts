import express from 'express';
import messageController from '../controllers/messageController';

const router = express.Router();

router.post('/message', messageController.sendMessage);

export default router;


// {
//   "chatId": 1,
//   "senderId": 1,
//   "content": "Hello, how are you?"
// }