import { createContext, ReactNode, useState } from "react";
import firebase from "../services/databseConnection"

type GraficoContextProps = { //configurar as props
    children: ReactNode;
}

type GraficoContextType ={ //tipo
    getDadosFB: (newState: number) => void;
    envDadosFB: (newState: number) => void;
    size1: number;
    setSize1: (newState: number) => void;
}

const GraficoinitialValue ={  //definir o que ele ira receber
    getDadosFB: () => {},
    envDadosFB: () => {},
    size1: 0,
    setSize1: () => {},
}

export const GraficoContext = createContext<GraficoContextType>(GraficoinitialValue)

export const GraficoProvider = ({ children }: GraficoContextProps) => {
    var [size1, setSize1] = useState(GraficoinitialValue.size1) 

    async function getDadosFB(esc: number){
        if(esc === 1){
            await firebase.firestore().collection('Calculos').doc("Registro").collection("1 Lei").get().then(snap => {
                setSize1(snap.size)
                console.log(size1);
            });
        }
        if(esc === 2){
            await firebase.firestore().collection('Calculos').doc("Registro").collection("2 Lei").get().then(snap => {
                var size = snap.size
                console.log(size);
            });
        }
        if(esc === 3){
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Efic energ").get().then(snap => {
                var size = snap.size
                console.log(size);
            });
        }
        if(esc === 4){
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Rend Maq").get().then(snap => {
                var size = snap.size
                console.log(size);
            });
        }
        if(esc === 5){
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Trab Maq").get().then(snap => {
                var size = snap.size
                console.log(size);
            });
        }
        if(esc === 6){
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Energ Int V").get().then(snap => {
                var size = snap.size
                console.log(size);
            });
        }
        if(esc === 7){
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Trab Gas P").get().then(snap => {
                var size = snap.size
                console.log(size);
            });
        }
        if(esc === 8){
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Energ Int T").get().then(snap => {
                var size = snap.size
                console.log(size);
            });
        }
        if(esc === 9){
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Varia Energ").get().then(snap => {
                var size = snap.size
                console.log(size);
            });
        }
        if(esc === 10){
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Trab Gas T").get().then(snap => {
                var size = snap.size
                console.log(size);
            });
        }
    }

    async function envDadosFB(calculo:number) {
        if(calculo === 1){
            await firebase.firestore().collection("Calculos").doc("Registro").collection("1 Lei")
            .add({

            })
            console.log("Dados enviados");
        }
        if(calculo === 2){
            await firebase.firestore().collection("Calculos").doc("Registro").collection("2 Lei")
            .add({

            })
            console.log("Dados enviados");
        }
        if(calculo === 3){
            await firebase.firestore().collection("Calculos").doc("Registro").collection("Efic energ")
            .add({

            })
            console.log("Dados enviados");
        }
        if(calculo === 4){
            await firebase.firestore().collection("Calculos").doc("Registro").collection("Rend Maq")
            .add({

            })
            console.log("Dados enviados");
        }
        if(calculo === 5){
            await firebase.firestore().collection("Calculos").doc("Registro").collection("Trab Maq")
            .add({

            })
            console.log("Dados enviados");
        }
        if(calculo === 6){
            await firebase.firestore().collection("Calculos").doc("Registro").collection("Energ Int V")
            .add({

            })
            console.log("Dados enviados");
        }
        if(calculo === 7){
            await firebase.firestore().collection("Calculos").doc("Registro").collection("Trab Gas P")
            .add({

            })
            console.log("Dados enviados");
        }
        if(calculo === 8){
            await firebase.firestore().collection("Calculos").doc("Registro").collection("Energ Int T")
            .add({

            })
            console.log("Dados enviados");
        }
        if(calculo === 9){
            await firebase.firestore().collection("Calculos").doc("Registro").collection("Varia Energ")
            .add({

            })
            console.log("Dados enviados");
        }
        if(calculo === 10){
            await firebase.firestore().collection("Calculos").doc("Registro").collection("Trab Gas T")
            .add({

            })
            console.log("Dados enviados");
        }else{
            return
        }
    }

    return(
        <GraficoContext.Provider value={{
            getDadosFB,
            envDadosFB,
            size1,
            setSize1,
            }}> 
            {children}
        </GraficoContext.Provider>
    )
}