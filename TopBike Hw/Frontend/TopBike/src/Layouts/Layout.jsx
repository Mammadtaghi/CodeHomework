import React from 'react'
import { Outlet } from "react-router-dom";
import Header from './Common Layouts/Header';
import Footer from './Common Layouts/Footer';

function Layout() {
  return (
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout