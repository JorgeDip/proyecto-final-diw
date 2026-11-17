import './Header.scss';

import Hamburger from '../atoms/Hamburger'
import Close from '../atoms/Close'
import Logo from '../atoms/Logo'
import { useState } from 'react';

function Header() {
    const [isMenuActive, setIsMenuActive] = useState(false);

    return (
        <header>
            <div className="navbar container">
                <a href="#" className="navbar__logo">
                    <Logo />
                    LNBookshelf
                </a>

                <ul className={`navbar__menu ${isMenuActive ? 'active' : ''}`}>
                    <li className="menu-item"><a href="#">Inicio</a></li>
                    <li className="menu-item"><a href="#">Biblioteca</a></li>
                    <li className="menu-item"><a href="#">Ranking</a></li>
                    <li className="menu-item"><a href="#">Comunidad</a></li>
                </ul>


                <div className={`navbar__hamburger ${isMenuActive ? 'active' : ''}`} onClick={() => setIsMenuActive(!isMenuActive)}>
                    {isMenuActive ? <Hamburger /> : <Close />}
                </div>

            </div>
        </header>
    );
}

export default Header;