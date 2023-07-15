import Message from '../database/models/Message';

const deleteAllMessages = async (chatId: number) => {
  await Message.destroy({ where: { chatId } });
};

export default {
  deleteAllMessages,
};
