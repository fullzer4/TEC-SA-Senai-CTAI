import "./calculoIntro.css"
import back from "../../images/back1.png"
export default function CalculoIntro() {

  return(
    <div className="calculo-intro">
      <h1 className="calculo-intro-texto">Calculadora</h1>
      <div className="triangle-down"></div>
      <img className="back-img" src={back} alt=""/>
    </div>
  )
}