import Chat from '../database/models/Chat';

const createChat = async (userId: number, otherUserId: number) => {
  const chat = await Chat.create({ userId, otherUserId });
  return chat;
};

export default {
  createChat,
};
