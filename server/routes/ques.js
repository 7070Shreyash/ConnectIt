import express from "express";
import { getFeedQues, likeQues ,AnsQues} from "../controllers/ques.js";
import { verifyToken } from "../middleware/auth.js";

const router = express.Router();

/* READ */
router.get("/", verifyToken, getFeedQues);
/* UPDATE */
router.patch("/:qid/like", verifyToken, likeQues);
router.patch("/:qid/ans",verifyToken,AnsQues);

export default router;
