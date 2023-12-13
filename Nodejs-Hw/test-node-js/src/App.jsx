import './App.css'
import { useState } from "react";
import useAxios from "./Hooks/useAxios";

function App() {

  const [products, setProducts] = useState([])

  const url = 'http://localhost:8000/products'

  const { Get, Post, Put, Delete } = useAxios()

  Get(url, setProducts)


  return (
    <>
      {products && products.map(item => (
        <ul key={item.id}>
          <li>{item.name}</li>
          <li>{item.price}</li>
          <li>{item.info}</li>
          <li><img src={item.image} alt="" /></li>
          <li><button onClick={() => Delete(url, item.id)}>Delete</button></li>
          <li><button onClick={() => Put(url, item.id, {
            "name": "Heyva",
            "price": 50,
            "info": "Heyetden derilib",
            "image": "https://immunitet.az/uploads/posts/2018-04/1523216819_1511826135_24099732_1708744415811476_69492837_n.jpg"
          })}>Edit</button></li> // on development stage
        </ul>
      ))}
    </>
  )
}

export default App
