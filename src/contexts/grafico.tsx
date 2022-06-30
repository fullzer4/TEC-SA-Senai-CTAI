import { createContext, ReactNode, useState } from "react";
import firebase from "../services/databseConnection"

type GraficoContextProps = { //configurar as props
    children: ReactNode;
}

type GraficoContextType ={ //tipo
    getDadosFB: () => void;
}

const GraficoinitialValue ={  //definir o que ele ira receber
    getDadosFB: () => {},
}

export const GraficoContext = createContext<GraficoContextType>(GraficoinitialValue)

export const GraficoProvider = ({ children }: GraficoContextProps) => {
    const CalculosAll = []

    async function getDadosFB(){
        await firebase.firestore().collection("Calculos").onSnapshot((doc)=>{
            doc.forEach((item)=>{
                console.log(item);
              })
        })
    }

    async function envDadosFB(calculo:number) {
        if(calculo === 1){
            await firebase.firestore().collection("Calculos").doc("Lei1").onSnapshot({

            })
        }
    }

    return(
        <GraficoContext.Provider value={{
            getDadosFB
            }}> 
            {children}
        </GraficoContext.Provider>
    )
}