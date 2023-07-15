import User from '../database/models/User';
import jwt from 'jsonwebtoken';


const signup = async (username: string, password: string) => {
  const user = await User.create({ username, password });
  return user;
};

const login = async (username: string, password: string) => {
  const user = await User.findOne({ where: { username, password } });
  if (!user) {
    throw new Error('Invalid credentials');
  }

  // const userId = user;
  const token = jwt.sign({ ...user }, 'secret');
  return token;
};

export default {
  signup,
  login,
};
