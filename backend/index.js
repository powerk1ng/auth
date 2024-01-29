import express from "express";
import mongoose from "mongoose";
import "dotenv/config";
import userRoutes from "./routes/user.route.js";
import signUpRoutes from "./routes/signUp.route.js";
import singInRoutes from './routes/signIn.route.js';
import resetRoutes from "./routes/reset.route.js";
import cors from 'cors';

const app = express();

app.use(express.json());
app.use(cors());

app.listen(4000, () => {
  console.log("listening to port 4000");
});

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({
  extended: true
}));

mongoose
  .connect(process.env.VITE_MONGO)
  .then(() => {
    console.log("db is connected");
  })
  .catch((e) => console.log(e));

app.use(userRoutes);
app.use(signUpRoutes);
app.use(singInRoutes);

// middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Internal Server Error';

  res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});