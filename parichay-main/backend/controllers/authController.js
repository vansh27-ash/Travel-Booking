import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import nodemailer from "nodemailer";
import crypto from "crypto";



// Configure email transporter




// Store temporary OTPs (in production, use Redis or database)
const tempOTPStore = new Map();


export const registerWithOTP = async (req, res) => {
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false, // for local development only
    },
  });
  try {
    const { email, password, username } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res
        .status(400)
        .json({ success: false, message: "Email already registered" });
    }

    // Generate OTP (6-digit code)
    const otp = crypto.randomInt(100000, 999999).toString();
    const otpExpiry = Date.now() + 15 * 60 * 1000; // 15 minutes expiry

    // Store OTP temporarily
    tempOTPStore.set(email, {
      otp,
      otpExpiry,
      userData: { email, password, username },
    });

    // Send OTP email
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Your Verification OTP",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0f2a39;">Welcome to Our Service!</h2>
          <p>Your verification code is:</p>
          <h1 style="color: #f6932d; font-size: 2.5rem;">${otp}</h1>
          <p>This code will expire in 15 minutes.</p>
          <p>If you didn't request this, please ignore this email.</p>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    

    res.status(200).json({
      success: true,
      message: "OTP sent to email",
      email: email,
    });
  } catch (err) {
    

    res.status(500).json({ success: false, message: "Failed to send OTP" });
  }
};

export const verifyOTP = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const storedData = tempOTPStore.get(email);

    if (!storedData) {
      return res
        .status(400)
        .json({ success: false, message: "OTP expired or invalid" });
    }

    if (Date.now() > storedData.otpExpiry) {
      tempOTPStore.delete(email);
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    if (otp !== storedData.otp) {
      return res.status(400).json({ success: false, message: "Invalid OTP" });
    }

    // OTP verified - create user
    const { password, username } = storedData.userData;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const newUser = new User({ email, password:hash, username });
    await newUser.save();

    // Clean up
    tempOTPStore.delete(email);

    res.status(200).json({
      success: true,
      message: "Registration successful",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Registration failed" });
  }
};




export const login = async (req, res) => {
  const email = req.body.email;

  
  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "user not found create user",
      });
    }

    const isPasswordCorrect = await bcrypt.compare(
      req.body.password,
      user.password
    );

    if (!isPasswordCorrect) {
      return res.status(401).json({
        success: false,
        message: "email or password is incorrect",
      });
    }

    
    const { password, role, ...rest } = user._doc;

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "15d" } 
    );

    res
      .cookie("accessToken", token, {
        httpOnly: true,
        expires: token.expiresIn, // 15 days
        sameSite: "none",
        secure:true,
      })
      .status(200)
      .json({
        token,
        data: { ...rest },
        role,
      });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Username or password is incorrect",
      error: err.message,
    });
  }
};

