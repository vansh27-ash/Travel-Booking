import express from 'express'
import {  deleteUser, getAllUser, getSingleUser,  removeUserBooking, updateUser } from '../controllers/userController.js';
import { verifyAdmin, verifyuser } from '../utils/verifyToken.js';


const router = express.Router()


router.put("/:id",verifyuser,updateUser);
router.delete("/:id",verifyuser, deleteUser);
router.get("/:id",verifyuser, getSingleUser);
router.get("/", verifyAdmin, getAllUser);
// router.get("/", getAllUser); // for testing purposes of admin
router.delete("/:userId/bookings/:bookingId",verifyuser, removeUserBooking);


export default router;