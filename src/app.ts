import express, { Request, Response } from 'express';
import cors from 'cors';
import { ProductRoutes } from './app/modules/product/product.routes';
const app = express();

//parsers
app.use(express.json());
app.use(cors());

// route

app.use('/api/products', ProductRoutes);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to my book store!');
});

export default app;
