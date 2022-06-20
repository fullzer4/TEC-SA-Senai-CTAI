import Header from "../../components/header/header"
import Welcome from "../../components/welcome/welcome"
import WelcomeBottom from "../../components/presentation/presentation"
import "./home.css"

export default function Home() {
    return(
      <div id="container">
        <Header/>
        <Welcome/>
        <div className="general-out">
          <WelcomeBottom/>
        </div>        
      </div>
    )
  }