import { Link } from "react-router-dom";
import Equipe1 from "../../images/timeGrafico1.svg"
import "./inicioGraphics.css"

export default function inicioGraphics() {
    return(
        <div className="container-out reverse">
            <div className="out-in">
                <h1 className="title-ini">Dados do Site</h1>
                <p className="text-ini">Aqui mostramos todos os dados que coletamos da pagina de calculos.</p>
                <Link to="/test"><button className="bt-link">Ir para calculos</button></Link>
            </div>
            <div className="out-in">
                <img src={Equipe1} alt=""/>
            </div>
        </div>
    )
  }