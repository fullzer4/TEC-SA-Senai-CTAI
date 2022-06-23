import CalculadoraEsc from "../../components/calculadoraEsc/calculadoraEsc"
import CalculoIntro from "../../components/calculointro/calculoIntro"
import Header from "../../components/header/header"
export default function Calculadora() {

    return(
        <div id="container">
            <Header/>
            <CalculoIntro/>
            <div className="general-out">
                <CalculadoraEsc/>
            </div>
        </div>
    )
  }