import express from 'express';
import messageController from '../controllers/deleteAllMessageController';

const router = express.Router();

router.post('/delete', messageController.deleteAllMessages);

export default router;



//payload
// {
//     "chatId": 1
// }
  