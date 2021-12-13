import {userContext, createContext, useState, useContext } from 'react';

// create out context
const UserContext = createContext ();

// create a provider that takes in the children
const UserProvider = ({ children }) => {
    const [user, setUser] = useState({});

    return(
        <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
    )
}

// custom hook
const useUser = () => {
    const context = useContext(UserContext);

    if(context === undefined){
        throw new Error('useUser hook must be called within a UserContext Provider')
    }
    return context
}

export { UserProvider, useUser}

// create a context file for your state you want to share.
// wrap the provider around your app.
// use the custom hook inside the components that need it. 