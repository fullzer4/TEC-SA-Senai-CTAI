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

        <div className={classGST}>
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
            <h3 className="text-calc">Q - T = ΔU<p/> Calculos Possiveis: <p/> Q - T = x<p/> Q - x = ΔU<p/> x - T = ΔU<p/>ΔU = Variação de energia interna <p/> Q = Calor trocado <p/> T = Trabalho realizado <p/>Todas as medidas dessa calculadora estão em jaule(J) <p/></h3> 
            <button className="button-calc" onClick={verClickCalc1}>Abrir</button>
          </div>

          <div className="calculadora-box c-3d">
            <h2 className="title-calc">2 Lei Termodinamica</h2>
            <h3 className="text-calc">Q + T = ΔU<p/> Calculos Possiveis:<p/> Q + T = x<p/> Q + x = ΔU<p/> x + T = ΔU<p/><p/> ΔU = Variação de energia interna <p/> Q = Calor trocado <p/> T = Trabalho realizado <p/>Todas as medidas dessa calculadora estão em jaule(J) <p/></h3> 
            <button className="button-calc" onClick={verClickCalc2}>Abrir</button>
          </div>

          <div className="calculadora-box c-3d">
            <h2 className="title-calc">Eficiencia Energetica</h2>
            <h3 className="text-calc">T / Q1 = E <p/> Calculos Possiveis:<p/> T / Q1 = x<p/> T / x = E<p/> x / Q1 = E<p/> E = Eficiencia energetica <p/> Q1 = Calor recebido <p/> T = Trabalho realizado <p/>Todas as medidas dessa calculadora estão em jaule(J) <p/></h3>
            <button className="button-calc" onClick={verClickCalc3}>Abrir</button>
          </div>

          <div className="calculadora-box c-3d">
            <h2 className="title-calc">Rendimento Maquina Termica</h2>
            <h3 className="text-calc">1 - Qa / Qr = N <p/> Calculos Possiveis:<p/> 1 - Qa / Qr = x<p/> 1 - Qa / x = N<p/> 1 - x / Qr = N<p/> Qa = Calor na fonte de aquecimento <p/> Qr = Calor na fonte de resfriamento <p/> N = Rendimento <p/>Todas as medidas dessa calculadora estão em jaule(J) <p/></h3>
            <button className="button-calc" onClick={verClickCalc4}>Abrir</button>
          </div>

          <div className="calculadora-box c-3d">
            <h2 className="title-calc">Trabalho Maquina Termica</h2>
            <h3 className="text-calc">Qa - Qr = T <p/> Calculos Possiveis:<p/> Qa - Qr = x<p/> Qa - x = T<p/> x - Qr = T<p/> Qa = Calor na fonte de aquecimento <p/> Qr = Calor na fonte de resfriamento <p/> T = Trabalho <p/>Todas as medidas dessa calculadora estão em jaule(J) <p/></h3>
            <button className="button-calc" onClick={verClickCalc5}>Abrir</button>
          </div>

          <div className="calculadora-box c-3d">
            <h2 className="title-calc">Energia Interna Volume</h2>
            <h3 className="text-calc"> 3 / 2 pV = U <p/> Calculos Possiveis:<p/>  3 / 2 pV = x<p/>  3 / 2 px = U<p/>  3 / 2 xV = U<p/> V = Volume <p/> p = Pressão <p/> U = Energia Interna <p/>Todas as medidas dessa calculadora estão em jaule(J) <p/></h3>
            <button className="button-calc" onClick={verClickCalc6}>Abrir</button>
          </div>

          <div className="calculadora-box c-3d">
            <h2 className="title-calc">Trabalho de um Gás Sob Pressão Constante</h2>
            <h3 className="text-calc">pΔV = T <p/> Calculos Possiveis:<p/> pΔV = x<p/> px = T<p/> xΔV = T<p/> p = Pressão <p/> ΔV = Variação de Volume <p/> T = Trabalho <p/>Todas as medidas dessa calculadora estão em jaule(J) <p/></h3>
            <button className="button-calc" onClick={verClickCalc7}>Abrir</button>
          </div>

          <div className="calculadora-box c-3d">
            <h2 className="title-calc">Energia Interna Temperatura</h2>
            <h3 className="text-calc">3 / 2 nRT = U <p/> Calculos Possiveis:<p/> 3 / 2 nRT = x<p/> 3 / 2 nRx = U<p/>  3 / 2 xRT = U<p/>n = Numero de Mols do Gás <p/> R = Constante Universal dos Gases Perfeitos <p/> T = Temperatura Absoluta<p/> U = Energia Interna <p/>Todas as medidas dessa calculadora estão em jaule(J) <p/></h3>
            <button className="button-calc" onClick={verClickCalc8}>Abrir</button>
          </div>

          <div className="calculadora-box c-3d">
            <h2 className="title-calc">Variação de Energia Interna</h2>
            <h3 className="text-calc">3 / 2 nRΔT = ΔU <p/> Calculos Possiveis:<p/> 3 / 2 nRΔT = x<p/> 3 / 2 nRx = ΔU<p/> 3 / 2 xRΔT = ΔU<p/>n = Numero de Mols do Gás<p/> R = Constante Universal dos Gases Perfeitos <p/> ΔT = Variação de Temperatura Absoluta <p/> ΔU = Variação de Energia Interna<p/>Todas as medidas dessa calculadora estão em jaule(J) <p/></h3>
            <button className="button-calc" onClick={verClickCalc9}>Abrir</button>
          </div>
      
          <div className="calculadora-box c-3d">
            <h2 className="title-calc">Trabalho de um Gás Sob Temperatura Constante</h2>
            <h3 className="text-calc">nRTln(V2 / V1) = T <p/> Calculos Possiveis:<p/> nRTln(V2 / V1) = x<p/> nRTn(V2 / x) = T<p/> nRTln(x / V1) = T<p/> nRTx(V2 / V1) = T<p/>xRTln(V2 / V1) = T<p/>n = Numero de Mols do Gás <p/> R = Constante Universal dos Gases Perfeitos <p/> T = Temperatura Absoluta <p/> V1 = Volume na Etapa Inicial <p/> V2 = Volume na Etapa Final <p/>Todas as medidas dessa calculadora estão em jaule(J) <p/></h3>
            <button className="button-calc" onClick={verClickCalc10}>Abrir</button>
          </div>

        </div>

      </div>
    )
  }