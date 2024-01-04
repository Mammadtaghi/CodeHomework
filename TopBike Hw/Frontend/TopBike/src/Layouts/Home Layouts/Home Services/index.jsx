import React from 'react'
import style from "./index.module.scss";
import HomeService from '../../../Components/Home Components/HomeService';

function HomeServices() {

  return (
    <section id={style.HomeServices}>
      <div className={style.container}>
        <HomeService info={"Only order from $230"} title={"FREE SHIPPING"} img={"https://topbike-store-demo.myshopify.com/cdn/shop/files/free-delivery.png?v=1613577961"} />
        <HomeService info={"30 days free for return money"} title={"MONEY RETURN"} img={"https://topbike-store-demo.myshopify.com/cdn/shop/files/return-of-investment.png?v=1613577961"} />
        <HomeService info={"Always ready to support"} title={"SUPPORT 24/7"} img={"https://topbike-store-demo.myshopify.com/cdn/shop/files/24-hours-support.png?v=1613577961"} />
      </div>
    </section>
  )
}

export default HomeServices