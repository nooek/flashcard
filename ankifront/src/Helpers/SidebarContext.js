import React, { useState, useContext, createContext } from "react"

const sidebar = createContext()

const SidebarContext = ({ children }) => {
    const [sidebarOpen, setSidebarOpen] = useState(false)
    return(
        <sidebar.Provider
        value={{sidebarOpen, setSidebarOpen}}>
            {children}
        </sidebar.Provider>
    )
}

export const useSidebar = () => {
    const context = useContext(sidebar)
    if (!context) throw new Error("useSidebar must be used within a provider");
    const { sidebarOpen, setSidebarOpen } = context
    return { sidebarOpen, setSidebarOpen }
}

export default SidebarContext