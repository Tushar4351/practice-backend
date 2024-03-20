import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    //first way of making schema
    // username: String,
    // email: String,
    // isActive : Boolean

    //Second way mopre efficient and powerful with lots of feature
    username: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const User = mongoose.model("User", userSchema);
