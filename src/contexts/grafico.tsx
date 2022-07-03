import { createContext, ReactNode, useState } from "react";
import firebase from "../services/databseConnection"

export const GraficoContext = createContext<any>(()=>{})

export const GraficoProvider = ({ children }: any) => {
    var Contagem:any = []
    var calculos: any = ['leis']

    async function getDadosFB(){

        for(let i in calculos){
            await firebase.firestore().collection('Calculos')
            .doc(calculos[i])
            .get()
            .then(snapshot =>{
                Contagem.push([calculos[i], snapshot.data()])
            })
        }
        return Contagem;
    }


    async function envDadosFB(calculo:number) {
        var lista = Contagem[1] //lista pricipal
        var dados = lista[1] //dados da lista principal
        var setLei1 = dados.lei1 + 1
        var setLei2 = dados.lei2 + 1
        var setEficEnerg = dados.EficEnerg + 1
        var setRendMaq = dados.RendMaq + 1
        var setTrabMaq = dados.TrabMaq + 1
        var setEnergIntV = dados.EnergIntV + 1
        var setTrabGasP = dados.TrabGasP + 1
        var setEnergIntT = dados.EnergIntT + 1
        var setVariaInt = dados.VariaInt + 1
        var setTrabGasT = dados.TrabGasT + 1

        if(calculo === 1){
            await firebase.firestore().collection("Calculos").doc("leis").update({
                lei1: setLei1
            })
        }
        if(calculo === 2){
            await firebase.firestore().collection("Calculos").doc("leis").update({
                lei2: setLei2
            })
        }
        if(calculo === 3){
            await firebase.firestore().collection("Calculos").doc("leis").update({
                EficEnerg: setEficEnerg
            })
        }
        if(calculo === 4){
            await firebase.firestore().collection("Calculos").doc("leis").update({
                RendMaq: setRendMaq
            })
        }
        if(calculo === 5){
            await firebase.firestore().collection("Calculos").doc("leis").update({
                TrabMaq: setTrabMaq
            })
        }
        if(calculo === 6){
            await firebase.firestore().collection("Calculos").doc("leis").update({
                EnergIntV: setEnergIntV
            })
        }
        if(calculo === 7){
            await firebase.firestore().collection("Calculos").doc("leis").update({
                TrabGasP: setTrabGasP
            })
        }
        if(calculo === 8){
            await firebase.firestore().collection("Calculos").doc("leis").update({
                EnergIntT: setEnergIntT
            })
        }
        if(calculo === 9){
            await firebase.firestore().collection("Calculos").doc("leis").update({
                VariaInt: setVariaInt
            })
        }
        if(calculo === 10){
            await firebase.firestore().collection("Calculos").doc("leis").update({
                TrabGasT: setTrabGasT
            })
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