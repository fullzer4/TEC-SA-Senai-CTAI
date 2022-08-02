import { useContext } from "react"
import { CalculosContext } from "../../contexts/calculos"
import { GraficoContext } from "../../contexts/grafico"
import Cont from "./cont";
import "./calc.css"


export default function Bemvindo() {
    const { verClickCalc1, verClickCalc2, verClickCalc3, verClickCalc4, verClickCalc5, verClickCalc6, verClickCalc7, verClickCalc8, verClickCalc9 } = useContext(CalculosContext)
    const { envDadosFB } = useContext(GraficoContext)

    function rodar(number:number){
        if(number === 1){verClickCalc1(),envDadosFB(1)}
        if(number === 2){verClickCalc2(),envDadosFB(2)}
        if(number === 3){verClickCalc3(),envDadosFB(3)}
        if(number === 4){verClickCalc4(),envDadosFB(4)}
        if(number === 5){verClickCalc5(),envDadosFB(5)}
        if(number === 6){verClickCalc6(),envDadosFB(6)}
        if(number === 7){verClickCalc7(),envDadosFB(7)}
        if(number === 8){verClickCalc8(),envDadosFB(8)}
        if(number === 9){verClickCalc9(),envDadosFB(9)}
    }

    return(
        <div id="calculadoras">
            <div className="calc-out">
                <div className="box-calc-in">
                    <h2 className="title-box-in">1 Lei termodinâmica</h2>
                    <hr/>
                    <h3 className="form-title-in">Fórmula</h3>
                    <p className="form-box-in">Q - T = ΔU</p>
                    <button className="bt-calc-in" onClick={() => rodar(1)}>Abrir</button>
                </div>
                <div className="box-calc-in">
                    <h2 className="title-box-in">2 Lei Termodinamica</h2>
                    <hr/>
                    <h3 className="form-title-in">Fórmula</h3>
                    <p className="form-box-in">Q + T = ΔU</p>
                    <button className="bt-calc-in" onClick={() => rodar(2)}>Abrir</button>
                </div>
                <div className="box-calc-in">
                    <h2 className="title-box-in">Eficiência Energetica</h2>
                    <hr/>
                    <h3 className="form-title-in">Fórmula</h3>
                    <p className="form-box-in">T / Q1 = E</p>
                    <button className="bt-calc-in" onClick={() => rodar(3)}>Abrir</button>
                </div>
                <div className="box-calc-in">
                    <h2 className="title-box-in">Rendimento Maquina Termica </h2>
                    <hr/>
                    <h3 className="form-title-in">Fórmula</h3>
                    <p className="form-box-in">1 - Qa / Qr = N</p>
                    <button className="bt-calc-in" onClick={() => rodar(4)}>Abrir</button>
                </div>
                <div className="box-calc-in">
                    <h2 className="title-box-in">Trabalho Maquina Termica</h2>
                    <hr/>
                    <h3 className="form-title-in">Fórmula</h3>
                    <p className="form-box-in">Qa - Qr = T</p>
                    <button className="bt-calc-in" onClick={() => rodar(5)}>Abrir</button>
                </div>
                <div className="box-calc-in">
                    <h2 className="title-box-in">Energia Interna Volume</h2>
                    <hr/>
                    <h3 className="form-title-in">Fórmula</h3>
                    <p className="form-box-in">3 / 2 pV = U</p>
                    <button className="bt-calc-in" onClick={() => rodar(6)}>Abrir</button>
                </div>
                <div className="box-calc-in">
                    <h2 className="title-box-in">Trabalho de um Gás Sob Pressão Constante</h2>
                    <hr/>
                    <h3 className="form-title-in">Fórmula</h3>
                    <p className="form-box-in">pΔV = T </p>
                    <button className="bt-calc-in" onClick={() => rodar(7)}>Abrir</button>
                </div>
                <div className="box-calc-in">
                    <h2 className="title-box-in">Energia Interna Temperatura</h2>
                    <hr/>
                    <h3 className="form-title-in">Fórmula</h3>
                    <p className="form-box-in">3 / 2 nRT = U</p>
                    <button className="bt-calc-in" onClick={() => rodar(8)}>Abrir</button>
                </div>
                <div className="box-calc-in">
                    <h2 className="title-box-in">Variação de Energia Interna</h2>
                    <hr/>
                    <h3 className="form-title-in">Fórmula</h3>
                    <p className="form-box-in">3 / 2 nRΔT = ΔU</p>
                    <button className="bt-calc-in" onClick={() => rodar(9)}>Abrir</button>
                </div>
            </div>
            <Cont/>
        </div>
    )
  }