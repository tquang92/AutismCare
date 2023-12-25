import { PropsWithChildren, createContext, useState } from "react";

export const Context = createContext({
    user: undefined,
    setUser: (user: any)=>{},
});

export const ContextProvider = ({children}: PropsWithChildren)=>{
    const [user, setUser] = useState();
    return <Context.Provider value={{
        user,
        setUser,
    }}>
        {children}
    </Context.Provider>
}