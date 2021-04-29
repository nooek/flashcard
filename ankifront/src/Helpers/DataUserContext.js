import React, {useState, useContext, createContext} from "react"

const data = createContext()

const UserDataContext = ( {children} ) => {
    const [userData, setUserData] = useState([])
    return(
        <data.Provider
        value={{userData, setUserData}}>
            {children}
        </data.Provider>
    )
}

export const useUserData =  () => {
    const context =  useContext(data)
    if (!context) throw new Error("useUserData must be used within a provider");
    const { userData, setUserData } = context
    return { userData, setUserData }
}

export default UserDataContext