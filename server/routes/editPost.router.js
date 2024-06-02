import editPostController from "../controllers/editPost.controller.js";
import { Router } from "express"
const router = Router()

router.post("/:id", editPostController)

export default router