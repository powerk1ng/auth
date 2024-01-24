import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true, //username is required
      unique: true, // users will be unique
    },

    email: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // time of creation and time of update.
);

const User = mongoose.model("User", userSchema);  //User without 's' at the end. MangoDb will add 's' automatically.

export default User;
