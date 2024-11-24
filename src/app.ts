import express, { Request, Response } from 'express';
import cors from 'cors';
const app = express();

//parsers
app.use(express.json());
app.use(cors());

// route

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to my book store!');
});

export default app;
