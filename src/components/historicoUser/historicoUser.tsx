import {useContext} from "react"
import {CalculosContext} from "../../contexts/calculos"
import "./historicouser.css"

export default function HistoricoUser() {

    const {historico} = useContext(CalculosContext)
    var sinal = ""
    var sinalContaInicio = ""
    var sinalContaFinal = "" 
    var conta = ""

    function zerarSinais(){
        sinal = ""
        sinalContaInicio = ""
        sinalContaFinal = "" 
        conta = ""
    }
    
    //resultado, variavel1, variavel2, conta
    return(
        <div id="historicouser">
            {historico.map((itens)=>{
                if(itens[3] === 1){zerarSinais(), sinal = "+", conta = " 1Lei "}
                if(itens[3] === 2){zerarSinais(), sinal = "-", conta = " 2Lei "}
                if(itens[3] === 3){zerarSinais(), sinal = "/", conta = " EficEnerg "}
                if(itens[3] === 4){zerarSinais(), sinalContaInicio = "1 - " ,sinal = "/", conta = " RendMaq "}
                if(itens[3] === 5){zerarSinais(), sinal = "-", conta = " TrabMaq "}
                if(itens[3] === 6){zerarSinais(), sinalContaInicio = "3 / 2 * " ,sinal = "* ", conta = " EnergIntV "}
                if(itens[3] === 7){zerarSinais(), sinal = "*", conta = " TrabGasP "}
                if(itens[3] === 8){zerarSinais(), sinalContaInicio = "3 / 2 * " ,sinal = "*", sinalContaFinal = "R *", conta = " EnergIntT "}
                if(itens[3] === 9){zerarSinais(), sinalContaInicio = "3 / 2 * " ,sinal = "*", sinalContaFinal = "R *", conta = " VariaEnergInt "}
                return(
                    <p key={itens.id}>{sinalContaInicio} {itens[1]} {sinal} {sinalContaFinal} {itens[2]} = {itens[0]} - {conta} </p>
                )
            })}
        </div>
    )
  }