import { Link } from "react-router-dom";
import Equipe1 from "../../images/experiment.svg"

export default function Experiment() {
    return(
        <div id="experiment">
            <div className="container-out reverse">
                <div className="out-in">
                    <h1 className="title-ini">Experimento</h1>
                    <p className="text-ini">Decidimos realizar um barco movido usando termodinamica. Depois de muitas tentativas conseguimos chegar em um resultado descente e chegamos a conclusão que por conta de usarmos canudo biodegradavel ele não aguentava ficar muito tempo na agua assim prejudicando o experimento </p>
                    <Link to="teoria"><button className="bt-link">Ir para Teoria</button></Link>
                </div>
                <div className="out-in">
                    <img src={Equipe1} alt=""/>
                </div>
            </div>
        </div>
    )
  }