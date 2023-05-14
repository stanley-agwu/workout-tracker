import express from 'express';

import { signin, signup } from '../controllers/usersControllers';

const router = express.Router();

// signup route
router.post('/signup', signup);

// signup route
router.post('/signin', signin);

export default router;
