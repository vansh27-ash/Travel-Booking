import express from 'express';
import { login,  registerWithOTP, reset_password, sendotp, verifyOTP, verifyOTP1 } from '../controllers/authController.js';

const router = express.Router();

router.post("/register", registerWithOTP);
router.post("/verify-otp", verifyOTP);
router.post("/verifyotp", verifyOTP1);
router.post('/login',login)
router.post('/send-otp', sendotp);
router.post('/reset-password', reset_password);

export default router

