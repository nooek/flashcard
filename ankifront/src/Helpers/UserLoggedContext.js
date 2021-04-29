import React, { useState, useContext, createContext } from "react"

const userlogged = createContext()

const UserLoggedContext = ({ children }) => {
    const [userLogged, setUserLogged] = useState(false)
    return(
        <userlogged.Provider
        value={{userLogged, setUserLogged}}>
            {children}
        </userlogged.Provider>
    )
}

export const useUserLogged = () => {
    const context = useContext(userlogged)
    const { userLogged, setUserLogged } = context
    return { userLogged, setUserLogged }
}

export default UserLoggedContext