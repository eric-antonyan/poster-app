import { Router } from "express";
import postsController from "../controllers/posts.controller.js";
const router = Router()

router.get("/", postsController)

export default router