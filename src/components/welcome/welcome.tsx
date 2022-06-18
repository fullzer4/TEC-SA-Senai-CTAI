import logo from "../../images/logo2.png";
import back from "../../images/back1.png";
import "./welcome.css"

export default function Welcome(){
    return(
        <div className="cont-out">
          <div className="welcome-out">
            <div className="welcome-in">
              <h1 className="title-welcome">Bem vindo(a)</h1>
              <p className="text-welcome">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad iusto eligendi inventore, architecto dicta ut error impedit.</p>
              <button className="button-welcome">Comece a usar</button>
            </div>
            <div className="welcome-image">
              <img className="img-ini" src={logo} alt=""/>
            </div>
          </div>
          <div className="triangle-down"></div>
          <img className="back-img" src={back} alt=""/>
        </div>
    )
}