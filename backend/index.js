import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRoutes from "./routes/user.route.js";
import signUpRoutes from "./routes/auth.route.js";

const app = express();

app.use(express.json());

app.listen(4000, () => {
  console.log("listening to port 4000");
});

mongoose
  .connect(process.env.VITE_MONGO)
  .then(() => {
    console.log("db is connected");
  })
  .catch((e) => console.log(e));

app.use(userRoutes);
app.use(signUpRoutes);

// middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "Internal Server Error";

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});
