import { Router } from "express";
import {
  
    createUserQuiz
} from "../controllers/userQuiz.controller.js"


const router = new Router();

router.post("/", createUserQuiz);


export default router;
