import Header from '../../components/Navbar/navbar';
import InicioTeam from '../../components/InicioTeam/inicioteam';
import Team from '../../components/team/team';


export default function Membros() {
    return(
        <div id="container">
            <div id="content">
                <Header/>
                <div id="content-objects">
                    <InicioTeam/>
                    <Team/>
                </div>
            </div>
        </div>
    )
  }