import { createContext, ReactNode, useState } from "react";
import { toast } from 'react-toastify';

type CalculosContextProps = { //configurar as props
    children: ReactNode;
}

type CalculosContextType ={ //tipo
    classSC: string;
    classGST: string;
    verClickCalc1: () => void;
    verClickCalc2: () => void;
    verClickCalc3: () => void;
    verClickCalc4: () => void; 
    verClickCalc5: () => void;
    verClickCalc6: () => void;
    verClickCalc7: () => void;
    verClickCalc8: () => void;
    verClickCalc9: () => void;
    verClickCalc10: () => void;
    openCalc: boolean;
    calcEsc: string;
    pc1Esc: string;
    pc2Esc: string;
    pc3Esc: string;
    pcResult: string;
    val1Esc: string;
    setVal1Esc: (newState: string) => void;
    val2Esc: string;
    setVal2Esc: (newState: string) => void;
    val3Esc: string;
    setVal3Esc: (newState: string) => void;
    result: string;
    setResult: (newState: string) => void;
    verificarLei: () => void;
    verClickSair: () => void;
    limpar: () => void;
}

const CalculosinitialValue ={  //definir o que ele ira receber
    classSC: ("show-calculo desativado"),
    classGST: ("show-calculo-gas desativado"),
    verClickCalc1: () => {},
    verClickCalc2: () => {},
    verClickCalc3: () => {},
    verClickCalc4: () => {},
    verClickCalc5: () => {},
    verClickCalc6: () => {},
    verClickCalc7: () => {},
    verClickCalc8: () => {},
    verClickCalc9: () => {},
    verClickCalc10: () => {},
    openCalc: false,
    calcEsc: (""),
    pc1Esc: (""),
    pc2Esc: (""),
    pc3Esc: (""),
    pcResult: (""),
    val1Esc: (""),
    setVal1Esc: () => {},
    val2Esc: (""),
    setVal2Esc: () => {},
    val3Esc: (""),
    setVal3Esc: () => {},
    result: (""),
    setResult: () => {},
    verificarLei: () => {},
    verClickSair: () => {},
    limpar: () => {},
}

var historico:any = [];

export const CalculosContext = createContext<CalculosContextType>(CalculosinitialValue)

