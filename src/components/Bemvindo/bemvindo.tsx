import { Link } from "react-router-dom";
import Equipe1 from "../../images/HomeEquipe1.svg"
import Equipe2 from "../../images/TeamEquipe1.svg"
import Equipe3 from "../../images/timeGrafico1.svg"
// import Graphic from "../../images/graphic/graphic"
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

            <div className="container-out reverse">
                <div className="out-in">
                    <h1 className="title-ini">Sobre o time</h1>
                    <p className="text-ini">Nosso grupo é formado por 5 participantes, estamos desenvolvendo um projeto para uma SA entre as seguintes áreas diciplinares: Técnico e Natureza. Saiba mais sobre nós.</p>
                    <Link to="membros"><button className="bt-link">Membros</button></Link>
                
                </div>
                <div className="out-in">
                    <img src={Equipe2} alt=""/>
                </div>
            </div>

            <div className="container-out">
                <div className="out-in">
                    <h1 className="title-ini">Sobre o time</h1>
                    <p className="text-ini">Nosso grupo é formado por 5 participantes, estamos desenvolvendo um projeto para uma SA entre as seguintes áreas diciplinares: Técnico e Natureza. Saiba mais sobre nós.</p>
                    <Link to="membros"><button className="bt-link">Ver teorias</button></Link>
                
                </div>
                <div className="out-in">
                    <img src={Equipe3} alt=""/>
                </div>
            </div>
        </div>
    )
  }