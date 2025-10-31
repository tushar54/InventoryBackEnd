import express from 'express';
import { getProducts, addProduct, updateProduct, deleteProduct, getLowStock } from '../controllers/productController.js';
import { authMiddleware } from '../middleware/authMiddlewere.js';


const router = express.Router();

router.get('/', authMiddleware, getProducts);
router.post('/', authMiddleware, addProduct);
router.put('/:id', authMiddleware, updateProduct);
router.delete('/:id', authMiddleware, deleteProduct);
router.get('/low-stock', authMiddleware, getLowStock);

export default router;
