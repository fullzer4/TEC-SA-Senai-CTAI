import { useContext } from "react"
import { CalculosContext } from "../../contexts/calculos"
import "./calculadoraEsc.css"

export default function CalculadoraEsc() {
  const { classSC, verClickCalc} = useContext(CalculosContext)

    return(
      <div className="calculadora">
        <div className={classSC}>
          <div className="calculo1">
            <h4>foi</h4>
            <button onClick={verClickCalc}>sair</button>
          </div>
        </div>
        <div className="calculadora-boxes">
          <div className="calculadora-box">
            <h2>Nome Calc</h2>
            <h3>explicao do calculo e bla bla bla</h3>
            <button onClick={verClickCalc}>Abrir</button>
          </div>
        </div>
      </div>
    )
  }