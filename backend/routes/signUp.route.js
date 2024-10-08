import express from "express";
import { signup } from "../controllers/auth.controller.js";
import { rateLimitMiddleware } from "../middleware/rateLimiterMiddleware.js";

const router = express.Router();
router.post("/api/auth/signup", signup);

export default router;