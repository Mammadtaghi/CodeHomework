import React from 'react'
import style from "./index.module.scss"
import { useProducts } from '../../../Context/productContext'
import Product from '../../../Components/Common Components/Product'
import { v4 } from 'uuid'

function NewProducts() {

  const { Products, isLoading } = useProducts()

  return (
    <section id={style.NewProducts}>
      <div className={style.container}>
        <div className={style.grid}>
          {isLoading ? <span className={style.loader}></span> : Products && Products.map(product=>(
            <Product key={v4()} id={product._id} image={product.image.url} title={product.title} price={product.price} discount={product.discount}/>
          ))}
        </div>
      </div>
    </section>
  )
}

export default NewProducts