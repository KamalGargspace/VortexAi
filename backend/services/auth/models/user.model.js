import mongoose, { mongo } from "mongoose";

const userSchema = new mongoose.Schema(
  {
    firebaseUid: {
      type: String,
      required: true,
      unique: true,
    },
    name: String,
    email: String,
    avatar: String,
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

export default User;
