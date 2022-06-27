import { useContext } from "react"
import { CalculosContext } from "../../contexts/calculos"
import "./calculadoraEsc.css"

export default function CalculadoraEsc() {
  const { classSC, classRC, verClickCalc1, verClickCalc2, verClickCalc3, verClickCalc4, calcEsc, pc1Esc, pc2Esc, pc3Esc, pcResult, val1Esc, setVal1Esc, val2Esc, setVal2Esc, val3Esc, setVal3Esc, result, verificarLei, setResult, verClickSair, limpar} = useContext(CalculosContext)

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
                <input type="number" value={result} placeholder={pcResult} onChange={(e)=> setResult(e.target.value)}/>
              </div>
              <div className="calculo-box-calcular">
                <button onClick={verificarLei}>Calcular</button>
                <button onClick={limpar}>Limpar</button>
              </div>
              <button className="button-calc" onClick={verClickSair}>sair</button>
            </div>
        </div>
        <div className={classRC}>
            <div className="calculo-box">
              <div className="calculo-box-titulo">
                <h4 className="title-in-calc">{calcEsc}</h4>
              </div>
              <div className="calculo-box-calculos">
                <input type="number" value={val1Esc} placeholder={pc1Esc} onChange={(e)=> setVal1Esc(e.target.value)}/>
                <input type="number" value={val2Esc} placeholder={pc2Esc} onChange={(e)=> setVal2Esc(e.target.value)}/>
                <input type="number" value={val3Esc} placeholder={pc3Esc} onChange={(e)=> setVal3Esc(e.target.value)}/>
                <input type="number" value={result} placeholder={pcResult} onChange={(e)=> setResult(e.target.value)}/>
              </div>
              <div className="calculo-box-calcular">
                <button onClick={verificarLei}>Calcular</button>
                <button onClick={limpar}>Limpar</button>
              </div>
              <button className="button-calc" onClick={verClickSair}>sair</button>
            </div>
        </div>
        <div className="calculadora-boxes">
          <div className="calculadora-box c-3d">
            <h2 className="title-calc">1 Lei Termodinamica</h2>
            {/* <h3 className="text-calc">Q - T = ΔU<p/> Calculos Possiveis: <p/> Q - T = x<p/> Q - x = ΔU<p/> x - T = ΔU<p/>ΔU = Variação de energia interna <p/> Q = Calor trocado <p/> T = Trabalho realizado <p/>Todas as medidas dessa calculadora estão em jaule(J) <p/></h3> */}
            <button className="button-calc" onClick={verClickCalc1}>Abrir</button>
          </div>
          <div className="calculadora-box c-3d">
            <h2 className="title-calc">2 Lei Termodinamica</h2>
            {/* <h3 className="text-calc">Q + T = ΔU<p/> Calculos Possiveis:<p/> Q + T = x<p/> Q + x = ΔU<p/> x + T = ΔU<p/><p/> ΔU = Variação de energia interna <p/> Q = Calor trocado <p/> T = Trabalho realizado <p/>Todas as medidas dessa calculadora estão em jaule(J) <p/></h3> */}
            <button className="button-calc" onClick={verClickCalc2}>Abrir</button>
          </div>
          <div className="calculadora-box c-3d">
            <h2 className="title-calc">Eficiencia Energetica</h2>
            {/* <h3 className="text-calc">T / Q1 = E <p/> Calculos Possiveis:<p/> T / Q1 = x<p/> T / x = E<p/> x / Q1 = E<p/> E = Eficiencia energetica <p/> Q1 = Calor recebido <p/> T = Trabalho realizado <p/>Todas as medidas dessa calculadora estão em jaule(J) <p/></h3> */}
            <button className="button-calc" onClick={verClickCalc3}>Abrir</button>
          </div>
          <div className="calculadora-box c-3d">
            <h2 className="title-calc">Rendimento</h2>
            {/* <h3 className="text-calc">T / Q1 = E <p/> Calculos Possiveis:<p/> T / Q1 = x<p/> T / x = E<p/> x / Q1 = E<p/> E = Eficiencia energetica <p/> Q1 = Calor recebido <p/> T = Trabalho realizado <p/>Todas as medidas dessa calculadora estão em jaule(J) <p/></h3> */}
            <button className="button-calc" onClick={verClickCalc4}>Abrir</button>
          </div>
        </div>
      </div>
    )
  }