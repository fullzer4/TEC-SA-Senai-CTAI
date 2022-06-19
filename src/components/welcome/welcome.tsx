import back from "../../images/back1.png";
import Logo from "../logo/logo";
import "../logo/logo.css"
import "./welcome.css"

export default function Welcome(){
  return(
    <div className="cont-out">
      <div className="welcome-out">
        <div className="welcome-in" data-aos="fade-up">
          <h1 className="title-welcome">Bem vindo(a)</h1>
          <p className="text-welcome">Calculadora para trabalho SA entre materias diciplinares, técnico e natureza.</p>
          <button className="button-welcome">Comece a usar</button>
        </div>
          <div className="welcome-image">
            <Logo/>
          </div>
        </div>
      <div className="triangle-down"></div>
      <img className="back-img" src={back} alt=""/>
    </div>
  )
}