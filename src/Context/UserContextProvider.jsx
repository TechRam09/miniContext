/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import UserContext from "./UserContext";

const UserContextProvider = ({ children }) => {
    const [user,SetUser] = useState(null)
    return (
        //Pass the props or states or any data through value inside the provider
        <UserContext.Provider value={{user,SetUser}}> 
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider