import dotenv from "dotenv";
dotenv.config(); // ✅ sabse pehle

import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import franchiseRoutes from "./routes/franchiseRoutes.js"; // 🔥 ADD THIS

const app = express();

// middlewares
app.use(cors());
app.use(express.json());

// DB connect
connectDB();

// routes
app.use("/api/auth", authRoutes);
app.use("/api/franchise", franchiseRoutes); // 🔥 THIS FIXES YOUR ERROR

// test route (optional but helpful)
app.get("/", (req, res) => {
  res.send("API Working ✅");
});

// server
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`🚀 Server running on ${PORT}`);
});