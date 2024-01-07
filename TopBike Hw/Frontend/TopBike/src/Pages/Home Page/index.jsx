import React from 'react'
import style from "./index.module.scss";
import Hero from '../../Layouts/Home Layouts/Home Hero';
import HomeServices from '../../Layouts/Home Layouts/Home Services';
import Modal from '../../Components/Common Components/Modal';
import LoginRegisterForm from '../../Layouts/Login_Register Layouts/LoginRegisterForm';

function Home() {
  return (
    <main>
      <Hero />
      <HomeServices />
      <Modal><LoginRegisterForm /></Modal>
    </main>
  )
}

export default Home