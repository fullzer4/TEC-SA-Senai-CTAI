import Header from '../../components/Navbar/navbar';
import InicioTeoria from '../../components/inicioteoria/inicioteoria';
import Teorias from '../../components/teorias/teorias';

export default function Teoria() {
    return(
       <div id="container">
            <div id="content">
                <Header/>
                <div id="content-objects">
                    <InicioTeoria/>
                    <Teorias/>
                </div>
            </div>
        </div>
    )
  }