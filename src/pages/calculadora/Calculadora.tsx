import InicioCalc from '../../components/InicioCalc/inicioCalc';
import Header from '../../components/Navbar/navbar';
export default function Calculadora() {

    return(
        <div id="container ">
            <div id="content">
                <Header/>
                <div id="content-objects">
                    <InicioCalc/>
                </div>
            </div>
        </div>
    )
  }