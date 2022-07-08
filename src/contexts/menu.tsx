import { createContext, useState } from "react";

export const MenuContext = createContext<any>(()=>{})

export const MenuProvider = ({ children }: any) => {
    const [home, setHome] = useState("btn-nav ativo")
    const [calc, setCalc] = useState("btn-nav")
    const [team, setTeam] = useState("btn-nav")
    const [teoric, setTeoric] = useState("btn-nav")
    const [scientist, setScientist] = useState("btn-nav")
    const [graphic, setGraphic] = useState("btn-nav")

    function mudarPagina(pagina:any){
        


        if(pagina === 1){
            setHome('btn-nav ativo')
            setCalc('btn-nav');
            setTeam('btn-nav');
            setTeoric('btn-nav');
            setScientist('btn-nav');
            setGraphic('btn-nav');
        } else if(pagina === 2){
            setCalc('btn-nav ativo')
            setHome('btn-nav');
            setTeam('btn-nav');
            setTeoric('btn-nav');
            setScientist('btn-nav');
            setGraphic('btn-nav');
        } else if(pagina === 3){
            setTeam('btn-nav ativo')
            setCalc('btn-nav')
            setHome('btn-nav');
            setTeoric('btn-nav');
            setScientist('btn-nav');
            setGraphic('btn-nav');
        } else if(pagina === 4){
            setTeoric('btn-nav ativo')
            setTeam('btn-nav')
            setCalc('btn-nav')
            setHome('btn-nav');
            setScientist('btn-nav');
            setGraphic('btn-nav');
        } else if(pagina === 5){
            setScientist('btn-nav ativo')
            setTeam('btn-nav')
            setCalc('btn-nav')
            setHome('btn-nav');
            setTeoric('btn-nav');
            setGraphic('btn-nav');
        }  else if(pagina === 6){
            setGraphic('btn-nav ativo')
            setTeam('btn-nav')
            setCalc('btn-nav')
            setHome('btn-nav');
            setTeoric('btn-nav');
            setScientist('btn-nav');
        } else {
            setHome('btn-nav ativo')
            setCalc('btn-nav');
            setTeam('btn-nav');
            setTeoric('btn-nav');
            setScientist('btn-nav');
            setGraphic('btn-nav');
        }

        console.log(home, calc)

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