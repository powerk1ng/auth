import express from "express";
import mongoose from "mongoose";
import signUpRoutes from "./routes/signUp.route.js";
import singInRoutes from './routes/signIn.route.js';
import refreshRoutes from './routes/refresh.route.js';
import logoutRoutes from './routes/logout.route.js';

import cors from 'cors';
import "dotenv/config";
import cookieParser from "cookie-parser";


const app = express();

app.use(express.json());
app.use(cors());
app.use(cookieParser())


app.listen(4000, () => {
  console.log("listening to port 4000");
});

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


mongoose
  .connect(process.env.VITE_MONGO)
  .then(() => {
    console.log("db is connected");
  })
  .catch((e) => console.log(e));

  app.use(signUpRoutes);
  app.use(singInRoutes);
  app.use(refreshRoutes);
  app.use(logoutRoutes);


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