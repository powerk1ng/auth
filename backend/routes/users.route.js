import {
    getAllUsers
} from "../controllers/auth.getAllUsers.js";
import express from "express";
import {
    authMiddleware
} from "../middleware/authMiddleware.js";

const router = express.Router();
router.get("/api/users", authMiddleware, getAllUsers);
export default router;