import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";

const productContext = createContext()

export const ProductProvider = ({ children }) => {

    const [Product, setProduct] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    async function GetProducts() {
        try {
            const response = await axios("http://localhost:5000/products").then(res=>res.data)
            setProduct(response)
            setIsLoading(false)
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
      GetProducts()
    }, [])
    

    const data = {
        Product,
        setProduct,
        isLoading
    }

    return (
        <productContext.Provider value={data}>
            {children}
        </productContext.Provider>
    )
}

export const useProducts = () => useContext(productContext)