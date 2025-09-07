import { createContext, useContext, useState, useEffect } from "react";
import { getInitialSession } from "../utils";
import supabase from "../supabase-client";

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {
    const [session, setSession] = useState(undefined)

    useEffect(() => {
        getInitialSession(setSession)
        supabase.auth.onAuthStateChange((_event, session) => {
            setSession(session)
        })
    }, [])

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