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
    termo1: () => void;
    calcEsc: string;
    pc1Esc: string;
    pc2Esc: string;
    pcResult: string;
    val1Esc: string;
    setVal1Esc: (newState: string) => void;
    val2Esc: string;
    setVal2Esc: (newState: string) => void;
    result: string;
}

const CalculosinitialValue ={  //definir o que ele ira receber
    isOpenModal: false,
    setIsOpenModal: () => {},
    classSC: ("show-calculo desativado"),
    verClickCalc1: () => {},
    verClickCalc2: () => {},
    openCalc: false, 
    termo1: () => {},
    calcEsc: (""),
    pc1Esc: (""),
    pc2Esc: (""),
    pcResult: (""),
    val1Esc: (""),
    setVal1Esc: () => {},
    val2Esc: (""),
    setVal2Esc: () => {},
    result: (""),
}

export const CalculosContext = createContext<CalculosContextType>(CalculosinitialValue)

export const CalculosProvider = ({ children }: CalculosContextProps) => {
    const [isOpenModal, setIsOpenModal] = useState(CalculosinitialValue.isOpenModal)
    const [classSC, setClassSC] = useState(CalculosinitialValue.classSC)
    const [openCalc, setOpenCalc] = useState(CalculosinitialValue.openCalc)
    const [calcEsc, setCalcEsc] = useState(CalculosinitialValue.calcEsc)
    const [pc1Esc, setPc1Esc] = useState(CalculosinitialValue.pc1Esc)
    const [val1Esc, setVal1Esc] = useState(CalculosinitialValue.val1Esc)
    const [val2Esc, setVal2Esc] = useState(CalculosinitialValue.val2Esc)
    const [pc2Esc, setPc2Esc] = useState(CalculosinitialValue.pc2Esc)
    const [pcResult, setPcResult] = useState(CalculosinitialValue.pcResult)
    const [result, setResult] = useState(CalculosinitialValue.result)

    function termo1(){
        var var1 = parseInt(val1Esc)
        var var2 = parseInt(val2Esc)
        var resultadoBack = (var1 - var2)
        console.log(resultadoBack);
        setResult(String(resultadoBack))
        console.log(result);
    }

    function verClickCalc1(){
        if(!openCalc){
            setOpenCalc(true)
            setVal1Esc("")
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
            setVal1Esc("")
            setVal2Esc("")
            setResult("")
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
            setVal1Esc("")
            setVal2Esc("")
            setResult("")
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
            pcResult,
            val1Esc,
            setVal1Esc,
            val2Esc,
            setVal2Esc,
            termo1,
            result
            }}> 
            {children}
        </CalculosContext.Provider>
    )
}