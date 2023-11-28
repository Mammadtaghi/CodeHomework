import React, { useState } from 'react'
import style from "./Navbar.module.css";
import { NavLink } from 'react-router-dom';
import styled from "styled-components";
import Dropdown from '../../Components/Dropdown';

function Navbar() {

    const [isOpen, setIsOpen] = useState(true)

    const StyledNavLink = styled(NavLink)`
    color: white;

    &:hover{
        color: turquoise;
    }
    `

    return (
        <nav>
            <div className={style.container}>
                <a href="/" className={style.icon}>Dazzling Demo</a>
                <ul className={style.navigators}>
                    <li className={style.navItem}><StyledNavLink to=''>Home</StyledNavLink></li>
                    <li className={style.navItem}><StyledNavLink to='gallery'>Gallery</StyledNavLink></li>
                    <li className={style.navItem}><StyledNavLink to='shortcodes'>Shortcodes</StyledNavLink></li>
                    <li className={`${style.about} ${style.navItem}`} onClick={() => setIsOpen(!isOpen)}><StyledNavLink>About <i className="fa-solid fa-caret-down"></i></StyledNavLink><Dropdown isOpen={isOpen} /></li>
                    <li className={style.navItem}><StyledNavLink to='languages'>Languages</StyledNavLink></li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar