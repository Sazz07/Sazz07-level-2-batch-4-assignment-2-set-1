import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductToDB = async (productData: TProduct) => {
  const result = await Product.create(productData);

  return result;
};

export const ProductServices = {
  createProductToDB,
};
