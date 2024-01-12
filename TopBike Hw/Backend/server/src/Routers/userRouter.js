import express from "express";
import { DeleteUserByID, GetAllUsers, GetUserByID, Login, Register, UpdateUserWishlistByID, UpdateUserWishlistByUsername } from "./../Controllers/userController.js";
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

router.get("/users/:id", CheckToken, GetUserByID)

// Delete

router.delete("/users/:id", CheckToken, CheckAdmin, DeleteUserByID)

// Put

router.put("/users", CheckToken, UpdateUserWishlistByUsername)

router.put("/users/:id", CheckToken, UpdateUserWishlistByID)

export default router