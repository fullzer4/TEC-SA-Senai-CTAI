import Equipe1 from "../../images/Study1.svg"
import { Link } from "react-router-dom"
import "./inicioteoria.css"

export default function inicioteoria() {
    return(
        <div className="container-out reverse">
            <div className="out-in">
                <h1 className="title-ini">Teorias/Estudo</h1>
                <p className="text-ini">Todos os estudos daqui foram utilizados para realizar os calculos das nossas calculadoras </p>
                <Link to="/test"><button className="bt-link">Ir para calculos</button></Link>
            </div>
            <div className="out-in">
                <img src={Equipe1} alt=""/>
            </div>
        </div>
    )
  }