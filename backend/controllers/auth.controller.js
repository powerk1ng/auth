import {
  errorHandler
} from "../utils/error.js";
import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import "dotenv/config";
import {
  generateToken,
  saveToken
} from "../utils/index.js";
import Token from "../models/token.model.js";

//sign up ================================================================================================================
export const signup = async (req, res, next) => {
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

    const hashedPassword = bcryptjs.hashSync(password, 10);

    const newUser = new User({
      email,
      password: hashedPassword,
    });

    const tokens = generateToken({
      id: newUser._id
    });

    const existingUser = await User.findOne({
      email
    })

    if (existingUser) {
      return next(errorHandler(400, "Duplicate key error"))
    }

    await newUser.save();
    await saveToken(newUser._id, tokens.refreshToken);

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: false, // Set to true if using HTTPS
      maxAge: 180 * 60 * 1000 // matches the refresh token expiration time
    });

    res.json({
      success: true,
      message: "User was created successfully",
      statusCode: 200,
      data: {
        user: newUser._id,
        tokens
      }
    });

  } catch (error) {
    next(error)
  }
};



// sign in ==========================================================================================================================
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

    const validPassword = bcryptjs.compareSync(password, validUser.password)

    if (!validPassword) {
      return next(errorHandler(400, 'Invalid email or password'))
    }

    const tokens = generateToken({
      id: validUser._id
    });

    await saveToken(validUser._id, tokens.refreshToken);

    const refreshTokenData = await Token.findOne({
      user: validUser._id
    });

    if (!refreshTokenData) {
      return next(errorHandler(404, 'Refresh token not found'));
    }

    res.cookie('refreshToken', tokens.refreshToken, {
      httpOnly: true,
      secure: false, // Set to true if using HTTPS
      maxAge: 60 * 60 * 1000 // matches the refresh token expiration time
    });

    res.json({
      success: true,
      message: "Successfully signed in",
      statusCode: res.statusCode,
      data: {
        user: validUser._id,
        tokens
      }
    })

  } catch (error) {
    next(error)
  }
}