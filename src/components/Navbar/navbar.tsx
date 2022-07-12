import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo/logo'
import Home from '../../images/home/Home'
import Calc from '../../images/calc/calc'
import Team from '../../images/team/team'
import Teoric from '../../images/teoric/teoric'
import Scientist from '../../images/scientist/scientist'
import Graphic from '../../images/graphic/graphic'

import './navbar.css';
import { MenuContext } from '../../contexts/menu';
export default function Navbar() {
    const { mudarPagina, home, calc, team, teoric, scientist, graphic } = useContext(MenuContext)

    return(
        <div id="navbar">
            <Link to="/">
                <button className="btn-nav logo">
                    <Logo/>
                </button>
            </Link>
            <hr/>
            <Link to="/">
                <button onClick={() => mudarPagina(1)} className={home}>
                    <Home/>
                </button>
            </Link>
            <Link to="/calculator">
                <button onClick={() => mudarPagina(2)} className={calc}>
                    <Calc/>
                </button>
            </Link>

            <Link to="/membros">
                <button onClick={() => mudarPagina(3)} className={team}>
                    <Team/>
                </button>
            </Link>

            <Link to="/teoria">
                <button onClick={() => mudarPagina(4)} className={teoric}>
                    <Teoric/>
                </button>
            </Link>

            <Link to="/experiment">
                <button onClick={() => mudarPagina(5)} className={scientist}>
                    <Scientist/>
                </button>
            </Link>

            <Link to="/graphics">
                <button onClick={() => mudarPagina(6)} className={graphic}>
                    <Graphic/>
                </button>
            </Link>
        </div>
    )
  }