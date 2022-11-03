import express from 'express';

import {
	addProduct,
	getProducts,
	deleteProduct,
} from '../controlers/products.js';

const router = express.Router();

router.get('/', getProducts);
router.post('/', addProduct);
router.delete('/', deleteProduct);

export default router;
