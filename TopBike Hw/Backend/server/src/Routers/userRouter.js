import express from "express";
import { GetAllUsers, Login, Register } from "./../Controllers/userController.js";
import { CheckToken } from "../middleware/checkToken.js";
import { CheckAdmin } from "../middleware/checkAdmin.js";
import { CheckSuperAdmin } from "../middleware/checkSuperAdmin.js";

const router = express.Router()


// Post

router.post("/login", Login)

router.post("/register", Register)

// Get

router.get("/test", CheckToken, CheckAdmin, CheckSuperAdmin)

router.get("/users", CheckToken, GetAllUsers)


export default router