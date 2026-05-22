import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  role: {
    type: String,
    default: "user", // 👈 sab default user
  },
});

const User = mongoose.model("User", userSchema);

export default User;