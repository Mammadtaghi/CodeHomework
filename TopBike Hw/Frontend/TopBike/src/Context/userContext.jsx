import { createContext, useContext } from "react";
import useLocalstorage from "../Hooks/useLocalstorage";

const userContext = createContext()

export const UserProvider = ({ children }) => {

    const [user, setUser] = useLocalstorage("user", { username:"", role:"", basket:[], wishlist:[], token:"" })

    const data = {
        user,
        setUser,
    }

    return (
        <userContext.Provider value={data}>
            {children}
        </userContext.Provider>
    )
}

export const useUser = () => useContext(userContext)