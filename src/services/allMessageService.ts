import { Op } from 'sequelize';
import Message from '../database/models/Message';

const getAllMessages = async (chatId: number, page: number, pageSize: number) => {
const offset = (page - 1) * pageSize;
const limit = pageSize;

const messages = await Message.findAll({
where: { chatId },
order: [['createdAt', 'DESC']],
offset,
limit,
});

return messages;
};

export default {
getAllMessages,
};

