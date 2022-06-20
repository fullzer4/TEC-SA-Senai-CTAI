import Nat from "../icons/nat/cie"
import Tec from "../icons/tec/code"
import "./presentation.css"

export default function WelcomeBottom(){
    return(
        <div data-aos="fade-in" className="presentation-out">
            <h1 className="title">Nosso grupo</h1>
            <p className="text" >Nosso grupo é formado por 5 participantes, estamos desenvolvendo um projeto para uma SA entre as seguintes áreas diciplinares: Técnico e Natureza.</p>
            <div className="svg-icon-out">
                <Nat/>
                <Tec/>
            </div>

            {/* ignorar daqui p baixo - area de teste */}

            <h1 className="title">Nosso grupo</h1>
            <p className="text" >Nosso grupo é formado por 5 participantes, estamos desenvolvendo um projeto para uma SA entre as seguintes áreas diciplinares: Técnico e Natureza.</p>
            <div className="svg-icon-out">
                <Nat/>
                <Tec/>
            </div>

            <h1 className="title">Nosso grupo</h1>
            <p className="text" >Nosso grupo é formado por 5 participantes, estamos desenvolvendo um projeto para uma SA entre as seguintes áreas diciplinares: Técnico e Natureza.</p>
            <div className="svg-icon-out">
                <Nat/>
                <Tec/>
            </div>
            
            <h1 className="title">Nosso grupo</h1>
            <p className="text" >Nosso grupo é formado por 5 participantes, estamos desenvolvendo um projeto para uma SA entre as seguintes áreas diciplinares: Técnico e Natureza.</p>
            <div className="svg-icon-out">
                <Nat/>
                <Tec/>
            </div>
        </div>
    )
}