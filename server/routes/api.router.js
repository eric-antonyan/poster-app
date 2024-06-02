import { Router } from "express";
import apiController from "../controllers/api.controller.js";
import createRouter from "../routes/create.router.js"
import postsRouter from "../routes/posts.router.js"

const router = Router();

router.get("/", apiController);
router.use("/create", createRouter)
router.use("/posts", postsRouter)


export default router;
