import React, { useState } from 'react';
import { useUser } from '../../../Context/userContext';
import style from "./index.module.scss";
import { useIsOpen } from '../../../Context/isOpenContext';

function Product({ props }) {

  const { user } = useUser()

  const { setIsOpen } = useIsOpen()

  const { AddToWishlist, isInWishlist } = useUser()

  const [isIn, setisIn] = useState(isInWishlist(props._id))

  function handleAdd() {
    if (user.role) {
      AddToWishlist(props)
      setisIn(isInWishlist(props._id));
      return
    }
    setIsOpen(true)
  }

  return (
    <div id={style.Product}>
      <div className={style.imgBox}>
        <img src={props.image.url} alt={props.title} />
        <div className={style.iconModal}>
          <div className={style.iconsContainer}>
            <div className={style.iconBox} onClick={() => handleAdd(props)}><i className={`fa-${isIn ? 'solid' : 'regular'} fa-heart`}></i></div>
            <div className={style.iconBox}><i className='fa-solid fa-shopping-bag'></i></div>
            <div className={style.iconBox}><i className='fa-solid fa-magnifying-glass'></i></div>
          </div>
        </div>
        {props.discount && <div className={style.discountBox}>-{props.discount}%</div>}      </div>
      <div className={style.textBox}>
        <h4 className={style.title}>{props.title}</h4>
        <p className={style.priceBox}><span style={props.discount ? { color: "grey", textDecoration: "line-through" } : { color: '#ffaa00' }}>${props.price}</span>{props.discount ? <span style={{ color: '#ffaa00' }}>${(props.price * (100 - props.discount) / 100)}</span> : null}</p>
      </div>
    </div>
  )
}

export default Product