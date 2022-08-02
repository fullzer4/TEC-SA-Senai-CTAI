import { createContext, ReactNode, useState, useContext } from "react";
import { toast } from 'react-toastify';



type CalculosContextProps = { //configurar as props
    children: ReactNode;
}

const CalculosinitialValue ={  //definir o que ele ira receber
    classSC: ("cont-calc desativado"),
    verClickCalc1: () => {},
    verClickCalc2: () => {},
    verClickCalc3: () => {},
    verClickCalc4: () => {},
    verClickCalc5: () => {},
    verClickCalc6: () => {},
    verClickCalc7: () => {},
    verClickCalc8: () => {},
    verClickCalc9: () => {},
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

var historico:any = [];

export const CalculosContext = createContext<any>(CalculosinitialValue)

export const CalculosProvider = ({ children }: CalculosContextProps) => {
    const [classSC, setClassSC] = useState(CalculosinitialValue.classSC) //classSc = valor Principal setClassSC = definir o valor principal
    const [openCalc, setOpenCalc] = useState(CalculosinitialValue.openCalc)
    const [calcEsc, setCalcEsc] = useState(CalculosinitialValue.calcEsc)
    const [pc1Esc, setPc1Esc] = useState(CalculosinitialValue.pc1Esc)
    const [pc2Esc, setPc2Esc] = useState(CalculosinitialValue.pc2Esc)
    const [val1Esc, setVal1Esc] = useState(CalculosinitialValue.val1Esc)
    const [val2Esc, setVal2Esc] = useState(CalculosinitialValue.val2Esc)
    const [pcResult, setPcResult] = useState(CalculosinitialValue.pcResult)
    const [result, setResult] = useState(CalculosinitialValue.result)
    const [sendbd, setSendbd] = useState(0);
    const [selectLei1, setSelectLei1] = useState(false)
    const [selectLei2, setSelectLei2] = useState(false)
    const [selectEE, setSelectEE] = useState(false)
    const [selectRM, setSelectRM] = useState(false)
    const [selectTM, setSelectTM] = useState(false)
    const [selectEV, setSelectEV] = useState(false)
    const [selectTG, setSelectTG] = useState(false)
    const [selectEI, setSelectEI] = useState(false)
    const [selectVE, setSelectVE] = useState(false)
    var var1Tam = val1Esc.length
    var var2Tam = val2Esc.length
    var resultadoTam = result.length
    var var1 = parseInt(val1Esc)
    var var2 = parseInt(val2Esc)
    var resultadoBack = parseInt(result)
    const R = 8.31 //constante dos gases perfeitos

    function setHistorico(e:number){
        historico.push(e)
    }

    // TOAST MESSAGES

    function msgToast(e:number){
        if(e === 0){toast.error("todos os campos preenchidos")}
        if(e === 1){toast.error("verifique se os campos estão corretos e preenchidos")}
        if(e === 2){toast.error("calculo nao possivel ainda")}
        return;
    }

    // GET RESULT & STORAGE

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

    function changeTxt(i1:number, i2?:any, i3?:any, i4?:any, i5?:any, i6?:any){
        if(i1 === 0){
            setClassSC("cont-calc")
        }
        
        setCalcEsc(i2)
        setPc1Esc(i3)
        setPc2Esc(i4)
        setPcResult(i5)

        setOpenCalc(true)
    }

    // CALC LEI 1

    function lei1(){
        if(var1Tam > 0){
            if(var2Tam > 0){
                if(resultadoTam > 0){
                    msgToast(0)
                    return
                }
                resultadoBack = (var1 - var2)
                var teste:any = [resultadoBack, var1, var2, 1];
                newRes(teste, resultadoBack, 3);
                return
            }
            if(resultadoTam > 0){
                var2 = (var1 - resultadoBack)
                var teste:any = [resultadoBack, var1, var2, 1];
                newRes(teste, var2, 2);
                return
            }
        }if(var2Tam > 0){
            if(resultadoTam > 0){
                var1 = (resultadoBack + var2)
                var teste:any = [resultadoBack, var1, var2, 1];
                newRes(teste, var1, 1);
                return
            }
        }else{
            msgToast(1)
            return
        }
    }
    
    // CALC LEI 2

    function lei2(){
        if(var1Tam > 0){
            if(var2Tam > 0){
                if(resultadoTam > 0){
                    msgToast(0)
                    return
                }
                resultadoBack = (var1 + var2)
                var teste:any = [resultadoBack, var1, var2, 2];
                newRes(teste, resultadoBack, 3);
                return
            }
            if(resultadoTam > 0){
                var2 = (resultadoBack - var1)
                var teste:any = [resultadoBack, var1, var2, 2];
                newRes(teste, var2, 2);
                return
            }
        }if(var2Tam > 0){
            if(resultadoTam > 0){
                var1 = (resultadoBack - var2)
                var teste:any = [resultadoBack, var1, var2, 2];
                newRes(teste, var1, 1);
                return
            }
        }else{
            msgToast(1)
            return
        }
    }

    // CALC EFICIENCIA ENERGETICA

    function EE(){
        if(var1Tam > 0){
            if(var2Tam > 0){
                if(resultadoTam > 0){
                    msgToast(0)
                    return
                }
                resultadoBack = (var1 / var2)
                var teste:any = [resultadoBack, var1, var2, 3];
                newRes(teste, resultadoBack, 3);
                return
            }
            if(resultadoTam > 0){
                var2 = (var1 / resultadoBack)
                var teste:any = [resultadoBack, var1, var2, 3];
                newRes(var2, resultadoBack, 2);
                return
            }
        }if(var2Tam > 0){
            if(resultadoTam > 0){
                var1 = (resultadoBack * var2)
                var teste:any = [resultadoBack, var1, var2, 3];
                newRes(var1, resultadoBack, 1);
                return
            }
        }else{
            msgToast(1)
            return
        }
    }

    // CALC RENDIMENTO MAQUINA TERMICA

    function RM(){
        if(var1Tam > 0){
            if(var2Tam > 0){
                if(resultadoTam > 0){
                    msgToast(0)
                    return
                }
                resultadoBack = (var1 / var2 - 1)
                var teste:any = [resultadoBack, var1, var2, 4];
                newRes(teste, resultadoBack, 3);
                return
            }
            if(resultadoTam > 0){
                var2 = (var1 / (resultadoBack + 1))
                var teste:any = [resultadoBack, var1, var2, 4];
                newRes(teste, var2, 2);
                return
            }
        }if(var2Tam > 0){
            if(resultadoTam > 0){
                var1 = ((resultadoBack + 1) * var2)
                var teste:any = [resultadoBack, var1, var2, 4];
                newRes(teste, var1, 1);
                return
            }
        }else{
            msgToast(1)
            return
        }
    }

    //^ finalizados pra cima ^

    // TRABALHO MAQUINA TERMICA

    function TM(){
        if(var1Tam > 0){
            if(var2Tam > 0){
                if(resultadoTam > 0){
                    msgToast(0)
                    return
                }
                resultadoBack = (var1 - var2)
                var teste:any = [resultadoBack, var1, var2, 5];
                newRes(teste, resultadoBack, 3);
                return
            }
            if(resultadoTam > 0){
                var2 = (var1 - resultadoBack)
                var teste:any = [resultadoBack, var1, var2, 5];
                newRes(teste, var2, 2);
                return
            }
        }if(var2Tam > 0){
            if(resultadoTam > 0){
                var1 = (resultadoBack + var2)
                var teste:any = [resultadoBack, var1, var2, 5];
                newRes(teste, var1, 1);
                return
            }
        }else{
            msgToast(1)
            return
        }
    }

    // ENERGIA INTERNA VOLUME

    function EV(){
        if(var1Tam > 0){
            if(var2Tam > 0){
                if(resultadoTam > 0){
                    msgToast(0)
                    return
                }
                resultadoBack = (3/2) * (var1 * var2)
                var teste:any = [resultadoBack, var1, var2, 6];
                newRes(teste, resultadoBack, 3);
                return
            }
            if(resultadoTam > 0){
                var2 = ((3/2) * var1) / resultadoBack
                var teste:any = [resultadoBack, var1, var2, 6];
                newRes(teste, var2, 2);
                return
            }
        }if(var2Tam > 0){
            if(resultadoTam > 0){
                var1 = ((3/2) * resultadoBack) / var2
                var teste:any = [resultadoBack, var1, var2, 6];
                newRes(teste, var1, 1);
                return
            }
        }else{
            msgToast(1)
            return
        }
    }

    // CALC GAS SOB PRESSAO CONSTANTE

    function TG(){
        if(var1Tam > 0){
            if(var2Tam > 0){
                if(resultadoTam > 0){
                    msgToast(0)
                    return
                }
                resultadoBack = (var1 * var2)
                var teste:any = [resultadoBack, var1, var2, 7];
                newRes(teste, resultadoBack, 3);
                return
            }
            if(resultadoTam > 0){
                var2 = (resultadoBack / var1)
                var teste:any = [resultadoBack, var1, var2, 7];
                newRes(teste, var2, 2);
                return
            }
        }if(var2Tam > 0){
            if(resultadoTam > 0){
                var1 = (resultadoBack / var2)
                var teste:any = [resultadoBack, var1, var2, 7];
                newRes(teste, var1, 1);
                return
            }
        }else{
            msgToast(1)
            return
        }
    }

    // CALC ENERGIA INTERNA E TEMPERATURA

    function EI(){
        if(var1Tam > 0){
            if(var2Tam > 0){
                if(resultadoTam > 0){
                    msgToast(0)
                    return
                }
                resultadoBack = (3/2) * (var1 * R *var2)
                var teste:any = [resultadoBack, var1, var2, 8];
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

    // CALC VARIACAO ENERGIA INTERNA

    function VE(){
        if(var1Tam > 0){
            if(var2Tam > 0){
                if(resultadoTam > 0){
                    msgToast(0)
                    return
                }
                resultadoBack = (3/2) * (var1 * R *var2)
                var teste:any = [resultadoBack, var1, var2, 9];
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

    // VERIFICAR LEI ABERTA

    function verificarLei(){
        if (selectLei1){lei1()} //1
        if (selectLei2){lei2()} //2
        if (selectEE){EE()} //3
        if (selectRM){RM()} //4
        if (selectTM){TM()} //5
        if (selectEV){EV()} //6
        if (selectTG){TG()} //7
        if (selectEI){EI()} //8
        if (selectVE){VE()} //9
        return
    }

    // LIMPEZA PADRAO

    function defClear(){
        setCalcEsc("")
        setClassSC("cont-calc desativado")
        setPc1Esc("")
        setPc2Esc("")
        setPcResult("")
        setVal1Esc("")
        setVal2Esc("")
        setResult("")

        setSelectLei1(false)
        setSelectLei2(false)
        setSelectEE(false)
        setSelectRM(false)
        setSelectTM(false)
        setSelectEV(false)
        setSelectTG(false)
        setSelectEI(false)
        setSelectVE(false)

        setOpenCalc(false)
    }

    function verClickCalc1(){
        setSendbd(1);
        if(!openCalc){
            changeTxt(0,"1 Lei Termodinamica","Q (jaule)","T (jaule)","ΔU (jaule)");
            setSelectLei1(true)
            return true;
        }      
    }

    function verClickCalc2(){
        setSendbd(2);
        if(!openCalc){
            changeTxt(0,"2 Lei Termodinamica","Q (jaule)","T (jaule)","ΔU (jaule)");
            setSelectLei2(true)
            return true;
        } 
    }

    function verClickCalc3(){
        setSendbd(3);
        if(!openCalc){
            changeTxt(0,"Eficiencia Energetica","T (jaule)","Q1 (jaule)","E (jaule)");
            setSelectEE(true)
            return true;
        }   
    }

    function verClickCalc4(){
        setSendbd(4);
        if(!openCalc){
            changeTxt(0,"Rendimento Maquina Termica","Qa (jaule)","Qr (jaule)","N (jaule)");
            setSelectRM(true)
            return true;
        }   
    }

    function verClickCalc5(){
        setSendbd(5);
        if(!openCalc){
            changeTxt(0,"Trabalho Maquina Termica","Qa (jaule)","Qr (jaule)","T (jaule)");
            setSelectTM(true)
            return true;
        }         
    }
    function verClickCalc6(){
        setSendbd(6);
        if(!openCalc){
            changeTxt(0,"Energia Interna Volume","p (jaule)","V (jaule)","U (jaule)");
            setSelectEV(true)
            return true;
        }     
    }
    function verClickCalc7(){
        setSendbd(7);
        if(!openCalc){
            changeTxt(0,"Trabalho de um Gás Sob Pressão Constante","p (jaule)","ΔV (jaule)","T (jaule)");
            setSelectTG(true)
            return true;
        }       
    }
    function verClickCalc8(){
        setSendbd(8);
        if(!openCalc){
            changeTxt(0,"Energia Interna Temperatura","n (jaule)","T (jaule)","U (jaule)");
            setSelectEI(true)
            return true;
        }       
    }
    function verClickCalc9(){
        setSendbd(9);
        if(!openCalc){
            changeTxt(0,"Variação de Energia Interna","n (jaule)","ΔT (jaule)","ΔU (jaule)");
            setSelectVE(true)
            return true;
        }   
    }
    function verClickSair(){
        defClear();
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
            verClickCalc1,
            verClickCalc2,
            verClickCalc3,
            verClickCalc4,
            verClickCalc5,
            verClickCalc6,
            verClickCalc7,
            verClickCalc8,
            verClickCalc9,
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
            sendbd,
            verificarLei,
            setResult,
            verClickSair,
            limpar,
            historico
            }}> 
            {children}
        </CalculosContext.Provider>
    )
}