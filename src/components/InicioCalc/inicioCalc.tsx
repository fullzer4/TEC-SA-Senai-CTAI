import { Link } from "react-router-dom";
import Equipe1 from "../../images/CalcEquipe1.svg"
import "./inicioCalc.css"

export default function InicioCalc() {
    return(
        <div id="iniciocalc">
            <div className="iniciocalc-box-imagem">
                <img src={Equipe1}></img>
            </div>
            <div className="iniciocalc-box-texto">
                <h1 className="iniciocalc-box-texto-titulo">Calculadoras</h1>
                <h2 className="iniciocalc-box-texto-subtitulo">As medidas das calculadoras estão em Jaules e coneguem realizar prova real alem de guardamos os dados para realizar analises</h2>
                <Link to="/test" className="iniciocalc-box-texto-botao">Ver analises</Link>
            </div>
        </div>
    )
  }