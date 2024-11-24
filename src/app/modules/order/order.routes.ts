import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.post('/', OrderControllers.createOrder);
router.get('/revenue', OrderControllers.calculateTotalRevenue);

export const OrderRoutes = router;
