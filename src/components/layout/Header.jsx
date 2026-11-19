import './Header.scss';

import HamburgerIcon from '../ui/HamburgerIcon';
import CloseIcon from '../ui/CloseIcon';
import Logo from '../atoms/Logo';
import { useState } from 'react';

function Header({ setPage }) {
    const [isMenuActive, setIsMenuActive] = useState(false);

    return (
        <header>
            <div className="navbar container">

                <Logo />

                <ul className={`navbar__menu ${isMenuActive ? 'active' : ''}`}>
                    <li className="menu-item"><a href="" onClick={(e) => { e.preventDefault(); setPage('home'); }}>Inicio</a></li>
                    <li className="menu-item"><a href="#">Biblioteca</a></li>
                    <li className="menu-item"><a href="#">Ranking</a></li>
                    <li className="menu-item"><a href="#">Comunidad</a></li>
                </ul>


                <div className={`navbar__hamburger ${isMenuActive ? 'active' : ''}`} onClick={() => setIsMenuActive(!isMenuActive)}>
                    {isMenuActive ? <HamburgerIcon /> : <CloseIcon />}
                </div>

            </div>
        </header>
    );
}

export default Header;