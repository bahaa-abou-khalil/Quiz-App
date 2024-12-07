import {Router} from "express";

import { getQuizzes } from "../controllers/quizzes.controller";

const router = new Router();

router.get("/:id?", getQuizzes);

export default router;