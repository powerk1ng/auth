import {
  errorHandler
} from "../utils/error.js";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import jwt from 'jsonwebtoken';
import "dotenv/config";


//sign up
export const signup = async (req, res, next) => {
  const {
    role,
    email,
    password
  } = req.body;

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

    res.json({
      success: true,
      message: "User was created successfully",
      statusCode: 200,
    });

  } catch (error) {
    if (error.message.includes("duplicate key error")) {
      next(errorHandler(400, "Duplicate key error"))
    }
    next(error)
  }
};


// sign in
export const signIn = async (req, res, next) => {

  const {
    email,
    password
  } = req.body;

  const validateInputs = (email, password) => {
    if (!email || !password || email === "" || password === "") {
      next(errorHandler(400, "All fields are required"));
    }
  };


  try {
    validateInputs(email, password);

    const validUser = await User.findOne({
      email
    })

    if (!validUser) {
      return next(errorHandler(404, "User not found"));
    }

    const {
      password: pass,
      ...rest
    } = validUser._doc;

    const validPassword = bcryptjs.compareSync(password, validUser.password)

    if (!validPassword) {
      return next(errorHandler(400, 'Invalid email or password'))
    }

    const access_token = jwt.sign({
      id: validUser._id,
      // role: validUser.role,
    }, process.env.VITE_JWT_SECRET, {
      expiresIn: "1hr"
    })

    const refresh_token = jwt.sign({
      id: validUser._id
    }, process.env.VITE_REFRESH_JWT_SECRET, {
      expiresIn: "1d"
    })

    res.status(200).cookie('token', refresh_token, {
      httpOnly: true,
      secure: false,
      maxAge: 1 * 24 * 60 * 60 * 1000 //matches refresh token
    })

    res.json({
      success: true,
      message: "Successfully signed in",
      statusCode: res.statusCode,
      currentUser: access_token
    })

  } catch (error) {
    next(error)
  }
}