import { createContext, useContext } from "react";
import useLocalstorage from "../Hooks/useLocalstorage";
import axios from "axios";

const userContext = createContext()

export const UserProvider = ({ children }) => {

    const [user, setUser] = useLocalstorage("user", { username: "", role: "", basket: [], wishlist: [], token: "" })

    async function UpdateWishlist(wishlist) {
        try {
            const response = await axios({
                method: "put",
                url: `http://localhost:5000/users/wishlist`,
                headers: {
                    Authorization: `Bearer ${user.token}`
                },
                data: {
                    wishlist: wishlist,
                    username: user.username
                }
            }).then(res => res.data)

            console.log(response);

        } catch (error) {
            console.log(error.response.data);
        }
    }

    function AddToWishlist(item) {
        let WishlistCopy = [...user.wishlist]
        const itemIndex = WishlistCopy.findIndex(x => x._id === item._id)
        if (itemIndex === -1) {
            WishlistCopy.push({
                _id: item._id,
                imageURL: item.image.url,
                title: item.title,
                price: item.price,
                categories: item.categories,
                discount: item.discount
            })
            user.wishlist = WishlistCopy
            console.log(user.wishlist);
            UpdateWishlist(user.wishlist)
            return
        }
        WishlistCopy = WishlistCopy.filter(x => x._id !== item._id)
        user.wishlist = WishlistCopy
        console.log(user.wishlist);
        UpdateWishlist(user.wihslist ? user.wihslist : [])
    }

    function isInWishlist(id) {
        console.log(id);
        const WishlistCopy = [...user.wishlist]
        const isIn = WishlistCopy.findIndex(x => x._id === id)
        console.log(isIn);
        if (isIn !== -1) {
            return true
        }
        else {
            return false
        }
    }

    function Logout() {
        setUser({
            username: "",
            role: "",
            basket: [],
            wishlist: [],
            token: "",
        })
    }

    const data = {
        user,
        setUser,
        Logout,
        AddToWishlist,
        isInWishlist,
    }

    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    )
}

export const useUser = () => useContext(userContext)