import express from 'express';

import { verifyAdmin, verifyuser } from '../utils/verifyToken.js';
import { createBooking, deleteBooking, getAllbooking, getbooking, getUserBookings, updateBooking } from '../controllers/bookingController.js';


const router = express.Router();

router.post('/:userid',verifyuser,createBooking)
router.get('/:userid',verifyuser,getbooking)
router.get('/',verifyAdmin,getAllbooking)
// router.get('/',getAllbooking) // for testing purposes of admin
router.get("/:userId/bookings",getUserBookings);
router.delete("/:id",verifyuser, deleteBooking);
router.put("/:id",verifyuser, updateBooking);

export default router;