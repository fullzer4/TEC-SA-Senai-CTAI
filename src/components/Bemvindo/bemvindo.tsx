import { Link } from "react-router-dom";
import Equipe1 from "../../images/HomeEquipe1.svg"
import "./bemvindo.css"

export default function Bemvindo() {
    return(
        <div id="bemvindo">
            <div className="container-out">
                <div className="out-in">
                    <h1 className="title-ini">Bem vindo(a)</h1>
                    <p className="text-ini">Calculadora para trabalho SA abordando os conhecimentos de Maquinas Térmicas e termodinamica</p>
                    <Link to="calculadora"><button className="bt-link">Teste agora</button></Link>
                </div>
                <div className="out-in">
                    <img src={Equipe1} alt=""/>
                </div>
            </div>
        </div>
    )
  }