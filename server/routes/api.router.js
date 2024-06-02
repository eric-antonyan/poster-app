import { Router } from "express";
import apiController from "../controllers/api.controller.js";
import createRouter from "../routes/create.router.js"
import postsRouter from "../routes/posts.router.js"
import editPostRouter from "../routes/editPost.router.js"

const router = Router();

router.get("/", apiController);
router.use("/create", createRouter)
router.use("/posts", postsRouter)
router.use("/edit", editPostRouter)


export default router;
