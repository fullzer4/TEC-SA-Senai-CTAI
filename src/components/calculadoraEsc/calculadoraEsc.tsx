import { useContext } from "react"
import { CalculosContext } from "../../contexts/calculos"
import { GraficoContext } from "../../contexts/grafico"
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
    limpar
  } = useContext(CalculosContext)
  const {envDadosFB} = useContext(GraficoContext)

    function Calcular(){
      verificarLei()
      if(calcEsc === "1 Lei Termodinamica"){
        envDadosFB(1)
      }
      if(calcEsc === "2 Lei Termodinamica"){
        envDadosFB(2)
      }
      if(calcEsc === "Eficiencia Energetica"){
        envDadosFB(3)
      }
      if(calcEsc === "Rendimento Maquina Termica"){
        envDadosFB(4)
      }
      if(calcEsc === "Trabalho Maquina Termica"){
        envDadosFB(5)
      }
      if(calcEsc === "Energia Interna Volume"){
        envDadosFB(6)
      }
      if(calcEsc === "Trabalho de um Gás Sob Pressão Constante"){
        envDadosFB(7)
      }
      if(calcEsc === "Energia Interna Temperatura"){
        envDadosFB(8)
      }
      if(calcEsc === "Variação de Energia Interna"){
        envDadosFB(9)
      }
      if(calcEsc === "Trabalho de um Gás Sob Temperatura Constante"){
        envDadosFB(10)
      }
    }

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
                <button className="bt-c-l" onClick={Calcular}>Calcular</button>
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
                <button className="bt-c-l" onClick={Calcular}>Calcular</button>
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