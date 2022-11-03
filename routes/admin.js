import express from 'express';

import { authenticateAdmin } from '../controlers/admin.js';

const router = express.Router();

router.post('/', authenticateAdmin);

export default router;
