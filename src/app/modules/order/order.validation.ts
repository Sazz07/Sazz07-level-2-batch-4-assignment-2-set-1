import { z } from 'zod';
import { Types } from 'mongoose';

const objectIdValidation = z
  .string()
  .refine((val) => Types.ObjectId.isValid(val), {
    message: 'Invalid ObjectId format',
  })
  .transform((val) => new Types.ObjectId(val));

const orderValidationSchema = z.object({
  email: z
    .string({
      required_error: 'Email is required',
    })
    .email('Invalid email format'),
  product: objectIdValidation,
  quantity: z
    .number({
      required_error: 'Quantity is required',
      invalid_type_error: 'Quantity must be a number',
    })
    .min(1, 'Quantity must be at least 1'),
  totalPrice: z
    .number({
      required_error: 'Total price is required',
      invalid_type_error: 'Total price must be a number',
    })
    .min(0, 'Total price cannot be negative'),
});

export default orderValidationSchema;
