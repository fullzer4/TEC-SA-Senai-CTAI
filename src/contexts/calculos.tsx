import { createContext, ReactNode, useState } from "react";
import { toast } from 'react-toastify';

type CalculosContextProps = { //configurar as props
    children: ReactNode;
}

type CalculosContextType ={ //tipo
    classSC: string;
    verClickCalc1: () => void;
    verClickCalc2: () => void;
    verClickCalc3: () => void;
    openCalc: boolean;
    calcEsc: string;
    pc1Esc: string;
    pc2Esc: string;
    pcResult: string;
    val1Esc: string;
    setVal1Esc: (newState: string) => void;
    val2Esc: string;
    setVal2Esc: (newState: string) => void;
    result: string;
    setResult: (newState: string) => void;
    verificarLei: () => void;
    verClickSair: () => void;
    limpar: () => void;
}

const CalculosinitialValue ={  //definir o que ele ira receber
    classSC: ("show-calculo desativado"),
    verClickCalc1: () => {},
    verClickCalc2: () => {},
    verClickCalc3: () => {},
    openCalc: false, 
    calcEsc: (""),
    pc1Esc: (""),
    pc2Esc: (""),
    pcResult: (""),
    val1Esc: (""),
    setVal1Esc: () => {},
    val2Esc: (""),
    setVal2Esc: () => {},
    result: (""),
    setResult: () => {},
    verificarLei: () => {},
    verClickSair: () => {},
    limpar: () => {},
}

export const CalculosContext = createContext<CalculosContextType>(CalculosinitialValue)

