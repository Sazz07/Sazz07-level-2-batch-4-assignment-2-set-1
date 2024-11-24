import express from 'express';
import { ProductController } from './product.controller';

const router = express.Router();

router.post('/create-product', ProductController.createProduct);
router.get('/', ProductController.getAllProduct);
router.get('/:productId', ProductController.getProduct);
router.put('/:productId', ProductController.updateProduct);
router.delete('/:productId', ProductController.deleteProduct);

export const ProductRoutes = router;
