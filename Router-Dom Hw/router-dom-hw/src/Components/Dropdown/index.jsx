import React from 'react'
import style from "./index.module.css";
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

function Dropdown({isOpen}) {

    const StyledNavLink = styled(NavLink)`
        color: white;

        &:hover{
            color: turquoise;
        }
    `

  return (
    <ul className={`${isOpen ? style.display : style.hide}`}>
        <li><StyledNavLink to='pageMarkup'>Page Markup and Formatting</StyledNavLink></li>
        <li><StyledNavLink to='contactFrom'>Contact From</StyledNavLink></li>
        <li><StyledNavLink to='imageAlingment'>Page Image Alingment</StyledNavLink></li>
        <li><StyledNavLink to='clearingFloats'>Clearing Floats</StyledNavLink></li>
    </ul>
  )
}

export default Dropdown