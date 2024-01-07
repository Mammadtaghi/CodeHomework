import { Users } from "./../Models/userModel.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";


// Post

export async function Register(req, res) {
    try {
        const { username, password } = req.body

        const user = await Users.findOne({ username: username })

        if (user) {
            res.status(406).json({ message: `We already have ${username} named user!` })
            return
        }

        const hashedPass = await bcrypt.hash(password, 10)

        const newUser = await Users.create({
            username: username,
            password: hashedPass,
        })

        await newUser.save()

        const token = jwt.sign({
            username: newUser.username,
            role: newUser.role,
            basket: newUser.basket,
            wishlist: newUser.wishlist,
        })

        res.status(200).send(token)

    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}

export async function Login(req, res) {
    try {
        const { username, password } = req.body

        const user = await Users.findOne({ username: username })

        if (!(await bcrypt.compare(password, user.password))) {
            res.status(406).json({ message: "Username and Password wrong!" })
            return
        }

        const token = jwt.sign({
            username: user.username,
            role: user.role,
            basket: user.basket,
            wishlist: user.wishlist,
        }, "AlbiKey", { expiresIn: "1h" })

        res.status(200).send(token)

    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}

// Get

export async function GetAllUsers(req, res) {
    try {
        const users = await Users.find()

        res.status(200).send(users)
    } catch (error) {
        res.status(500).json({ message: "Server error" })
    }
}
