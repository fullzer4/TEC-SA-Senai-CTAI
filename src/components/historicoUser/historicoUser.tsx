import {useContext} from "react"
import {CalculosContext} from "../../contexts/calculos"

export default function HistoricoUser() {

    const {historico} = useContext(CalculosContext)
    var sinal = ""
    var conta = ""
    
    //resultado, variavel1, variavel2, conta
    return(
        <div id="historicouser">
            {historico.map((itens)=>{
                if(itens[3] === 1){sinal = "+", conta = " 1 Lei "}
                if(itens[3] === 2){sinal = "-", conta = " 2 Lei "}
                if(itens[3] === 3){sinal = "-", conta = " 2 Lei "}
                if(itens[3] === 4){sinal = "-", conta = " 2 Lei "}
                if(itens[3] === 5){sinal = "-", conta = " 2 Lei "}
                if(itens[3] === 6){sinal = "-", conta = " 2 Lei "}
                if(itens[3] === 7){sinal = "-", conta = " 2 Lei "}
                if(itens[3] === 8){sinal = "-", conta = " 2 Lei "}
                if(itens[3] === 9){sinal = "-", conta = " 2 Lei "}
                return(
                    <p key={itens.id}>{itens[1]} {sinal} {itens[2]} = {itens[0]} ({conta})</p>
                )
            })}
        </div>
    )
  }