import { transporter } from "../config/mail.js";
import { generateOtp } from "../utils/generateOtp.js";
import Otp from "../models/Otp.js";
import User from "../models/User.js";
import jwt from "jsonwebtoken";

// SEND OTP
export const sendOtp = async (req, res) => {
  try {
    const { email } = req.body;
    if (!email) return res.status(400).json({ message: "Email required" });

    const otp = generateOtp();

    await Otp.deleteMany({ email });

    await Otp.create({
      email,
      otp,
      expiresAt: new Date(Date.now() + 5 * 60 * 1000),
    });

    await transporter.sendMail({
      to: email,
      subject: "Your OTP",
      text: `Your OTP is ${otp}`,
    });

    res.json({ message: "OTP sent" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Failed to send OTP" });
  }
};

// VERIFY OTP + USER + ROLE
export const verifyOtp = async (req, res) => {
  try {
    const { email, otp } = req.body;

    const record = await Otp.findOne({ email, otp });

    if (!record || record.expiresAt < new Date()) {
      return res.status(400).json({ message: "Invalid OTP" });
    }

    // 🔥 find or create user
    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({ email }); // default role: user
    }

    // 🔥 token me role bhejo
    const token = jwt.sign(
      { email: user.email, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "7d" }
    );

    await Otp.deleteMany({ email });

    res.json({ token, role: user.role }); // role optional but helpful
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "OTP verification failed" });
  }
};