 import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    confirmPassword: {
      type: String,
      required: false,  
    },
  },
  { timestamps: true } // time of creation and time of update.
);

const User = mongoose.model("User", userSchema); //User without 's' at the end. MangoDb will add 's' automatically.

export default User;
