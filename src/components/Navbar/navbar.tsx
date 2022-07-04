import { Link } from 'react-router-dom';
import Logo from '../../images/logo/logo'
import Calc from '../../images/calc/calc'
import Team from '../../images/team/team'
import Teoric from '../../images/teoric/teoric'
import Scientist from '../../images/scientist/scientist'
import Graphic from '../../images/graphic/graphic'

import './navbar.css';
export default function Navbar() {
    return(
        <div id="navbar">
            <Link to="/">
                <button className="btn-nav">
                    <Logo/>
                </button>
            </Link>


            <hr/>

            <Link to="/test">
                <button className="btn-nav">
                    <Calc/>
                </button>
            </Link>

            <Link to="/">
                <button className="btn-nav">
                    <Team/>
                </button>
            </Link>

            <Link to="/">
                <button className="btn-nav">
                    <Teoric/>
                </button>
            </Link>

            <Link to="/">
                <button className="btn-nav">
                    <Scientist/>
                </button>
            </Link>

            <Link to="/">
                <button className="btn-nav">
                    <Graphic/>
                </button>
            </Link>
        </div>
    )
  }