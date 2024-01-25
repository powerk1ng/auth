import { test } from '../controllers/user.controller.js'
import express from "express";

const router = express.Router();

// req is the data we send to the api.
// res is the data we receive from api.
router.get("/api/auth/user", test);

export default router;
