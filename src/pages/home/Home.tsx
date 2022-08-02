import Bemvindo from '../../components/Bemvindo/bemvindo';
import Header from '../../components/Navbar/navbar';
import SobreTime from '../../components/SobreTime/sobreTime';
import AOS from "aos"

export default function Home() {
  AOS.init({
    delay: 150,
  })
    return(
      <div id="container">
        <div id="content">
          <Header/>
          <div id="content-objects" data-aos="fade-in">
            <Bemvindo/>   
            <SobreTime/> 
          </div>
        </div>
      </div>
    )
  }