import express from "express";
import { getkey, payment_process, paymentverification } from "../controllers/paymentController.js";


const router = express.Router()

router.post("/process",payment_process)
router.route("/getkey").get(getkey);
router.post("/verification", paymentverification);

export default router;