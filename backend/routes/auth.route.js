import express from 'express';
const router = express.Router();

import { login, logout, signup, updateProfile } from '../controllers/auth.controller.js';
import {protectRoute} from '../middleware/auth.middleware.js'

router.post('/signup', signup);
router.post('/login', login);
router.post('/logout', logout);

router.put('/update', protectRoute, updateProfile);

export default router;