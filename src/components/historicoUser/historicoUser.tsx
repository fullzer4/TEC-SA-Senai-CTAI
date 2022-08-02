import {useContext} from "react"
import {CalculosContext} from "../../contexts/calculos"

export default function HistoricoUser() {

    const {historico} = useContext(CalculosContext)

    let [ hsitoricoDesmont ] = historico
    let [ resultado, variavel1, variavel2, conta] = hsitoricoDesmont

    return(
        <div id="historicouser">
        </div>
    )
  }