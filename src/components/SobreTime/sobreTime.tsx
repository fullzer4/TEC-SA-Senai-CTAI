import Equipe2 from "../../images/HomeEquipe2.svg"
import "./sobreTime.css"

export default function SobreTime() {
    return(
        <div id="sobretime">
            <div className="sobretime-box">
                <h3 className="sobretime-box-titulo">Sobre nosso time</h3>
                <div className="sobretime-box-conteudo">
                    <img src={Equipe2} className="sobretime-box-conteudo-imagem"></img>
                    <h4 className="sobretime-box-conteudo-texto">Nosso grupo é formado por 5 participantes, estamos desenvolvendo um projeto para uma SA entre as seguintes áreas diciplinares: Técnico e Natureza. Saiba mais sobre nós.</h4>
                </div>
            </div>
        </div>
    )
  }