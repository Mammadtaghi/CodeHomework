import React, { useState } from 'react'
import "./header.css"
import Navbar from '../Navbar/navbar'

function Header() {

  const [isNavOpen, setIsNavOpen] = useState(true)

  function isOpen(state) {
    if (!state) {
      setIsNavOpen(true)
    }
    else{
      setIsNavOpen(false)
    }
  }

  return (
    <>
      <Navbar state={isNavOpen} />
      <header>

        <div className="navOpenBtn" onClick={()=>isOpen(isNavOpen)}>

          <span className="line"></span>

        </div>

        <div className="coppolaBox">

          <span className='coppola'>COPPOLA</span>

        </div>

        <div className="headerIconsBox">

          <i className="headerIcon fa-brands fa-instagram"></i>

          <i className="headerIcon fa-brands fa-youtube"></i>

          <i className="headerIcon fa-brands fa-vimeo-v"></i>

          <i className="headerIcon fa-brands fa-twitter"></i>

        </div>

      </header>
    </>
  )
}

export default Header