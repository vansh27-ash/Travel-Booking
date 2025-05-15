import express from 'express'
import { createTour, deleteTour, getAllTour, getfeaturedTour, getSingleTour, gettourcount, getToursBySearch, getToursBySearchwithoutparams, updateTour } from '../controllers/tourController.js'
import { verifyAdmin } from '../utils/verifyToken.js';

const router = express.Router()

router.post("/",verifyAdmin, createTour)

router.put("/:id", verifyAdmin,updateTour);
router.delete("/:id",verifyAdmin, deleteTour);
router.get("/:id", getSingleTour);
router.get("/", getAllTour);
router.get("/search/getTourBySearch", getToursBySearch);
router.get("/search/new", getToursBySearchwithoutparams);
router.get("/search/getfeaturedtour", getfeaturedTour);
router.get("/search/gettourcount", gettourcount);

export default router;