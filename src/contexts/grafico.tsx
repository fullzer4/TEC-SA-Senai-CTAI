import { createContext, ReactNode, useState } from "react";
import firebase from "../services/databseConnection"

export const GraficoContext = createContext<any>(()=>{})

export const GraficoProvider = ({ children }: any) => {
    
    async function getDadosFB(){
        var Contagem:any = []
        var leis: any = ["1 Lei", "2 Lei", "Efic Energ", "Rend Maq", "Trab Maq", "Energ Int V", "Trab Gas P", "Energ Int T", "Varia Int", "Trab Gas T"];

        for(let i in leis){
            await firebase.firestore().collection('Calculos')
            .doc(leis[i])
            .get()
            .then(snapshot =>{
                Contagem.push([leis[i], snapshot.data()])
            })
        }
        // console.log(Contagem)
        return Contagem;
    }

    async function envDadosFB(calculo:number) {
        if(calculo === 1){
            getDadosFB()
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