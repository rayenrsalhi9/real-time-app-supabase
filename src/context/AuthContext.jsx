/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [session, _] = useState(undefined)

    return(
        <AuthContext.Provider value={{session}}>
            {children}
        </AuthContext.Provider>
    )
}

// instead of importing useContext and AuthContext in
// every component that needs the context value
// use this custom hook instead
// e.g. const userSession = useAuth()
export const useAuth = () => {
    return useContext(AuthContext)
}