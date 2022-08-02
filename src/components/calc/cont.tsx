import { useContext } from "react"
import { CalculosContext} from "../../contexts/calculos"
import HistoricoUser from "../historicoUser/historicoUser"
import Hist from "../../images/Historic.svg"
import "./calc.css"

export default function ContCalc() {
    const { classSC, verClickSair, calcEsc, pc1Esc, pc2Esc, pcResult, val1Esc, setVal1Esc, val2Esc, setVal2Esc, result, setResult, limpar, verificarLei, sendbd} = useContext(CalculosContext)
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
                    <button onClick={()=> limpar()}>Limpar</button>
                    <button onClick={()=> verificarLei(sendbd)}>Calcular</button>
                </div>
            </div>
        </div>
    )
}