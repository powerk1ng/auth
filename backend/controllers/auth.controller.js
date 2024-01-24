import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";

export const signup = async (req, res) => {
  const { username, email, password } = req.body;

  const validateInputs = (username, email, password) => {
    if (
      !username ||
      !email ||
      !password ||
      username === "" ||
      email === "" ||
      password === ""
    ) {
      throw new Error("All fields are required");
    }
  };

  try {
    validateInputs(username, email, password);

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    await newUser.save();
    res.json("Signup Successfully");
    
  } catch (e) {
    res.status(500).json({ error: e.message });
  }
};
