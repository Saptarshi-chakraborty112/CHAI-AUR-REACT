import React, { useState } from "react";
import UserContext from "./UserContext";

/* Context providers in React allow for passing data down to child components 
without having to pass props through every level of the component tree. */

const UserContextProvider = ({children}) => {

    const [user, setUser] = useState(null)
    return (
        <UserContext.Provider value={{user,setUser}}>
            {children}
        </UserContext.Provider>
    )
}

export default UserContextProvider