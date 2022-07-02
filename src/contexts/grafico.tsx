import { createContext, ReactNode, useState } from "react";
import firebase from "../services/databseConnection"

type GraficoContextProps = { //configurar as props
    children: ReactNode;
}

type GraficoContextType ={ //tipo
    getDadosFB: () => void;
    envDadosFB: (newState: number) => void
}

const GraficoinitialValue ={  //definir o que ele ira receber
    getDadosFB: () => {},
    envDadosFB: () => {},
}

export const GraficoContext = createContext<GraficoContextType>(GraficoinitialValue)

export const GraficoProvider = ({ children }: GraficoContextProps) => {

    async function getDadosFB(){
        var Contagem:any = []
        var leis: any = ["1 Lei", "2 Lei", "Efic Energ", "Rend Maq", "Trab Maq", "Energ Int V", "Trab Gas P", "Energ Int T", "Varia Int", "Trab Gas T"];

        for(let i in leis){
            await firebase.firestore().collection('Calculos')
            .doc(leis[i])
            .get()
            .then((snapshot)=>{
                Contagem.push(JSON.parse(JSON.stringify(snapshot.data())))
            })
        }

        return Contagem;
               
    }

    async function envDadosFB(calculo:number) {
        if(calculo === 1){
            
        }
    }

    return(
        <GraficoContext.Provider value={{
            getDadosFB,
            envDadosFB,
            }}> 
            {children}
        </GraficoContext.Provider>
    )
}