import { Sequelize } from 'sequelize';


const sequelize = new Sequelize('mydb', 'postgres', '', {
  host: 'localhost',
  dialect: 'postgres',
});

export default sequelize;
