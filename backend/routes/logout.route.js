import express from "express";
import {
    logOut
} from "../controllers/auth.logoutController.js";

const router = express.Router();
router.post("/api/auth/logout", logOut);
export default router;