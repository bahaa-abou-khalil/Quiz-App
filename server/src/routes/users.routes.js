import { Router } from "express";
import {
  getUsers,
  createUser
} from "../controllers/users.controller.js";


const router = new Router();

router.get("/:id?", authMiddleware, adminMiddleware, getUsers);
router.post("/", createUser);


export default router;
