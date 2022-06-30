import { createContext, ReactNode, useState } from "react";
import firebase from "../services/databseConnection"

type GraficoContextProps = { //configurar as props
    children: ReactNode;
}

type GraficoContextType ={ //tipo
    getDadosFB: (newState: number) => void;
    envDadosFB: (newState: number) => void;
}

const GraficoinitialValue ={  //definir o que ele ira receber
    getDadosFB: () => {},
    envDadosFB: () => {},
}

export const GraficoContext = createContext<GraficoContextType>(GraficoinitialValue)

export const GraficoProvider = ({ children }: GraficoContextProps) => {

    async function getDadosFB(esc: number){
        if(esc === 1){
            await firebase.firestore().collection("Calculos").doc("Registro").collection("1 Lei")
            //pegar o length
        }
    }

    async function envDadosFB(calculo:number) {
        if(calculo === 1){
            await firebase.firestore().collection("Calculos").doc("Registro").collection("1 Lei")
            .add({

            })
        }
        if(calculo === 2){
            await firebase.firestore().collection("Calculos").doc("Registro").collection("2 Lei")
            .add({

            })
        }
        if(calculo === 3){
            await firebase.firestore().collection("Calculos").doc("Registro").collection("Efic energ")
            .add({

            })
        }
        if(calculo === 4){
            await firebase.firestore().collection("Calculos").doc("Registro").collection("Rend Maq")
            .add({

            })
        }
        if(calculo === 5){
            await firebase.firestore().collection("Calculos").doc("Registro").collection("Trab Maq")
            .add({

            })
        }
        if(calculo === 6){
            await firebase.firestore().collection("Calculos").doc("Registro").collection("Energ Int V")
            .add({

            })
        }
        if(calculo === 7){
            await firebase.firestore().collection("Calculos").doc("Registro").collection("Trab Gas P")
            .add({

            })
        }
        if(calculo === 8){
            await firebase.firestore().collection("Calculos").doc("Registro").collection("Energ Int T")
            .add({

            })
        }
        if(calculo === 9){
            await firebase.firestore().collection("Calculos").doc("Registro").collection("Varia Energ")
            .add({

            })
        }
        if(calculo === 10){
            await firebase.firestore().collection("Calculos").doc("Registro").collection("Trab Gas T")
            .add({

            })
        }else{
            return
        }
    }

    return(
        <GraficoContext.Provider value={{
            getDadosFB,
            envDadosFB
            }}> 
            {children}
        </GraficoContext.Provider>
    )
}