import express from 'express';
import chatController from '../controllers/chatController';

const router = express.Router();

router.post('/chat', chatController.createChat);

export default router;



// payload

// {
//     "userId": 1,
//     "otherUserId": 2
// }
