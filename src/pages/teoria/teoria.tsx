import Header from '../../components/Navbar/navbar';
import InicioTeoria from '../../components/inicioteoria/inicioteoria';

export default function Teoria() {
    return(
        <div id="container">
            <div id="content">
                <Header/>
                <div id="content-objects">
                    <InicioTeoria/>
                </div>
            </div>
        </div>
    )
  }