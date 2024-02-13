import express from "express";
import { signIn } from "../controllers/auth.controller.js";
import { rateLimitMiddleware } from "../middleware/rateLimiterMiddleware.js";

const router = express.Router();
router.post("/api/auth/signin", signIn);
export default router;