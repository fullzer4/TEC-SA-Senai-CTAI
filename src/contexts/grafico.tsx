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
    size2: number;
    setSize2: (newState: number) => void;
    size3: number;
    setSize3: (newState: number) => void;
    size4: number;
    setSize4: (newState: number) => void;
    size5: number;
    setSize5: (newState: number) => void;
    size6: number;
    setSize6: (newState: number) => void;
    size7: number;
    setSize7: (newState: number) => void;
    size8: number;
    setSize8: (newState: number) => void;
    size9: number;
    setSize9: (newState: number) => void;
    size10: number;
    setSize10: (newState: number) => void;
}

const GraficoinitialValue ={  //definir o que ele ira receber
    getDadosFB: () => {},
    envDadosFB: () => {},
    size1: 0,
    setSize1: () => {},
    size2: 0,
    setSize2: () => {},
    size3: 0,
    setSize3: () => {},
    size4: 0,
    setSize4: () => {},
    size5: 0,
    setSize5: () => {},
    size6: 0,
    setSize6: () => {},
    size7: 0,
    setSize7: () => {},
    size8: 0,
    setSize8: () => {},
    size9: 0,
    setSize9: () => {},
    size10: 0,
    setSize10: () => {},

}

export const GraficoContext = createContext<GraficoContextType>(GraficoinitialValue)

export const GraficoProvider = ({ children }: GraficoContextProps) => {
    var [size1, setSize1] = useState(GraficoinitialValue.size1)
    var [size2, setSize2] = useState(GraficoinitialValue.size2) 
    var [size3, setSize3] = useState(GraficoinitialValue.size3) 
    var [size4, setSize4] = useState(GraficoinitialValue.size4) 
    var [size5, setSize5] = useState(GraficoinitialValue.size5) 
    var [size6, setSize6] = useState(GraficoinitialValue.size6) 
    var [size7, setSize7] = useState(GraficoinitialValue.size7) 
    var [size8, setSize8] = useState(GraficoinitialValue.size8) 
    var [size9, setSize9] = useState(GraficoinitialValue.size9) 
    var [size10, setSize10] = useState(GraficoinitialValue.size10) 

    async function getDadosFB(esc: number){
        if(esc === 1){
            await firebase.firestore().collection('Calculos').doc("Registro").collection("1 Lei").get().then(snap => {
                setSize1(snap.size)
                console.log(size1);
            });
        }
        if(esc === 2){
            await firebase.firestore().collection('Calculos').doc("Registro").collection("2 Lei").get().then(snap => {
                setSize2(snap.size)
                console.log(size2);
            });
        }
        if(esc === 3){
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Efic energ").get().then(snap => {
                setSize3(snap.size)
                console.log(size3);
            });
        }
        if(esc === 4){
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Rend Maq").get().then(snap => {
                setSize4(snap.size)
                console.log(size4);
            });
        }
        if(esc === 5){
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Trab Maq").get().then(snap => {
                setSize5(snap.size)
                console.log(size5);
            });
        }
        if(esc === 6){
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Energ Int V").get().then(snap => {
                setSize6(snap.size)
                console.log(size6);
            });
        }
        if(esc === 7){
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Trab Gas P").get().then(snap => {
                setSize7(snap.size)
                console.log(size7);
            });
        }
        if(esc === 8){
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Energ Int T").get().then(snap => {
                setSize8(snap.size)
                console.log(size8);
            });
        }
        if(esc === 9){
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Varia Energ").get().then(snap => {
                setSize9(snap.size)
                console.log(size9);
            });
        }
        if(esc === 10){
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Trab Gas T").get().then(snap => {
                setSize10(snap.size)
                console.log(size10);
            });
        }
        if(esc === 11){
            await firebase.firestore().collection('Calculos').doc("Registro").collection("1 Lei").get().then(snap => {
                setSize1(snap.size)
            });
            await firebase.firestore().collection('Calculos').doc("Registro").collection("2 Lei").get().then(snap => {
                setSize2(snap.size)
            });
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Efic energ").get().then(snap => {
                setSize3(snap.size)
            });
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Rend Maq").get().then(snap => {
                setSize4(snap.size)
            });
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Trab Maq").get().then(snap => {
                setSize5(snap.size)
            });
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Energ Int V").get().then(snap => {
                setSize6(snap.size)
            });
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Trab Gas P").get().then(snap => {
                setSize7(snap.size)
            });
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Energ Int T").get().then(snap => {
                setSize8(snap.size)
            });
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Varia Energ").get().then(snap => {
                setSize9(snap.size)
            });
            await firebase.firestore().collection('Calculos').doc("Registro").collection("Trab Gas T").get().then(snap => {
                setSize10(snap.size)
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
            size2,
            setSize2,
            size3,
            setSize3,
            size4,
            setSize4,
            size5,
            setSize5,
            size6,
            setSize6,
            size7,
            setSize7,
            size8,
            setSize8,
            size9,
            setSize9,
            size10,
            setSize10,
            }}> 
            {children}
        </GraficoContext.Provider>
    )
}