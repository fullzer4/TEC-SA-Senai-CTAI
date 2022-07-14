import { useContext } from "react"
import { CalculosContext} from "../../contexts/calculos"
import "./calc.css"


export default function ContCalc() {
    const { classSC, verClickSair, calcEsc, pc1Esc, pc2Esc, pcResult, val1Esc, setVal1Esc, val2Esc, setVal2Esc, result, limpar} = useContext(CalculosContext)
    return(
        <div className={ classSC }>
            <div className="cont-calc-in">
                <button className="close-calc" onClick={() => verClickSair()}>X</button>
                <h1 className="title-calc">{calcEsc}</h1>
                <div className="func-out-calcs">
                    <div className="inps-out uiashd"></div>
                    <div className="hst-out uiashd"></div>
                </div>
            </div>
        </div>
    )
}