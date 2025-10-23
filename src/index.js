import express, { json } from 'express';
import dotenv from 'dotenv';
import userRouter from '#modules/user/user.router.js';
import taskRouter from '#modules/task/task.router.js';

dotenv.config();
const app = express();
app.use(json());
app.disable('x-powered-by');

const PORT = process.env.PORT ?? 3000;

app.use('/tasks', taskRouter);
app.use('/users', userRouter);

// Ruta de prueba
app.get('/', (req, res) => {
  res.json({ message: 'hola mundito' });
});

app.listen(PORT, () => {
  console.log(`SERVER RUNING ON PORT: http://localhost:${PORT}`);
});
