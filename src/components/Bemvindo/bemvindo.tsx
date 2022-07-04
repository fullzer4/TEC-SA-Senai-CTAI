import { Link } from "react-router-dom";
import Equipe1 from "../../images/HomeEquipe1.svg"

export default function Bemvindo() {
    return(
        <div id="bemvindo">
            <div>
                <h1>Bem vindo(a)</h1>
                <h2>Calculadora para trabalho SA abordando os conhecimentos de Maquinas Térmicas e termodinamica</h2>
                <Link to="/calculator">Vamos calcular</Link>
            </div>
            <div>
                <img src={Equipe1}></img>
            </div>
        </div>
    )
  }