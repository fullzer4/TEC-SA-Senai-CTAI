import { useContext } from "react"
import { CalculosContext} from "../../contexts/calculos"
import HistoricoUser from "../historicoUser/historicoUser"
import Hist from "../../images/Historic.svg"
import "./calc.css"

export default function ContCalc() {
    const {envDadosFB, classSC, verClickSair, calcEsc, pc1Esc, pc2Esc, pcResult, val1Esc, setVal1Esc, val2Esc, setVal2Esc, result, setResult, limpar, verificarLei, sendbd} = useContext(CalculosContext)
    function rodar(number:number){
        if(number === 1){verificarLei(sendbd),envDadosFB(1)}
        if(number === 2){verificarLei(sendbd),envDadosFB(2)}
        if(number === 3){verificarLei(sendbd),envDadosFB(3)}
        if(number === 4){verificarLei(sendbd),envDadosFB(4)}
        if(number === 5){verificarLei(sendbd),envDadosFB(5)}
        if(number === 6){verificarLei(sendbd),envDadosFB(6)}
        if(number === 7){verificarLei(sendbd),envDadosFB(7)}
        if(number === 8){verificarLei(sendbd),envDadosFB(8)}
        if(number === 9){verificarLei(sendbd),envDadosFB(9)}
    }
    if(calcEsc === "1 Lei Termodinamica"){const calculoHEHE = 1}
    if(calcEsc === "2 Lei Termodinamica"){const calculoHEHE = 2}
    if(calcEsc === "Eficiencia Energetica"){const calculoHEHE = 3}
    if(calcEsc === "Rendimento Maquina Termica"){const calculoHEHE = 4}
    if(calcEsc === "Trabalho Maquina Termica"){const calculoHEHE = 5}
    if(calcEsc === "Energia Interna Volume"){const calculoHEHE = 6}
    if(calcEsc === "Trabalho de um Gás Sob Pressão Constante"){const calculoHEHE = 7}
    if(calcEsc === "Energia Interna Temperatura"){const calculoHEHE = 8}
    if(calcEsc === "Variação de Energia Interna"){const calculoHEHE = 9}

    return(
        <div className={ classSC }>
            <div className="cont-calc-in">
                <button className="close-calc" onClick={() => verClickSair()}>X</button>
                <h1 className="title-calc">{calcEsc}</h1>
                <div className="func-out-calcs">
                    <div className="inps-out uiashd">
                        <input type="number" className="inp-cont-calc" placeholder={pc1Esc} value={val1Esc} onChange={(e)=> setVal1Esc(e.target.value)}/>
                        <input type="number" className="inp-cont-calc" placeholder={pc2Esc} value={val2Esc} onChange={(e)=> setVal2Esc(e.target.value)}/>
                        <input type="number" className="inp-cont-calc" placeholder={pcResult} value={result} onChange={(e)=> setResult(e.target.value)}/>
                    </div>
                    <div className="hst-out uiashd">
                        <div className="titulo-hist">
                            <img src={Hist} className="img-hist"/>
                            <p>Historico</p>
                        </div>
                        <HistoricoUser/>
                    </div>
                </div>
                <div className="calc-botoes">
                    <button onClick={()=> limpar()} className="calc-botoes">Limpar</button>
                    <button onClick={()=> verificarLei(sendbd)} className="calc-botoes">Calcular</button>
                </div>
            </div>
        </div>
    )
}