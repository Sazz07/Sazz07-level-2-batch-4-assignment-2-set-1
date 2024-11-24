/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express';
import orderValidationSchema from './order.validation';
import { OrderServices } from './order.service';

const createOrder = async (req: Request, res: Response) => {
  try {
    const zodParsedData = orderValidationSchema.parse(req.body);

    const result = await OrderServices.createOrderToDB(zodParsedData);

    res.status(200).json({
      message: 'Order created successfully',
      success: true,
      data: result,
    });
  } catch (error: any) {
    res.status(400).json({
      success: false,
      message: error.message || 'Something went wrong!',
      error: error,
    });
  }
};

const calculateTotalRevenue = async (req: Request, res: Response) => {
  try {
    const totalRevenue = await OrderServices.calculateTotalRevenueFromDB();

    res.status(200).json({
      message: 'Revenue calculated successfully',
      success: true,
      data: { totalRevenue },
    });
  } catch (error: any) {
    res.status(500).json({
      success: false,
      message: error.message || 'Something went wrong!',
      error: error,
    });
  }
};

export const OrderControllers = {
  createOrder,
  calculateTotalRevenue,
};