export const CalculosProvider = ({ children }: CalculosContextProps) => {
    const [classSC, setClassSC] = useState(CalculosinitialValue.classSC) //classSc = valor Principal setClassSC = definir o valor principal
    const [classGST, setClassGST] = useState(CalculosinitialValue.classGST)
    const [openCalc, setOpenCalc] = useState(CalculosinitialValue.openCalc)
    const [calcEsc, setCalcEsc] = useState(CalculosinitialValue.calcEsc)
    const [pc1Esc, setPc1Esc] = useState(CalculosinitialValue.pc1Esc)
    const [pc2Esc, setPc2Esc] = useState(CalculosinitialValue.pc2Esc)
    const [pc3Esc, setPc3Esc] = useState(CalculosinitialValue.pc3Esc)
    const [val1Esc, setVal1Esc] = useState(CalculosinitialValue.val1Esc)
    const [val2Esc, setVal2Esc] = useState(CalculosinitialValue.val2Esc)
    const [val3Esc, setVal3Esc] = useState(CalculosinitialValue.val3Esc)
    const [pcResult, setPcResult] = useState(CalculosinitialValue.pcResult)
    const [result, setResult] = useState(CalculosinitialValue.result)
    const [selectLei1, setSelectLei1] = useState(false)
    const [selectLei2, setSelectLei2] = useState(false)
    const [selectEE, setSelectEE] = useState(false)
    const [selectRM, setSelectRM] = useState(false)
    const [selectTM, setSelectTM] = useState(false)
    const [selectEV, setSelectEV] = useState(false)
    const [selectTG, setSelectTG] = useState(false)
    const [selectEI, setSelectEI] = useState(false)
    const [selectVE, setSelectVE] = useState(false)
    const [selectTC, setSelectTC] = useState(false)
    var var1Tam = val1Esc.length
    var var2Tam = val2Esc.length
    var var3Tam = val3Esc.length
    var resultadoTam = result.length
    var var1 = parseInt(val1Esc)
    var var2 = parseInt(val2Esc)
    var var3 = parseInt(val3Esc)
    var resultadoBack = parseInt(result)
    const R = 8.31 //constante dos gases perfeitos
    

    function setHistorico(e:number){
        historico.push(e)
        console.log(historico);
        
    }

    function msgToast(e:number){
        if(e === 0){toast.error("todos os campos preenchidos")}
        if(e === 1){toast.error("verifique se os campos estão corretos e preenchidos")}
        if(e === 2){toast.error("calculo nao possivel ainda")}
        return;
    }

    function newRes(e:number, res:number, tip:number){
        if(tip === 1){
            setVal1Esc(String(res))
            setHistorico(e);
        }
        if(tip === 2){
            setVal2Esc(String(res))
            setHistorico(e);
        }
        if(tip === 3){
            setResult(String(res))
            setHistorico(e);
        }
        return;
    }

    function lei1(){
        if(var1Tam > 0){
            if(var2Tam > 0){
                if(resultadoTam > 0){
                    msgToast(0)
                    return
                }
                resultadoBack = (var1 - var2)
                var teste:any = [resultadoBack, var1, var2];
                newRes(teste, resultadoBack, 3);
                return
            }
            if(resultadoTam > 0){
                var2 = (var1 - resultadoBack)
                var teste:any = [resultadoBack, var1, var2];
                newRes(teste, var2, 2);
                return
            }
        }if(var2Tam > 0){
            if(resultadoTam > 0){
                var1 = (resultadoBack + var2)
                var teste:any = [resultadoBack, var1, var2];
                newRes(teste, var1, 1);
                return
            }
        }else{
            msgToast(1)
            return
        }
    }

    function lei2(){
        if(var1Tam > 0){
            if(var2Tam > 0){
                if(resultadoTam > 0){
                    msgToast(0)
                    return
                }
                resultadoBack = (var1 + var2)
                var teste:any = [resultadoBack, var1, var2];
                newRes(teste, resultadoBack, 3);
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
            msgToast(1)
            return
        }
    }

    function EE(){
        if(var1Tam > 0){
            if(var2Tam > 0){
                if(resultadoTam > 0){
                    msgToast(0)
                    return
                }
                resultadoBack = (var1 / var2)
                var teste:any = [resultadoBack, var1, var2];
                newRes(teste, resultadoBack, 3);
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
            msgToast(1)
            return
        }
    }

    function RM(){
        if(var1Tam > 0){
            if(var2Tam > 0){
                if(resultadoTam > 0){
                    msgToast(0)
                    return
                }
                resultadoBack = ((var1 / var2 - 1) * 100)
                var teste:any = [resultadoBack, var1, var2];
                newRes(teste, resultadoBack, 3);
                return
            }
            if(resultadoTam > 0){
                msgToast(2) //fazer
                return
            }
        }if(var2Tam > 0){
            if(resultadoTam > 0){
                msgToast(2) //fazer
                return
            }
        }else{
            msgToast(1)
            return
        }
    }

    //^ finalizados pra cima ^

    function TM(){
        if(var1Tam > 0){
            if(var2Tam > 0){
                if(resultadoTam > 0){
                    msgToast(0)
                    return
                }
                resultadoBack = (var1 - var2)
                var teste:any = [resultadoBack, var1, var2];
                newRes(teste, resultadoBack, 3);
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
            msgToast(1)
            return
        }
    }

    function EV(){
        if(var1Tam > 0){
            if(var2Tam > 0){
                if(resultadoTam > 0){
                    msgToast(0)
                    return
                }
                resultadoBack = (var1 - var2)
                var teste:any = [resultadoBack, var1, var2];
                newRes(teste, resultadoBack, 3);
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
            msgToast(1)
            return
        }
    }

    function TG(){
        if(var1Tam > 0){
            if(var2Tam > 0){
                if(resultadoTam > 0){
                    msgToast(0)
                    return
                }
                resultadoBack = (var1 - var2)
                var teste:any = [resultadoBack, var1, var2];
                newRes(teste, resultadoBack, 3);
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
            msgToast(1)
            return
        }
    }

    function EI(){
        if(var1Tam > 0){
            if(var2Tam > 0){
                if(resultadoTam > 0){
                    msgToast(0)
                    return
                }
                resultadoBack = (var1 - var2)
                var teste:any = [resultadoBack, var1, var2];
                newRes(teste, resultadoBack, 3);
                return
            }
            if(resultadoTam > 0){
                var2 = (var1 - resultadoBack)
                var teste:any = [resultadoBack, var1, var2];
                newRes(teste, var2, 2);
                return
            }
        }if(var2Tam > 0){
            if(resultadoTam > 0){
                var1 = (resultadoBack + var2)
                var teste:any = [resultadoBack, var1, var2];
                newRes(teste, var1, 1);
                return
            }
        }else{
            msgToast(1)
            return
        }
    }

    function VE(){
        if(var1Tam > 0){
            if(var2Tam > 0){
                if(resultadoTam > 0){
                    msgToast(0)
                    return
                }
                resultadoBack = (var1 - var2)
                var teste:any = [resultadoBack, var1, var2];
                newRes(teste, resultadoBack, 3);
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
            msgToast(1)
            return
        }
    }

    function TC(){
        if(var1Tam > 0){
            if(var2Tam > 0){
                if(resultadoTam > 0){
                    msgToast(0)
                    return
                }
                resultadoBack = (var1 - var2)
                var teste:any = [resultadoBack, var1, var2];
                newRes(teste, resultadoBack, 3);
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
            msgToast(1)
            return
        }
    }

    // finalizados para baixo :)

    function verificarLei(){
        if (selectLei1){lei1()}
        if (selectLei2){lei2()}
        if (selectEE){EE()}
        if (selectRM){RM()}
        if (selectTM){TM()}
        if (selectEV){EV()}
        if (selectTG){TG()}
        if (selectEI){EI()}
        if (selectVE){VE()}
        if (selectTC){TC()}
        return
    }

    function defClear(){
        setCalcEsc("")
        setClassSC("show-calculo desativado")
        setClassGST("show-calculo-gas desativado")
        setPc1Esc("")
        setPc2Esc("")
        setPc3Esc("")
        setPcResult("")
        setVal1Esc("")
        setVal2Esc("")
        setVal3Esc("")
        setResult("")
    }

    function verClickCalc1(){
        if(!openCalc){
            setOpenCalc(true)
            setClassSC("show-calculo")
            setCalcEsc("1 Lei Termodinamica")
            setPc1Esc("Q (jaule)")
            setPc2Esc("T (jaule)")
            setPcResult("ΔU (jaule)")
            setSelectLei1(true)
            return true;
        } else {
            setOpenCalc(false)
            setSelectLei1(false)
            defClear()
            return;
        }         
    }

    function verClickCalc2(){
        if(!openCalc){
            setOpenCalc(true)
            setClassSC("show-calculo")
            setCalcEsc("2 Lei Termodinamica")
            setPc1Esc("Q (jaule)")
            setPc2Esc("T (jaule)")
            setPcResult("ΔU (jaule)")
            setSelectLei2(true)
            return true;
        } else {
            setOpenCalc(false)
            setSelectLei2(false)
            defClear();
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
            setSelectEE(false)
            defClear()
            return false;
        }         
    }

    function verClickCalc4(){
        if(!openCalc){
            setOpenCalc(true)
            setClassSC("show-calculo")
            setCalcEsc("Rendimento Maquina Termica")
            setPc1Esc("Qa (jaule)")
            setPc2Esc("Qr (jaule)")
            setPcResult("N (jaule)")
            setSelectRM(true)
            return true;
        } else {
            setOpenCalc(false)
            setSelectRM(false)
            defClear()
            return false;
        }         
    }

    function verClickCalc5(){
        if(!openCalc){
            setOpenCalc(true)
            setClassSC("show-calculo")
            setCalcEsc("Trabalho Maquina Termica")
            setPc1Esc("Qa (jaule)")
            setPc2Esc("Qr (jaule)")
            setPcResult("T (jaule)")
            setSelectTM(true)
            return true;
        } else {
            setOpenCalc(false)
            setSelectTM(false)
            defClear()
            return false;
        }         
    }
    function verClickCalc6(){
        if(!openCalc){
            setOpenCalc(true)
            setClassSC("show-calculo")
            setCalcEsc("Energia Interna Volume")
            setPc1Esc("V (jaule)")
            setPc2Esc("p (jaule)")
            setPcResult("U (jaule)")
            setSelectEV(true)
            return true;
        } else {
            setOpenCalc(false)
            setSelectEV(false)
            defClear()
            return false;
        }         
    }
    function verClickCalc7(){
        if(!openCalc){
            setOpenCalc(true)
            setClassSC("show-calculo")
            setCalcEsc("Trabalho de um Gás Sob Pressão Constante")
            setPc1Esc("p (jaule)")
            setPc2Esc("ΔV (jaule)")
            setPcResult("T (jaule)")
            setSelectTG(true)
            return true;
        } else {
            setOpenCalc(false)
            setSelectTG(false)
            defClear()
            return false;
        }         
    }
    function verClickCalc8(){
        if(!openCalc){
            setOpenCalc(true)
            setClassSC("show-calculo")
            setCalcEsc("Energia Interna Temperatura")
            setPc1Esc("n (jaule)")
            setPc2Esc("R (jaule)")
            setPcResult("T (jaule)")
            setSelectEI(true)
            return true;
        } else {
            setOpenCalc(false)
            setSelectEI(false)
            defClear()
            return false;
        }         
    }
    function verClickCalc9(){
        if(!openCalc){
            setOpenCalc(true)
            setClassSC("show-calculo")
            setCalcEsc("Variação de Energia Interna")
            setPc1Esc("n (jaule)")
            setPc2Esc("ΔT (jaule)")
            setPcResult("ΔU (jaule)")
            setSelectVE(true)
            return true;
        } else {
            setOpenCalc(false)
            setSelectVE(false)
            defClear()
            return false;
        }         
    }
    function verClickCalc10(){
        if(!openCalc){
            setOpenCalc(true)
            setClassGST("show-calculo-gas")
            setCalcEsc("Trabalho de um Gás Sob Temperatura Constante")
            setPc1Esc("n (jaule)")
            setPc2Esc("T (jaule)")
            setPc3Esc("V1 (jaule)")
            setPcResult("V2 (jaule)")
            setSelectTC(true)
            return true;
        } else {
            setOpenCalc(false)
            setSelectTC(false)
            defClear()
            return false;
        }         
    }

    function verClickSair(){
        if(selectLei1){verClickCalc1()}
        if(selectLei2){verClickCalc2()}
        if(selectEE){verClickCalc3()}
        if(selectRM){verClickCalc4()}
        if(selectTM){verClickCalc5()}
        if(selectEV){verClickCalc6()}
        if(selectTG){verClickCalc7()}
        if(selectEI){verClickCalc8()}
        if(selectVE){verClickCalc9()}
        if(selectTC){verClickCalc10()}
        return
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
            classGST,
            verClickCalc1,
            verClickCalc2,
            verClickCalc3,
            verClickCalc4,
            verClickCalc5,
            verClickCalc6,
            verClickCalc7,
            verClickCalc8,
            verClickCalc9,
            verClickCalc10,
            openCalc,
            calcEsc,
            pc1Esc,
            pc2Esc,
            pc3Esc,
            pcResult,
            val1Esc,
            setVal1Esc,
            val2Esc,
            setVal2Esc,
            val3Esc,
            setVal3Esc,
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