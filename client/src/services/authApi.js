// src/services/authApi.js
import axios from "axios";

const API = "http://localhost:5000/api/auth";

export const sendOtp = (email) =>
  axios.post(`${API}/send-otp`, { email });

export const verifyOtp = (email, otp) =>
  axios.post(`${API}/verify-otp`, { email, otp });