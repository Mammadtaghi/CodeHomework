import React from 'react'
import style from "./index.module.scss";

function Product({id, image, title, price, discount}) {

  return (
    <div>
      <span>{title}</span>
    </div>
  )
}

export default Product