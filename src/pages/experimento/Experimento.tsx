import Experiment from '../../components/experiment/experiment';
import Header from '../../components/Navbar/navbar';

export default function Experimento() {
    return(
        <div id="container">
            <div id="content">
                <Header/>
                <div id="content-objects">
                    <Experiment/>
                </div>
            </div>
        </div>
    )
  }