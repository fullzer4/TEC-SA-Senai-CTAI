import Header from '../../components/Navbar/navbar';
import InicioTeam from '../../components/InicioTeam/inicioteam';

export default function Membros() {
    return(
        <div id="container">
            <div id="content">
                <Header/>
                <div id="content-objects">
                    <InicioTeam/>
                </div>
            </div>
        </div>
    )
  }