import express from 'express';
import bodyParser from 'body-parser';
import indexroute from './src/routes/index';
require('dotenv').config();

const app = express();

app.use(bodyParser.json());


app.use('/', indexroute);

const port= process.env.PORT
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
