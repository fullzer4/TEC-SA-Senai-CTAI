import { useContext } from "react"
import { CalculosContext } from "../../contexts/calculos"
import "./calculadoraEsc.css"

export default function CalculadoraEsc() {
  const { classSC, verClickCalc1, verClickCalc2, calcEsc, pc1Esc, pc2Esc, pcResult, val1Esc, termo1, setVal1Esc, val2Esc, setVal2Esc, result} = useContext(CalculosContext)

    return(
      <div className="calculadora">
        <div className={classSC}>
            <div className="calculo-box">
              <div className="calculo-box-titulo">
                <h4 className="title-in-calc">{calcEsc}</h4>
              </div>
              <div className="calculo-box-calculos">
                <input type="number" value={val1Esc} placeholder={pc1Esc} onChange={(e)=> setVal1Esc(e.target.value)}/>
                <input type="number" value={val2Esc} placeholder={pc2Esc} onChange={(e)=> setVal2Esc(e.target.value)}/>
                <input type="number" value={result} placeholder={pcResult} readOnly/>
              </div>
              <div className="calculo-box-calcular">
                <button onClick={termo1}>Calcular</button>
              </div>
              <button className="button-calc" onClick={verClickCalc1}>sair</button>
            </div>
        </div>
        <div className="calculadora-boxes">
          <div className="calculadora-box c-3d">
            <h2 className="title-calc">Calculo1</h2>
            <h3 className="text-calc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci consequuntur eos cum numquam, cupiditate veritatis.</h3>
            <button className="button-calc" onClick={verClickCalc1}>Abrir</button>
          </div>
          <div className="calculadora-box c-3d">
            <h2 className="title-calc">Calculo2</h2>
            <h3 className="text-calc">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci consequuntur eos cum numquam, cupiditate veritatis.</h3>
            <button className="button-calc" onClick={verClickCalc2}>Abrir</button>
          </div>
        </div>
      </div>
    )
  }