import { FilterQuery } from 'mongoose';
import { TProduct } from './product.interface';
import { Product } from './product.model';

const createProductToDB = async (productData: TProduct) =>
  await Product.create(productData);

const getAllProductFromDB = async (searchTerm?: string) => {
  const filter: FilterQuery<TProduct> = {};

  if (searchTerm) {
    filter.$or = [
      { title: { $regex: searchTerm, $options: 'i' } },
      { author: { $regex: searchTerm, $options: 'i' } },
      { category: { $regex: searchTerm, $options: 'i' } },
    ];
  }

  return await Product.find(filter);
};

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
