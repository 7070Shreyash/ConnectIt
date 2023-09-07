import express from "express";
import { getFeedBlogs, likeBlog } from "../controllers/blogs.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedBlogs);
/* UPDATE */
router.patch("/:id/like", verifyToken, likeBlog);
export default router;


