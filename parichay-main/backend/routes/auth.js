import express from 'express';
import { login,  registerWithOTP, verifyOTP } from '../controllers/authController.js';

const router = express.Router();

router.post("/register", registerWithOTP);
router.post("/verify-otp", verifyOTP);
router.post('/login',login)

export default router

