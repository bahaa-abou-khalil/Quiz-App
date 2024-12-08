import { Router } from "express";
import {
  login,
  register
} from "../controllers/auth.controller.js";
import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = new Router();

router.post("/login", login);
router.post("/register", register);
router.put("/", authMiddleware);

export default router;
