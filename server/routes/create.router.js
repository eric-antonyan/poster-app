import { Router } from "express";
import createController from "../controllers/create.controller.js";
const router = Router()

router.post("/", createController)

export default router