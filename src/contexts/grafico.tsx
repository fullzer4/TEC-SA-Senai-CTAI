import { createContext, ReactNode, useState } from "react";
import firebase from "../services/databseConnection"

type GraficoContextProps = { //configurar as props
    children: ReactNode;
}

type GraficoContextType ={ //tipo
    teste: boolean;
    setTeste: (newState: boolean) => void;
}

const GraficoinitialValue ={  //definir o que ele ira receber
    teste: false,
    setTeste: () => {},
}

export const GraficoContext = createContext<GraficoContextType>(GraficoinitialValue)

export const GraficoProvider = ({ children }: GraficoContextProps) => {
    const [teste, setTeste] = useState(GraficoinitialValue.teste)

    return(
        <GraficoContext.Provider value={{
            teste,
            setTeste
            }}> 
            {children}
        </GraficoContext.Provider>
    )
}