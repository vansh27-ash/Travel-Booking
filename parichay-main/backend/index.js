import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import tourRoute from './routes/tour.js'
import UserRoute from './routes/user.js'
import authRoute from './routes/auth.js'
import reviewRoute from './routes/reviews.js'
import bookingRoute from './routes/booking.js'
import razorpay from 'razorpay'
import payment from './routes/payment.js'

dotenv.config()

const app = express();
const port = process.env.PORT || 8000;
const corsOptions = {
    origin: true,
    credentials:true,
}

export const instance = new razorpay({
    key_id: process.env.API_KEY,
    key_secret:process.env.API_SECRET_KEY,
})

app.use(express.urlencoded({ extended: true }));

mongoose.set("strictQuery",false)
const connect = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology:true
        })
        console.log("Mongo Connected")
    }
    catch (err) {
        console.log("Connection failed");
    }
}


// middleware

app.use(express.json())
app.use(cors(corsOptions))
app.use(cookieParser())
app.use("/api/v1/tour", tourRoute);
app.use("/api/v1/user", UserRoute)
app.use("/api/v1/auth", authRoute)
app.use("/api/v1/review", reviewRoute)
app.use("/api/v1/booking", bookingRoute)
app.use("/api/v1/payment",payment)

app.get("/", (req, res) => {
  res.send("Hello, World!");
});

app.listen(port, () => {
    connect()
    console.log("Sever is running at port", port);
})