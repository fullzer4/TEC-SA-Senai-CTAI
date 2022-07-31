import {useContext} from "react"
import {CalculosContext} from "../../contexts/calculos"

export default function HistoricoUser() {

    const {historico} = useContext(CalculosContext)

    return(
        <div id="historicouser">
           <ul>
            {historico.map((itens)=>{
                return(
                    <li key={itens}>{itens}</li>
                )
            })}
           </ul>
        </div>
    )
  }