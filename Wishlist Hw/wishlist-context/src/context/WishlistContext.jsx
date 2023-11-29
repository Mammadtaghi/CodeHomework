import { createContext, useContext, useState } from "react";

export const WishlistContext = createContext()

export const WishlistProvider =({children})=>{

    const [wishlist, setWishlist] = useState([])

    const addToWishlist=(item)=>{
        let Element = wishlist.find(x=> x.id === item.id)
        if (Element !== undefined) {
            const FilteredWishlist = wishlist.filter(x=> x.id !== item.id)
            setWishlist(FilteredWishlist)
            return
        }
        setWishlist([...wishlist, {...item, count:1}])
    }



    const data = {
        wishlist,
        setWishlist,
        addToWishlist,

    }

    return(
        <WishlistContext.Provider value={data}>
            {children}
        </WishlistContext.Provider>
    )
}

export const useWishlist=()=>useContext(WishlistContext)