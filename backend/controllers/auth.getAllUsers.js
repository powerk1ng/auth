import User from '../models/user.model.js';

export const getAllUsers = async (req, res, next) => {
    const users = await User.find();

    res.json({
        success: true,
        message: "Successfully",
        statusCode: 200,
        data: {
          users 
        }
      });
}