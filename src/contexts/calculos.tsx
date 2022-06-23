import { createContext, ReactNode, useState } from "react";

type CalculosContextProps = { //configurar as props
    children: ReactNode;
}

type CalculosContextType ={ //tipo
    isOpenModal: boolean;
    setIsOpenModal: (newState: boolean) => void;
    classSC: string;
    verClickCalc1: () => void;
    verClickCalc2: () => void;
    openCalc: boolean;
    calcEsc: string;
    pc1Esc: string;
    pc2Esc: string;
    pcResult: string;
}

const CalculosinitialValue ={  //definir o que ele ira receber
    isOpenModal: false,
    setIsOpenModal: () => {},
    classSC: ("show-calculo desativado"),
    verClickCalc1: () => {},
    verClickCalc2: () => {},
    openCalc: false, 
    calcEsc: (""),
    pc1Esc: (""),
    pc2Esc: (""),
    pcResult: (""),
}

export const CalculosContext = createContext<CalculosContextType>(CalculosinitialValue)

export const CalculosProvider = ({ children }: CalculosContextProps) => {
    const [isOpenModal, setIsOpenModal] = useState(CalculosinitialValue.isOpenModal)
    const [classSC, setClassSC] = useState(CalculosinitialValue.classSC)
    const [openCalc, setOpenCalc] = useState(CalculosinitialValue.openCalc)
    const [calcEsc, setCalcEsc] = useState(CalculosinitialValue.calcEsc)
    const [pc1Esc, setPc1Esc] = useState(CalculosinitialValue.pc1Esc)
    const [pc2Esc, setPc2Esc] = useState(CalculosinitialValue.pc2Esc)
    const [pcResult, setPcResult] = useState(CalculosinitialValue.pcResult)

    function verClickCalc1(){
        if(!openCalc){
            setOpenCalc(true)
            setClassSC("show-calculo")
            setCalcEsc("calculo1")
            setPc1Esc("variavel 1 do calculo1")
            setPc2Esc("variavel 2 do calculo1")
            setPcResult("resultado do calculo1")
            return true;
        } else {
            setOpenCalc(false)
            setCalcEsc("")
            setClassSC("show-calculo desativado")
            setPc1Esc("")
            setPc2Esc("")
            setPcResult("")
            return false;
        }         
    }

    function verClickCalc2(){
        if(!openCalc){
            setOpenCalc(true)
            setClassSC("show-calculo")
            setCalcEsc("calculo2")
            setPc1Esc("variavel 1 do calculo2")
            setPc2Esc("variavel 2 do calculo2")
            setPcResult("resultado do calculo2")
            return true;
        } else {
            setOpenCalc(false)
            setCalcEsc("")
            setClassSC("show-calculo desativado")
            setPc1Esc("")
            setPc2Esc("")
            setPcResult("")
            return false;
        }         
    }

    return(
        <CalculosContext.Provider value={{
            isOpenModal,
            setIsOpenModal,
            classSC,
            verClickCalc1,
            verClickCalc2,
            openCalc,
            calcEsc,
            pc1Esc,
            pc2Esc,
            pcResult
            }}> 
            {children}
        </CalculosContext.Provider>
    )
}