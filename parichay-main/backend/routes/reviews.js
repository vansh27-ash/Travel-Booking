import express from 'express';
import { CreateReview, getAllReviews } from '../controllers/reviewController.js';
import { verifyuser } from '../utils/verifyToken.js';


const router = express.Router();

router.post('/:tourid', verifyuser, CreateReview)
// router.post('/:tourid', CreateReview) // for testing purpose of admin
router.get('/', getAllReviews)

export default router;