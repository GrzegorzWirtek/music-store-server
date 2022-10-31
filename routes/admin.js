import express from 'express';

import { getAdminData } from '../controlers/admin.js';

const router = express.Router();

router.get('/', getAdminData);

export default router;
