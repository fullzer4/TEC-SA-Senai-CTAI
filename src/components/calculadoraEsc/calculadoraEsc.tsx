import { useContext } from "react"
import { CalculosContext } from "../../contexts/calculos"
import "./calculadoraEsc.css"

export default function CalculadoraEsc() {
  const { 
    classSC, 
    classGST, 
    verClickCalc1, 
    verClickCalc2,
    verClickCalc3, 
    verClickCalc4,
    verClickCalc5,
    verClickCalc6, 
    verClickCalc7,
    verClickCalc8, 
    verClickCalc9,
    verClickCalc10,
    calcEsc, 
    pc1Esc, 
    pc2Esc, 
    pc3Esc,
    pcResult, 
    val1Esc, 
    setVal1Esc, 
    val2Esc, 
    setVal2Esc,
    val3Esc, 
    setVal3Esc,
    result,
    verificarLei, 
    setResult, 
    verClickSair, 
    limpar} = useContext(CalculosContext)

    return(
      <div className="calculadora">

        <div className={classSC}>
            <div className="calculo-box">
              <div className="calculo-box-titulo">
                <h4 className="title-in-calc">{calcEsc}</h4>
              </div>
              <div className="calculo-box-calculos">
                <input type="number" className="inpval" value={val1Esc} placeholder={pc1Esc} onChange={(e)=> setVal1Esc(e.target.value)}/>
                <input type="number" className="inpval" value={val2Esc} placeholder={pc2Esc} onChange={(e)=> setVal2Esc(e.target.value)}/>
                <input type="number" className="inpval" value={result} placeholder={pcResult} onChange={(e)=> setResult(e.target.value)}/>
              </div>
              <div className="calculo-box-calcular">
                <button className="bt-c-l" onClick={verificarLei}>Calcular</button>
                <button className="bt-c-l" onClick={limpar}>Limpar</button>
              </div>
              <button className="button-calc" onClick={verClickSair}>sair</button>
            </div>
        </div>

        <div className={classGST}>
            <div className="calculo-box">
              <div className="calculo-box-titulo">
                <h4 className="title-in-calc">{calcEsc}</h4>
              </div>
              <div className="calculo-box-calculos">
                <input type="number" className="inpval" value={val1Esc} placeholder={pc1Esc} onChange={(e)=> setVal1Esc(e.target.value)}/>
                <input type="number" className="inpval" value={val2Esc} placeholder={pc2Esc} onChange={(e)=> setVal2Esc(e.target.value)}/>
                <input type="number" className="inpval" value={val3Esc} placeholder={pc3Esc} onChange={(e)=> setVal3Esc(e.target.value)}/>
                <input type="number" className="inpval" value={result} placeholder={pcResult} onChange={(e)=> setResult(e.target.value)}/>
              </div>
              <div className="calculo-box-calcular">
                <button className="bt-c-l" onClick={verificarLei}>Calcular</button>
                <button className="bt-c-l" onClick={limpar}>Limpar</button>
              </div>
              <button className="button-calc" onClick={verClickSair}>sair</button>
            </div>
        </div>

        <div className="calculadora-boxes">

          <div className="calculadora-box c-3d">
            <h2 className="title-calc">1 Lei Termodinamica</h2>
            <button className="button-calc" onClick={verClickCalc1}>Abrir</button>
          </div>

          <div className="calculadora-box c-3d">
            <h2 className="title-calc">2 Lei Termodinamica</h2>
            <button className="button-calc" onClick={verClickCalc2}>Abrir</button>
          </div>

          <div className="calculadora-box c-3d">
            <h2 className="title-calc">Eficiencia Energetica</h2>
            <button className="button-calc" onClick={verClickCalc3}>Abrir</button>
          </div>

          <div className="calculadora-box c-3d">
            <h2 className="title-calc">Rendimento Maquina Termica</h2>
            <button className="button-calc" onClick={verClickCalc4}>Abrir</button>
          </div>

          <div className="calculadora-box c-3d">
            <h2 className="title-calc">Trabalho Maquina Termica</h2>
            <button className="button-calc" onClick={verClickCalc5}>Abrir</button>
          </div>

          <div className="calculadora-box c-3d">
            <h2 className="title-calc">Energia Interna Volume</h2>
            <button className="button-calc" onClick={verClickCalc6}>Abrir</button>
          </div>

          <div className="calculadora-box c-3d">
            <h2 className="title-calc">Trabalho de um Gás Sob Pressão Constante</h2>
            <button className="button-calc" onClick={verClickCalc7}>Abrir</button>
          </div>

          <div className="calculadora-box c-3d">
            <h2 className="title-calc">Energia Interna Temperatura</h2>
            <button className="button-calc" onClick={verClickCalc8}>Abrir</button>
          </div>

          <div className="calculadora-box c-3d">
            <h2 className="title-calc">Variação de Energia Interna</h2>
            <button className="button-calc" onClick={verClickCalc9}>Abrir</button>
          </div>
      
          <div className="calculadora-box c-3d">
            <h2 className="title-calc">Trabalho de um Gás Sob Temperatura Constante</h2>
            <button className="button-calc" onClick={verClickCalc10}>Abrir</button>
          </div>

        </div>

      </div>
    )
  }