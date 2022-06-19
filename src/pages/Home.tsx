import Header from "../components/header/header"
import Welcome from "../components/welcome/welcome"
import WelcomeBottom from "../components/WelcomeBottom/welcomebottom"

export default function Home() {
    return(
      <div id="container">
        <Header/>
        <Welcome/>
        <WelcomeBottom/>
      </div>
    )
  }