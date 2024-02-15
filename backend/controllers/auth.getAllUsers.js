import User from '../models/user.model.js';

export const getAllUsers = async (req, res, next) => {
  const users = await User.find();

  const data = users.map(user => {
    return {
      id: user.id,
      email: user.email,
      createdAt: user.createdAt
    }
  })


  res.json({
    success: true,
    message: "Successfully",
    statusCode: 200,
    data,
  });
}