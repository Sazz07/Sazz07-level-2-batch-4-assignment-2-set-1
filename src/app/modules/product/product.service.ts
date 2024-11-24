import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductToDB = async (productData: TProduct) =>
  await Product.create(productData);

const getAllProductFromDB = async () => await Product.find();

const getProductFromDB = async (productId: string) =>
  await Product.findById(productId);

const updateProductInDB = async (
  productId: string,
  updateData: Partial<TProduct>,
) => {
  return await Product.findByIdAndUpdate(productId, updateData, {
    new: true,
    runValidators: true,
  });
};

const deleteProductFromDB = async (productId: string) => {
  return await Product.findByIdAndDelete(productId);
};

export const ProductServices = {
  createProductToDB,
  getAllProductFromDB,
  getProductFromDB,
  deleteProductFromDB,
  updateProductInDB,
};
