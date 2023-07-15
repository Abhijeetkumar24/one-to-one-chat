import { DataTypes, Model } from 'sequelize';
import sequelize from '../db_connection';


class Chat extends Model {}

Chat.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    otherUserId: {  
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    
  },
  {
    sequelize,
    modelName: 'Chat',
  }
);

export default Chat;
