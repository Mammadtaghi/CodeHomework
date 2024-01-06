import express from "express";
import { CreateService, DeleteServiceByID, GetAllServices, GetServiceByID } from "../Controllers/serviceController.js";

const router = express.Router()


// Get

router.get("/services", GetAllServices)

router.get("/services/:id", GetServiceByID)

// Post

router.post("/services", CreateService)

// Delete

router.delete("/services/:id", DeleteServiceByID)

export default router
