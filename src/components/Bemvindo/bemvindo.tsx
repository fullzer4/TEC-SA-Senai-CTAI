import { Link } from "react-router-dom";
import Equipe1 from "../../images/HomeEquipe1.svg"
import "./bemvindo.css"

export default function Bemvindo() {
    return(
        <div id="bemvindo">
            <div className="bemvindo-conteudo">
                <h1 className="bemvindo-conteudo-titulo">Bem vindo(a)</h1>
                <h2 className="bemvindo-conteudo-subtitulo">Calculadora para trabalho SA abordando os conhecimentos de Maquinas Térmicas e termodinamica</h2>
                <Link to="/calculator" className="bemvindo-conteudo-botao">Vamos calcular</Link>
            </div>
            <div className="bemvindo-imagem">
                <img src={Equipe1}></img>
            </div>
        </div>
    )
  }