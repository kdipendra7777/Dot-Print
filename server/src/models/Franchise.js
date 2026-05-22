import mongoose from "mongoose";

const franchiseSchema = new mongoose.Schema({
  // BASIC
  name: String,
  phone: String,
  whatsapp: String,
  email: String,
  city: String,
  pincode: String,

  // BUSINESS
  firmName: String,
  occupation: String,
  runningBusiness: String,
  experience: String,

  // INVESTMENT
  investment: String,
  funding: String,
  space: String,
  timeline: String,

  // COMPLIANCE
  gst: String,
  location: String,

  // INTENT
  why: String,
  support: String,
  involvement: String,

  // EXTRA
  message: String,
  reference: String,
  callTime: String,

  // SYSTEM
  status: {
    type: String,
    default: "pending", // pending | approved | rejected
  },
}, { timestamps: true });

export default mongoose.model("Franchise", franchiseSchema);