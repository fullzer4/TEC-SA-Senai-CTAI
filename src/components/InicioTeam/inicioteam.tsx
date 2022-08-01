import Equipe1 from "../../images/TeamEquipe1.svg"
import "./inicioTeam.css"

export default function inicioteam() {
    return(
        <div className="container-center">
            <div className="container-out reverse">
                <div className="out-in">
                    <h1 className="title-ini">Membros</h1>
                    <p className="text-ini">Cards de particiáção dos membros, mostrando o que cada um fez.</p>
                </div>
                <div className="out-in">
                    <img src={Equipe1} alt=""/>
                </div>
            </div>
        </div>
        
    )
  }