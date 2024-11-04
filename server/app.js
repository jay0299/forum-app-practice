import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import { config } from './config.js';
import { sequelize } from './db/database.js';
import postsRouter from './router/posts.js';

const app = express();

app.use(express.json());
app.use(helmet());
app.use(morgan('tiny'));
app.use(cors());

app.use('/posts', postsRouter);

sequelize.sync().then(() => {
  console.log('Successfull connection to database!');
  app.listen(config.host.port);
});
