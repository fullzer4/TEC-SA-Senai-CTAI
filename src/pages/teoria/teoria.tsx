import Header from '../../components/Navbar/navbar';
import InicioTeoria from '../../components/inicioteoria/inicioteoria';
import Teorias from '../../components/teorias/teorias';
import AOS from "aos"

export default function Teoria() {
    AOS.init({
        delay: 150,
      })

    return(
       <div id="container">
            <div id="content">
                <Header/>
                <div id="content-objects" data-aos="fade-in">
                    <InicioTeoria/>
                    <Teorias/>
                </div>
            </div>
        </div>
    )
  }