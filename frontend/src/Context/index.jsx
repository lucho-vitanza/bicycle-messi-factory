import {  useContext, createContext, useState } from 'react';


export const ShoppingCardContext = createContext()

export const ShoppingCardProvider = ({Children}) => {
    const [count, setCount] = useState(0)
    // console.log('COUNT: ', count)

    return (
        <ShoppingCardContext.Provider value={{
            count,
            setCount
        }}>
             {Children}
        </ShoppingCardContext.Provider>
    )
}