import express, { json } from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app = express();
app.use(json());
app.disable('x-powered-by');

const PORT = process.env.PORT ?? 3000;

app.use('/', (req, res) => {
  res.json({ message: 'hola mundito' });
});

app.listen(PORT, () => {
  console.log(`SERVER RUNING ON PORT: http://localhost:${PORT}`);
});
