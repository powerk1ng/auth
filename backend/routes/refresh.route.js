import express from "express";
import { refresh } from '../controllers/auth.refresh.js';

const router = express.Router();
router.get("/api/auth/refresh", refresh);

export default router;