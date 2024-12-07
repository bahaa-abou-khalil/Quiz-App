import {Router} from "express";

import { getQuizzes,createQuizzes } from "../controllers/quizzes.controller.js";

const router = new Router();

router.get("/:id?", getQuizzes);
router.post("/", createQuizzes);

export default router;