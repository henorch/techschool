import { createContext, useContext, useState } from "react";



const GeneContext = createContext();

const GeneContextProvider = ({children}) => {
    const [isOpen, setIsOpen] = useState(false)

    const value = {
        isOpen,
        setIsOpen
    }
    return (<GeneContext.Provider value={value}>
        {children}
    </GeneContext.Provider>)
}

const useGeneConsuner = () =>  useContext(GeneContext);

export { useGeneConsuner, GeneContext, GeneContextProvider}