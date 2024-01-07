import React from 'react'
import style from "./index.module.scss";
import Navbar from '../Navbar';
import { Link } from 'react-router-dom';
import { useIsOpen } from '../../../Context/isOpenContext';

function Header() {

  const { isOpen, setIsOpen } = useIsOpen()

  return (
    <header className={style.header}>
      <div to={"/"} className={style.logoBox}>
        <img src={"https://topbike-store-demo.myshopify.com/cdn/shop/files/Untitled-2.png?v=1613575289"} alt="" />
      </div>
      <Navbar />
      <div className={style.iconBox}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <i className="fa-regular fa-user" onClick={()=>setIsOpen(true)}></i>
        <i className="fa-regular fa-heart">
          <div className={style.yellowDot}></div>
        </i>
        <i className="fa-solid fa-bag-shopping">
          <div className={style.yellowDot}></div>
        </i>
      </div>
    </header>
  )
}

export default Header
