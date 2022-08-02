import Experiment from '../../components/experiment/experiment';
import Header from '../../components/Navbar/navbar';
import AOS from "aos"

export default function Experimento() {
    AOS.init({
        delay: 150,
      })

    return(
        <div id="container">
            <div id="content">
                <Header/>
                <div id="content-objects" data-aos="fade-in">
                    <Experiment/>
                </div>
            </div>
        </div>
    )
  }