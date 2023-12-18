import { PropsWithChildren, createContext, useState } from "react";

const Context = createContext({
    user: undefined,
    setUser: (user: any)=>{},
});

export const Provider = ({children}: PropsWithChildren)=>{
    const [user, setUser] = useState();
    return <Context.Provider value={{
        user,
        setUser,
    }}>
        {children}
    </Context.Provider>
}