import { createContext, ReactNode, useState } from "react";

type CalculosContextProps = { //configurar as props
    children: ReactNode;
}

type CalculosContextType ={ //tipo
    isOpenModal: boolean;
    setIsOpenModal: (newState: boolean) => void;
}

const CalculosinitialValue ={  //definir o que ele ira receber
    isOpenModal: false,
    setIsOpenModal: () => {},
}

export const CalculosContext = createContext<CalculosContextType>(CalculosinitialValue)

export const CalculosProvider = ({ children }: CalculosContextProps) => {
    const [isOpenModal, setIsOpenModal] = useState(CalculosinitialValue.isOpenModal)

    return(
        <CalculosContext.Provider value={{
            isOpenModal,
            setIsOpenModal,
            }}> 
            {children}
        </CalculosContext.Provider>
    )
}