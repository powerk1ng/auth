import express from "express";
import { refresh } from "../controllers/auth.refreshController.js";

const router = express.Router();
router.post("/api/auth/refresh", refresh);


export default router;