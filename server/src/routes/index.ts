import { Router } from "express";
import translateRouter from "./translateRouter";

const router = Router()

router.use('/translate', translateRouter)

export default router;