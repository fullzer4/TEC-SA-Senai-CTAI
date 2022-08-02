import { useContext } from "react"
import { CalculosContext } from "../../contexts/calculos"
import { GraficoContext } from "../../contexts/grafico"
import Cont from "./cont";
import "./calc.css"


export default function Bemvindo() {
    const { verClickCalc1, verClickCalc2, verClickCalc3, verClickCalc4, verClickCalc5, verClickCalc6, verClickCalc7, verClickCalc8, verClickCalc9 } = useContext(CalculosContext)
    const { envDadosFB } = useContext(GraficoContext)

    return(
        <div id="calculadoras">
            <div className="calc-out">
                <div className="box-calc-in">
                    <h2 className="title-box-in">1 Lei termodinâmica</h2>
                    <hr/>
                    <h3 className="form-title-in">Fórmula</h3>
                    <p className="form-box-in">Q - T = ΔU</p>
                    <button className="bt-calc-in" onClick={() => verClickCalc1()}>Abrir</button>
                </div>
                <div className="box-calc-in">
                    <h2 className="title-box-in">2 Lei Termodinamica</h2>
                    <hr/>
                    <h3 className="form-title-in">Fórmula</h3>
                    <p className="form-box-in">Q + T = ΔU</p>
                    <button className="bt-calc-in" onClick={() => verClickCalc2()}>Abrir</button>
                </div>
                <div className="box-calc-in">
                    <h2 className="title-box-in">Eficiência Energetica</h2>
                    <hr/>
                    <h3 className="form-title-in">Fórmula</h3>
                    <p className="form-box-in">T / Q1 = E</p>
                    <button className="bt-calc-in" onClick={() => verClickCalc3()}>Abrir</button>
                </div>
                <div className="box-calc-in">
                    <h2 className="title-box-in">Rendimento Maquina Termica </h2>
                    <hr/>
                    <h3 className="form-title-in">Fórmula</h3>
                    <p className="form-box-in">1 - Qa / Qr = N</p>
                    <button className="bt-calc-in" onClick={() => verClickCalc4()}>Abrir</button>
                </div>
                <div className="box-calc-in">
                    <h2 className="title-box-in">Trabalho Maquina Termica</h2>
                    <hr/>
                    <h3 className="form-title-in">Fórmula</h3>
                    <p className="form-box-in">Qa - Qr = T</p>
                    <button className="bt-calc-in" onClick={() => verClickCalc5()}>Abrir</button>
                </div>
                <div className="box-calc-in">
                    <h2 className="title-box-in">Energia Interna Volume</h2>
                    <hr/>
                    <h3 className="form-title-in">Fórmula</h3>
                    <p className="form-box-in">3 / 2 pV = U</p>
                    <button className="bt-calc-in" onClick={() => verClickCalc6()}>Abrir</button>
                </div>
                <div className="box-calc-in">
                    <h2 className="title-box-in">Trabalho de um Gás Sob Pressão Constante</h2>
                    <hr/>
                    <h3 className="form-title-in">Fórmula</h3>
                    <p className="form-box-in">pΔV = T </p>
                    <button className="bt-calc-in" onClick={() => verClickCalc7()}>Abrir</button>
                </div>
                <div className="box-calc-in">
                    <h2 className="title-box-in">Energia Interna Temperatura</h2>
                    <hr/>
                    <h3 className="form-title-in">Fórmula</h3>
                    <p className="form-box-in">3 / 2 nRT = U</p>
                    <button className="bt-calc-in" onClick={() => verClickCalc8()}>Abrir</button>
                </div>
                <div className="box-calc-in">
                    <h2 className="title-box-in">Variação de Energia Interna</h2>
                    <hr/>
                    <h3 className="form-title-in">Fórmula</h3>
                    <p className="form-box-in">3 / 2 nRΔT = ΔU</p>
                    <button className="bt-calc-in" onClick={() => verClickCalc9()}>Abrir</button>
                </div>
            </div>
            <Cont/>
        </div>
    )
  }