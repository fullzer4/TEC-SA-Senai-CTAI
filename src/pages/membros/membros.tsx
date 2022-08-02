import Header from '../../components/Navbar/navbar';
import InicioTeam from '../../components/InicioTeam/inicioteam';
import Team from '../../components/team/team';
import AOS from "aos"

export default function Membros() {
    AOS.init({
        delay: 150,
      })

    return(
        <div id="container">
            <div id="content">
                <Header/>
                <div id="content-objects" data-aos="fade-in">
                    <InicioTeam/>
                    <Team/>
                </div>
            </div>
        </div>
    )
  }