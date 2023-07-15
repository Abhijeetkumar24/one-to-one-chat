import Message from '../database/models/Message';

const sendMessage = async (chatId: number, senderId: number, content: string) => {
  const message = await Message.create({ chatId, senderId, content });
  return message;
};

export default {
  sendMessage,
};
