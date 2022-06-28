import "./header.css";
import logo from "../../images/logo.png"
import { Link } from "react-router-dom";

export default function Header(){
    return(
        <header data-aos="fade-in">
            <div className="def-h left">
                <Link to="../" className="bt-def-h logo" >
                    <img className="logo-img" src={logo} alt="logo"/>
                    TEC SA
                </Link>
            </div>
            <div className="def-h right">
                <Link to="/projects" className="bt-def-h">Projeto</Link>
                <Link to="/calculator" className="bt-def-h">Calculadora</Link>
            </div>
        </header>
    )
}