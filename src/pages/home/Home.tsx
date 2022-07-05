import Bemvindo from '../../components/Bemvindo/bemvindo';
import Header from '../../components/Navbar/navbar';
import SobreTime from '../../components/SobreTime/sobreTime';

export default function Home() {
    return(
      <div id="container">
        <div id="content">
          <Header/>
          <div id="content-objects">
            <Bemvindo/>   
            <SobreTime/> 
          </div>
        </div>
      </div>
    )
  }