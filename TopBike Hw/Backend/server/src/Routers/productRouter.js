import express from "express";
import { CreateProduct, DeleteProductByID, GetAllProducts, GetProductByID, GetProductByTitle } from "./../Controllers/productController.js";

const router = express.Router()


// Get

router.get("/products", GetAllProducts)

router.get("/products/:id", GetProductByID)

router.get("/products/by-title", GetProductByTitle)

// Post

router.post("/products", CreateProduct)

// Delete

router.delete("/products/:id", DeleteProductByID)


export default router
