import React from 'react'
import style from "./index.module.scss";
import Hero from '../../Layouts/Home Layouts/Home Hero';
import HomeServices from '../../Layouts/Home Layouts/Home Services';

function Home() {
  return (
    <main>
      <Hero />
      <HomeServices />
    </main>
  )
}

export default Home