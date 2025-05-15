import express from 'express';
import { CreateReview } from '../controllers/reviewController.js';
import { verifyuser } from '../utils/verifyToken.js';


const router = express.Router();

router.post('/:tourid',verifyuser,CreateReview)

export default router;