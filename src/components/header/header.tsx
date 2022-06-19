import "./header.css";
import logo from "../../images/logo.png"
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header>
            <div className="def-h left">
                <Link to="../" className="bt-def-h logo" data-aos="fade-down">
                    <img className="logo-img" src={logo} alt="logo"/>
                    TEC SA
                </Link>
            </div>
            <div className="def-h right">
                <Link to="/projects" className="bt-def-h" data-aos="fade-down">Projeto</Link>
                <Link to="/about" className="bt-def-h" data-aos="fade-down">Sobre</Link>
                <Link to="/calculator" className="bt-def-h" data-aos="fade-down">Calculadora</Link>
                <Link to="/languages" className="bt-def-h" data-aos="fade-down">Linguagens</Link>
            </div>
        </header>
    )
}