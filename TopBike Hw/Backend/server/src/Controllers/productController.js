import cloudinary from "../Utils/cloudinary.js";
import { Products } from "./../Models/productModel.js";


// Get

export async function GetAllProducts(req, res) {
    try {
        const products = await Products.find()
        res.status(200).send(products)
    } catch (error) {
        res.satus(500).json({ message: error })
    }
}

export async function GetProductByID(req, res) {
    try {
        const { id } = req.params
        const product = await Products.findById(id)
        res.status(200).send(product)
    } catch (error) {
        res.satus(500).json({ message: error })
    }
}

export async function GetProductByTitle(req, res) {
    try {
        const { title } = req.body
        const product = await Products.findOne({ title: title })
        res.status(200).send(product)
    } catch (error) {
        res.satus(500).json({ message: error })
    }
}

// Post

export async function CreateProduct(req, res) {
    try {
        const { title, image, price, categories, discount } = req.body

        const result = await cloudinary.uploader.upload(image,{
            folder:"products"
        })

        const newProduct = await Products.create({
            title:title,
            image:{
                public_id: result.public_id,
                url: result.secure_url
            },
            price:price,
            categories:categories,
            discount:discount
        })

        await newProduct.save()
        res.status(200).send("Product successfully created!")
    } catch (error) {
        res.satus(500).json({ message: error })
    }
}

// Delete

export async function DeleteProductByID(req, res) {
    try {
        const { id } = req.params
        const product = await Products.findByIdAndDelete(id)
        res.status(200).send("Product successfully deleted!")
    } catch (error) {
        res.satus(500).json({ message: error })
    }
}
