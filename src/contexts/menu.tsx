import { createContext, useState } from "react";

export const MenuContext = createContext<any>(()=>{})

export const MenuProvider = ({ children }: any) => {
    const [home, setHome] = useState("btn-nav")
    const [calc, setCalc] = useState("btn-nav")
    const [team, setTeam] = useState("btn-nav")
    const [teoric, setTeoric] = useState("btn-nav")
    const [scientist, setScientist] = useState("btn-nav")
    const [graphic, setGraphic] = useState("btn-nav")

    function mudarPagina(pagina:any){
        console.log(pagina)        
    }


    return(
        <MenuContext.Provider value={{
            home, 
            calc, 
            team, 
            teoric, 
            scientist, 
            graphic,
            mudarPagina
            }}> 
            {children}
        </MenuContext.Provider>
    )
}