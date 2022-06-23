import { createContext, ReactNode, useState } from "react";

type CalculosContextProps = { //configurar as props
    children: ReactNode;
}

type CalculosContextType ={ //tipo
    isOpenModal: boolean;
    setIsOpenModal: (newState: boolean) => void;
    classSC: string;
    verClickCalc: () => void;
    openCalc: boolean;
}

const CalculosinitialValue ={  //definir o que ele ira receber
    isOpenModal: false,
    setIsOpenModal: () => {},
    classSC: ("show-calculo desativado"),
    verClickCalc: () => {},
    openCalc: false, 
}

export const CalculosContext = createContext<CalculosContextType>(CalculosinitialValue)

export const CalculosProvider = ({ children }: CalculosContextProps) => {
    const [isOpenModal, setIsOpenModal] = useState(CalculosinitialValue.isOpenModal)
    const [classSC, setClassSC] = useState(CalculosinitialValue.classSC)
    const [openCalc, setOpenCalc] = useState(CalculosinitialValue.openCalc)

    function verClickCalc(){
        if(openCalc === false){
            setOpenCalc(true)
            setClassSC("show-calculo")
        }if(openCalc === true){
            setOpenCalc(false)
            setClassSC("show-calculo desativado")
        }else{
            console.log("erro backend");
        }
    }

    return(
        <CalculosContext.Provider value={{
            isOpenModal,
            setIsOpenModal,
            classSC,
            verClickCalc,
            openCalc,
            }}> 
            {children}
        </CalculosContext.Provider>
    )
}