import express from 'express';

import { getProducts } from '../controlers/products.js';

const router = express.Router();

router.get('/', getProducts);

export default router;
