import express from "express";
import mongoose from "mongoose";
import signUpRoutes from "./routes/signUp.route.js";
import singInRoutes from './routes/signIn.route.js';
import refreshRoutes from './routes/refresh.route.js';
import logoutRoutes from './routes/logout.route.js';
import getUserRoutes from './routes/users.route.js';

import cors from 'cors';
import "dotenv/config";
import cookieParser from "cookie-parser";


const app = express();
const PORT = process.env.PORT || 4000;

process.on('uncaughtException', function (err) {
  console.log(err);
});

app.use(express.json());
app.use(cors({
  credentials: true,
  origin: "http://localhost:3000"
}));
app.use(cookieParser())
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});
app.use(express.urlencoded({
  extended: true
}));
app.listen(PORT, () => {
  console.log(`listening to port ${PORT}`);
});


mongoose
  .connect(process.env.VITE_MONGO)
  .then(() => {
    console.log("db is connected");
  })
  .catch((e) => console.log(e));

// routes
app.use(signUpRoutes);
app.use(singInRoutes);
app.use(refreshRoutes);
app.use(logoutRoutes);
app.use(getUserRoutes);


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