import express from 'express';
import messageController from '../controllers/allMessageController';


const router = express.Router();

router.post('/allmessage', messageController.getAllMessages);

export default router;



//payload
// {
// "chatId": 1,
// "page": 1,
// "pageSize": 10
// }

