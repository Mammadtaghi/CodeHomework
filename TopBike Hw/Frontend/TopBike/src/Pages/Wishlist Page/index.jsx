import React from 'react';
import style from "./index.module.scss";
import { useUser } from '../../Context/userContext';
import Product from '../../Components/Common Components/Product';

function WishlistPage() {

  const { user, AddToWishlist } = useUser()

  return (
    <main id={style.Wishlist}>
      <section>
        <div className={style.container}>
          <h1 className={style.title}>Your Wishlist</h1>
          <div className={style.grid}>
            {user.wishlist && user.wishlist.map(item=>(
              <Product props={item}/>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}

export default WishlistPage