export const CalculosProvider = ({ children }: CalculosContextProps) => {
    const [classSC, setClassSC] = useState(CalculosinitialValue.classSC)
    const [openCalc, setOpenCalc] = useState(CalculosinitialValue.openCalc)
    const [calcEsc, setCalcEsc] = useState(CalculosinitialValue.calcEsc)
    const [pc1Esc, setPc1Esc] = useState(CalculosinitialValue.pc1Esc)
    const [val1Esc, setVal1Esc] = useState(CalculosinitialValue.val1Esc)
    const [val2Esc, setVal2Esc] = useState(CalculosinitialValue.val2Esc)
    const [pc2Esc, setPc2Esc] = useState(CalculosinitialValue.pc2Esc)
    const [pcResult, setPcResult] = useState(CalculosinitialValue.pcResult)
    const [result, setResult] = useState(CalculosinitialValue.result)
    const [selectLei1, setSelectLei1] = useState(false)
    const [selectLei2, setSelectLei2] = useState(false)
    const [selectEE, setSelectEE] = useState(false)

    function lei1(){
        var var1Tam = val1Esc.length
        var var2Tam = val2Esc.length
        var resultadoTam = result.length
        var var1 = parseInt(val1Esc)
        var var2 = parseInt(val2Esc)
        var resultadoBack = parseInt(result)

        if(var1Tam > 0){
            if(var2Tam > 0){
                if(resultadoTam > 0){
                    toast.error("todos os campos preenchidos")
                    return
                }
                resultadoBack = (var1 - var2)
                setResult(String(resultadoBack))
                return
            }
            if(resultadoTam > 0){
                var2 = (var1 - resultadoBack)
                setVal2Esc(String(var2))
                return
            }
        }if(var2Tam > 0){
            if(resultadoTam > 0){
                var1 = (resultadoBack + var2)
                setVal1Esc(String(var1))
                return
            }
        }else{
            toast.error("verifique se os campos estão corretos e preenchidos")
            return
        }
    }

    function lei2(){
        var var1Tam = val1Esc.length
        var var2Tam = val2Esc.length
        var resultadoTam = result.length
        var var1 = parseInt(val1Esc)
        var var2 = parseInt(val2Esc)
        var resultadoBack = parseInt(result)

        if(var1Tam > 0){
            if(var2Tam > 0){
                if(resultadoTam > 0){
                    toast.error("todos os campos preenchidos")
                    return
                }
                resultadoBack = (var1 + var2)
                setResult(String(resultadoBack))
                return
            }
            if(resultadoTam > 0){
                var2 = (resultadoBack - var1)
                setVal2Esc(String(var2))
                return
            }
        }if(var2Tam > 0){
            if(resultadoTam > 0){
                var1 = (resultadoBack - var2)
                setVal1Esc(String(var1))
                return
            }
        }else{
            toast.error("verifique se os campos estão corretos e preenchidos")
            return
        }
    }

    function EE(){
        var var1Tam = val1Esc.length
        var var2Tam = val2Esc.length
        var resultadoTam = result.length
        var var1 = parseInt(val1Esc)
        var var2 = parseInt(val2Esc)
        var resultadoBack = parseInt(result)

        if(var1Tam > 0){
            if(var2Tam > 0){
                if(resultadoTam > 0){
                    toast.error("todos os campos preenchidos")
                    return
                }
                resultadoBack = (var1 / var2)
                setResult(String(resultadoBack))
                return
            }
            if(resultadoTam > 0){
                var2 = (var1 / resultadoBack)
                setVal2Esc(String(var2))
                return
            }
        }if(var2Tam > 0){
            if(resultadoTam > 0){
                var1 = (resultadoBack * var2)
                setVal1Esc(String(var1))
                return
            }
        }else{
            toast.error("verifique se os campos estão corretos e preenchidos")
            return
        }
    }

    function verificarLei(){
        if (selectLei1 === true){
            lei1()
            return
        }
        if (selectLei2 === true){
            lei2()
            return
        }
        if (selectEE === true){
            EE()
            return
        }else{
            console.log("error backend");
            return
        }
    }

    function verClickCalc1(){
        if(!openCalc){
            setOpenCalc(true)
            setVal1Esc("")
            setClassSC("show-calculo")
            setCalcEsc("1 Lei Termodinamica")
            setPc1Esc("Q (jaule)")
            setPc2Esc("T (jaule)")
            setPcResult("ΔU (jaule)")
            setSelectLei1(true)
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
            setSelectLei1(false)
            return;
        }         
    }

    function verClickCalc2(){
        if(!openCalc){
            setOpenCalc(true)
            setVal1Esc("")
            setClassSC("show-calculo")
            setCalcEsc("1 Lei Termodinamica")
            setPc1Esc("Q (jaule)")
            setPc2Esc("T (jaule)")
            setPcResult("ΔU (jaule)")
            setSelectLei2(true)
            return true;
        } else {
            setOpenCalc(false)
            setSelectLei2(false)
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

    function verClickCalc3(){
        if(!openCalc){
            setOpenCalc(true)
            setClassSC("show-calculo")
            setCalcEsc("Eficiencia Energetica")
            setPc1Esc("T (jaule)")
            setPc2Esc("Q1 (jaule)")
            setPcResult("E (jaule)")
            setSelectEE(true)
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
            setSelectEE(false)
            return false;
        }         
    }

    function verClickSair(){
        if(selectLei1 === true){
            verClickCalc1()
        }
        if(selectLei2 === true){
            verClickCalc2()
        }
        if(selectEE === true){
            verClickCalc3()
        }
    }

    function limpar(){
        setVal1Esc("")
        setVal2Esc("")
        setResult("")
        return
    }

    return(
        <CalculosContext.Provider value={{
            classSC,
            verClickCalc1,
            verClickCalc2,
            verClickCalc3,
            openCalc,
            calcEsc,
            pc1Esc,
            pc2Esc,
            pcResult,
            val1Esc,
            setVal1Esc,
            val2Esc,
            setVal2Esc,
            result,
            verificarLei,
            setResult,
            verClickSair,
            limpar
            }}> 
            {children}
        </CalculosContext.Provider>
    )
}