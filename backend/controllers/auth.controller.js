import { errorHandler } from "../utils/error.js";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res, next) => {
  const { role, email, password } = req.body;

  const validateInputs = (email, password, role) => {
    if (!email || !password || !role || email === "" || password === "" || role === '') {
      next(errorHandler(400, "All fields are required"));
    }
  };

  try {
    validateInputs(role, email, password);

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
      email,
      role,
      password: hashedPassword,
    });

    await newUser.save();
    res.json("Signup Successfully");
  } catch (e) {
    next(e);
  }
};
