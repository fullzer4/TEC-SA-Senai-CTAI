import { Link } from "react-router-dom";
import Equipe1 from "../../images/CalcEquipe1.svg"
import "./inicioCalc.css"

export default function InicioCalc() {
    return(
        <div className="container-out reverse">
            <div className="out-in">
                <h1 className="title-ini">Calculadoras</h1>
                <p className="text-ini">As medidas das calculadoras estão em Jaules e coneguem realizar prova real alem de guardamos os dados para realizar analises </p>
                <Link to="/graphics"><button className="bt-link">Ver analises</button></Link>
            </div>
            <div className="out-in">
                <img src={Equipe1} alt=""/>
            </div>
        </div>
    )
  }