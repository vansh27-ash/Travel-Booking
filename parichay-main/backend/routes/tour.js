import express from 'express'
import { createTour, deleteTour, getAllTour,  getAllTours,  getfeaturedTour, getSingleTour, gettourcount, getToursBySearch, getToursBySearchwithoutparams, updateTour } from '../controllers/tourController.js'
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router()


router.get("/", getAllTour);
router.get("/getall", getAllTours); // for admin
router.get("/:id", getSingleTour);
router.get("/search/getTourBySearch", getToursBySearch);
router.get("/search/new", getToursBySearchwithoutparams);
router.get("/search/getfeaturedtour", getfeaturedTour);
router.get("/search/gettourcount", gettourcount);


// router.post("/",verifyAdmin, createTour)
router.post("/", createTour)
router.put("/:id", verifyAdmin,updateTour);
// router.put("/:id", updateTour); // for testing admin
router.delete("/:id",verifyAdmin, deleteTour);


export default router;