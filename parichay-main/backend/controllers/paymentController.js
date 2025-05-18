import { Cipher, createHmac } from "crypto"
import { instance } from "../index.js"

export const payment_process = async (req, res) => {
    
    const options = {
        amount: Number(req.body.amount*100),
        currency: 'INR',
        
    }
    
    
    const order = await instance.orders.create(options)
    
    res.status(200).json({
        success: true,
        order,
    })
    
}
export const getkey = (req, res) => {
    res.status(200).json({
        key: process.env.API_KEY
    })
    
};

export const paymentverification = async (req, res) => {
    console.log(req.body)

    const { razorpay_payment_id, razorpay_order_id, razorpay_signature } = req.body
    
    const body = razorpay_order_id + "|" + razorpay_payment_id 
    const expectedSignature = createHmac(
      "sha256",
      process.env.API_SECRET_KEY
    ).update(body.toString()).digest("hex");
    const isAuthentic=expectedSignature === razorpay_signature  
    if (isAuthentic) {
        res.status(200).json({
            success:true
        })

    }
    else {
        res.status(500).json({
          success: 500,
        });
    }
}