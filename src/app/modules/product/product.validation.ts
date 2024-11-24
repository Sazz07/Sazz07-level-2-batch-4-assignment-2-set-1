import { z } from 'zod';

const productValidationSchema = z.object({
  title: z
    .string({
      required_error: 'Title is required',
    })
    .trim(),
  author: z
    .string({
      required_error: 'Author is required',
    })
    .trim(),
  price: z
    .number({
      required_error: 'Price is required',
      invalid_type_error: 'Price must be a number',
    })
    .min(0, 'Price cannot be negative'),
  category: z.enum(
    ['Fiction', 'Science', 'SelfDevelopment', 'Poetry', 'Religious'],
    {
      required_error: 'Category is required',
      invalid_type_error:
        'Category must be one of "Fiction", "Science", "SelfDevelopment", "Poetry", or "Religious"',
    },
  ),
  description: z
    .string({
      required_error: 'Description is required',
    })
    .trim(),
  quantity: z
    .number({
      required_error: 'Quantity is required',
      invalid_type_error: 'Quantity must be a number',
    })
    .min(0, 'Quantity cannot be negative'),
  inStock: z
    .boolean({
      required_error: 'Stock status is required',
    })
    .default(true),
});

export default productValidationSchema;
