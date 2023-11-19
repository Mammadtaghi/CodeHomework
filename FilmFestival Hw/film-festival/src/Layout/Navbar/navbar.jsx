import React, { useEffect, useState } from 'react'
import "./navbar.css"

function Navbar({state}) {

  
  const [navLeft, setNavLeft] = useState('')
  const [navTop, setNavTop] = useState('')
  
  useEffect(() => {
    if (state) {
      if (window.innerWidth >= 1150) {
        setNavLeft('-240px')
      }
      else if (window.innerWidth < 1150) {
        setNavTop('0px')
      }
    }
    else if (!state) {
      if (window.innerWidth >= 1150) {
        setNavLeft('60px')
      }
      else if (window.innerWidth < 1150) {
        setNavTop('300px')
      }
    }
  
  }, [state, navTop, navLeft])
  
  


  function OpenSubNav(e) {

    // Close Other SubNavs expect clicked one
    for (const item of e.parentElement.children) {
      if (item.classList.contains('subNav') && item !== e.nextElementSibling ) {
        item.style.maxHeight = '0px'
        
      }
    }

    // Open if closed or close if opened
    if (e.nextElementSibling.style.maxHeight !== "120px") {
      e.nextElementSibling.style.maxHeight = "120px"
    }
    else if(e.nextElementSibling.style.maxHeight !== "0px"){
      e.nextElementSibling.style.maxHeight = "0px"
    }
  }

  return (
    <nav id='sideNav' style={{left:`${navLeft}`, maxHeight:`${navTop}`}}>
      <ul className="navList">
        <li className='navItem'  ><a onClick={(e)=>OpenSubNav(e.target.parentElement)} href="#H">HOME</a></li>

        <ul className={`subNav subHome`}>
          <li>Home1</li>
          <li>Home2</li>
          <li>Home3</li>
          <li>Home4</li>
        </ul>

        <li className='navItem'  ><a onClick={(e)=>OpenSubNav(e.target.parentElement)} href="#H">PAGES</a></li>

        <ul className={`subNav subPages`}>
          <li>Pages1</li>
          <li>Pages2</li>
          <li>Pages3</li>
        </ul>

        <li className='navItem'  ><a onClick={(e)=>OpenSubNav(e.target.parentElement)} href="#H">PORTFOLIO</a></li>

        <ul className={`subNav subPortfolio`}>
          <li>Portfolio1</li>
          <li>Portfolio2</li>
          <li>Portfolio3</li>
        </ul>

        <li className='navItem'  ><a onClick={(e)=>OpenSubNav(e.target.parentElement)} href="#H">BLOG</a></li>

        <ul className={`subNav subBlog`}>
          <li>Blog1</li>
          <li>Blog2</li>
        </ul>

        <li className='navItem'  ><a onClick={(e)=>OpenSubNav(e.target.parentElement)} href="#H">SHOP</a></li>

        <ul className={`subNav subShop`}>
          <li>Shop1</li>
          <li>Shop2</li>
        </ul>

        <li><a href="#H">LANDING</a></li>
      </ul>
    </nav>
  )
}

export default Navbar