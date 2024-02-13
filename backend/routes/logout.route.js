import express from "express";
import { logOut } from "../controllers/auth.logout.js";


const router = express.Router();
router.post("/api/auth/logout", logOut);
export default router;