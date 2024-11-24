import { Product } from '../product/product.model';
import { TOrder } from './order.interface';
import { Order } from './order.model';

const createOrderToDB = async (orderData: TOrder) => {
  const product = await Product.findById(orderData.product);
  if (!product) throw new Error('Product not found');

  if (product.quantity < orderData.quantity) {
    throw new Error('Insufficient stock for the requested quantity');
  }

  product.quantity -= orderData.quantity;
  product.inStock = product.quantity > 0;

  await product.save();

  const order = await Order.create(orderData);
  return order;
};

const calculateTotalRevenueFromDB = async () => {
  const result = await Order.aggregate([
    {
      $group: {
        _id: null,
        totalRevenue: { $sum: '$totalPrice' },
      },
    },
  ]);

  return result.length > 0 ? result[0].totalRevenue : 0;
};

export const OrderServices = {
  createOrderToDB,
  calculateTotalRevenueFromDB,
};
