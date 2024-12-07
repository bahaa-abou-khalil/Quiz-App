import { Router } from "express";
import {
  getUsers,
  createUser
} from "../controllers/users.controller.js";


const router = new Router();

router.get("/:id?", getUsers);
router.post("/create", createUser);


export default router;
