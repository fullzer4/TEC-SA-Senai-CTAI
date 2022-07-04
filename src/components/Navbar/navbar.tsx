import Logo from '../../images/logo/logo'
import './navbar.css';
export default function Navbar() {
    return(
        <div id="navbar">
            <button className="btn-nav">
                <Logo/>
            </button>
            <hr/>
        </div>
    )
  }