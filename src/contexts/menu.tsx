import { createContext, useState } from "react";

export const MenuContext = createContext<any>(()=>{})

export const MenuProvider = ({ children }: any) => {
    const [home, setHome] = useState("btn-nav ativo")
    const [calc, setCalc] = useState("btn-nav")
    const [team, setTeam] = useState("btn-nav")
    const [teoric, setTeoric] = useState("btn-nav")
    const [scientist, setScientist] = useState("btn-nav")
    const [graphic, setGraphic] = useState("btn-nav")


    function cleanClass(){
        setHome('btn-nav')
        setCalc('btn-nav');
        setTeam('btn-nav');
        setTeoric('btn-nav');
        setScientist('btn-nav');
        setGraphic('btn-nav');
    }

    function mudarPagina(pagina:any){ 
        if(pagina === 1){cleanClass(), setHome('btn-nav ativo')} 
        else if(pagina === 2){cleanClass(), setCalc('btn-nav ativo')} 
        else if(pagina === 3){cleanClass(), setTeam('btn-nav ativo')}
        else if(pagina === 4){cleanClass(), setTeoric('btn-nav ativo')}
        else if(pagina === 5){cleanClass(), setScientist('btn-nav ativo')}
        else if(pagina === 6){cleanClass(), setGraphic('btn-nav ativo')}
        else {cleanClass(), setHome('btn-nav ativo')}
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