import { createContext, ReactNode, useState } from "react";

const ServerinitialValue ={  //definir o que ele ira receber
    buceta: (""),
}

export const ServerContext = createContext<any>(ServerinitialValue)

export const ServerProvider = ({ children }: any) => {
    const [buceta, setBuceta] = useState(ServerinitialValue.buceta)
    
    return(
        <ServerContext.Provider value={{
            buceta
            }}> 
            {children}
        </ServerContext.Provider>
    )
}