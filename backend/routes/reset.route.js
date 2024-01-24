import express from "express";
import mongoose from "mongoose";

const router = express.Router();

// Define a route to remove all data
router.delete("/reset-database", async (req, res, next) => {
  try {
    // Delete all documents from the 'users' collection (adjust the collection name as needed)
    await mongoose.connection.collections.users.deleteMany({});
    res
      .status(200)
      .json({ success: true, message: "All data removed successfully" });
  } catch (error) {
    next(error);
  }
});

export default router;
