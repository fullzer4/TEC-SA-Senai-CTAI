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
        await firebase.firestore().collection('Calculos')
        .doc("1 Lei")
        .get()
        .then((snapshot)=>{
            Contagem.push(JSON.parse(JSON.stringify(snapshot.data())))
        })
        await firebase.firestore().collection('Calculos')
        .doc("2 Lei")
        .get()
        .then((snapshot)=>{
            Contagem.push(JSON.parse(JSON.stringify(snapshot.data())))
        })
        await firebase.firestore().collection('Calculos')
        .doc("Efic Energ")
        .get()
        .then((snapshot)=>{
            Contagem.push(JSON.parse(JSON.stringify(snapshot.data())))
        })
        await firebase.firestore().collection('Calculos')
        .doc("Rend Maq")
        .get()
        .then((snapshot)=>{
            Contagem.push(JSON.parse(JSON.stringify(snapshot.data())))
        })
        await firebase.firestore().collection('Calculos')
        .doc("Trab Maq")
        .get()
        .then((snapshot)=>{
            Contagem.push(JSON.parse(JSON.stringify(snapshot.data())))
        })
        await firebase.firestore().collection('Calculos')
        .doc("Energ Int V")
        .get()
        .then((snapshot)=>{
            Contagem.push(JSON.parse(JSON.stringify(snapshot.data())))
        })
        await firebase.firestore().collection('Calculos')
        .doc("Trab Gas P")
        .get()
        .then((snapshot)=>{
            Contagem.push(JSON.parse(JSON.stringify(snapshot.data())))
        })
        await firebase.firestore().collection('Calculos')
        .doc("Energ Int T")
        .get()
        .then((snapshot)=>{
            Contagem.push(JSON.parse(JSON.stringify(snapshot.data())))
        })
        await firebase.firestore().collection('Calculos')
        .doc("Varia Int")
        .get()
        .then((snapshot)=>{
            Contagem.push(JSON.parse(JSON.stringify(snapshot.data())))
        })
        await firebase.firestore().collection('Calculos')
        .doc("Trab Gas T")
        .get()
        .then((snapshot)=>{
            Contagem.push(JSON.parse(JSON.stringify(snapshot.data())))
        })
        .then(()=>{
            console.log(Contagem);
        })
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