import express from "express";
import { sensitiveLimiter } from "../middlewares/rateLimiter.js";
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup", signup);
router.post('/login', sensitiveLimiter, login);
router.post("/logout", logout);

export default router;