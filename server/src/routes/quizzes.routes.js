import {Router} from "express";

import { getQuizzes,createQuiz } from "../controllers/quizzes.controller.js";

const router = new Router();

router.get("/:id?", getQuizzes);
router.post("/", createQuiz);

export default router;