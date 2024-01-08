import { PropsWithChildren, createContext, useState } from "react";

type BookedType ={
    id: String;
    time: Date,
    name: String,
    birthDate: String,
    gender: String,
    note?: String;
}

export const Context = createContext({
    user: undefined,
    setUser: (user: any)=>{},
    bookedList: new Array(0),
    addBookedList: (item: BookedType)=>{},
    removeBookedList: (id: String)=>{}
});

export const ContextProvider = ({children}: PropsWithChildren)=>{
    const [user, setUser] = useState();
    const [bookedList, setBookedList] = useState<BookedType[]>([]);
    const addBookedList = (item: BookedType) =>{
        setBookedList(prev=>[...prev, item]);
    }
    const removeBookedList = (id: String)=>{
        let newBookedList = bookedList;
        newBookedList = bookedList.filter(item=>item.id===id);
        setBookedList(newBookedList);
    }
    return <Context.Provider value={{
        user,
        setUser,
        bookedList,
        addBookedList,
        removeBookedList,
    }}>
        {children}
    </Context.Provider>
}