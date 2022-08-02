import {useContext} from "react"
import {CalculosContext} from "../../contexts/calculos"

export default function HistoricoUser() {

    const {historico, calculoUser} = useContext(CalculosContext)
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
                if(itens[3] === 1){zerarSinais(), sinal = "+", conta = " 1 Lei "}
                if(itens[3] === 2){zerarSinais(), sinal = "-", conta = " 2 Lei "}
                if(itens[3] === 3){zerarSinais(), sinal = "/", conta = " EficEnerg "}
                if(itens[3] === 4){zerarSinais(), sinal = "/", conta = " RendMaq "}
                if(itens[3] === 5){zerarSinais(), sinal = "-", conta = " Trabalho Maquina Termica "}
                if(itens[3] === 6){zerarSinais(), sinal = "* ", conta = " Energia Interna Volume "}
                if(itens[3] === 7){zerarSinais(), sinal = "*", conta = " Trabalho de um Gás Sob Pressão Constante "}
                if(itens[3] === 8){zerarSinais(), sinal = "*", conta = " Energia Interna Temperatura "}
                if(itens[3] === 9){zerarSinais(), sinal = "*", conta = " Variação de Energia Interna "}
                console.log(itens[3])
                return(
                    <p key={itens.id}>{sinalContaInicio} {itens[1]} {sinal} {itens[2]} {sinalContaFinal}= {itens[0]} ({conta})</p>
                )
            })}
        </div>
    )
  }