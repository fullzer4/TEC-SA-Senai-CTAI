import InicioCalc from '../../components/InicioCalc/inicioCalc';
import Calc from '../../components/calc/calc';
import Header from '../../components/Navbar/navbar';
import AOS from "aos"

export default function Calculadora() {
    AOS.init({
        delay: 150,
      })

    return(
        <div id="container ">
            <div id="content">
                <Header/>
                <div id="content-objects" data-aos="fade-in">
                    <InicioCalc/>
                    <Calc/>
                </div>
            </div>
        </div>
    )
  }