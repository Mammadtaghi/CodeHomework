import express from "express";
import cors from "cors";

const app = express()

app.use(express.json())
app.use(cors())

const PORT = 8000


let Products = [
    { id: 1, name: "Alma", price: 5, info: "Quba Almasi", image: "https://img2.milli.az/n/clickable/204433/07/4/alma_041.jpg" },
    { id: 2, name: "Nar", price: 5, info: "Goycay Nari", image: "http://1.bp.blogspot.com/-VhcGagQulBA/UqBvrWfr-DI/AAAAAAAAA_c/UhPea65p7Gs/s1600/Nar+11.jpg" },
    { id: 3, name: "Pomidor", price: 5, info: "Zire Pomidoru", image: "https://images.wisegeek.com/three-red-tomatoes.jpg" },
]

let counter = 4

app.get("/", (req, res) => {

    res.send("Home")
})


// Get Products
app.get("/products", (req, res) => {

    if (Products) {
        res.send(Products)
        // res.status(200).json({ message: "Success" })
        return
    }
    else {
        // res.status(404).json({ error: "Products Not Found" })
        return
    }
})


// Get Product By Id
app.get("/products/:id", (req, res) => {
    const { id } = req.params
    const product = Products.find((x) => x.id === +id)
    if (product) {
        res.send(product)
        // res.status(200).json({ message: "Success" })
        return
    }
    res.status(404).json({ message: `${id} Product Not Found` })
})

app.post("/products", (req, res) => {
    const NewProduct = {
        id: counter++,
        name: req.body.name,
        price: req.body.price,
        info: req.body.info,
        img: req.body.img,
    }

    Products.push(NewProduct)
    // res.status(200).json({ message: "Succesfully Added" })
    res.send(Products)

})

app.delete("/products/:id", (req, res) => {
    const id = req.params.id
    if (id) {
        Products = Products.filter(x => x.id !== +id)
        res.send(Products)
        // res.status(200).json({ message: "Succesfully Deleted" })
        return
    }
    // res.status(404).json({ message: `${id} Not Found` })

})

app.put("/products/:id", (req, res) => {
    const {id} = req.params
    const index = Products.findIndex(x => x.id === +id)
    Products[index] = {
        id: +id,
        name: req.body.name,
        price: req.body.price,
        info: req.body.info,
        img: req.body.img
    }
    res.send(Products)
})



app.get("*", (req, res) => {
    res.send("Wrong Page")
})
app.listen(PORT, () => {
    console.log("Salam Server");
})
