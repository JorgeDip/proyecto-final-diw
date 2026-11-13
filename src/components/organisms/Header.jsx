import './Header.scss';
function Header() {
    return (
        <header>
            <div className="navbar container">
                <a href="#" className="navbar__logo">
                    <svg width="39" height="38" viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g filter="url(#filter0_d_242_275)">
                            <path d="M2.66 2.508C0.152004 3.69867 10.108 10.5133 8.48667 25.2067C4.61067 28.576 -4.68666 34.428 2.888 35.568C9.44934 36.252 12.6667 33.0853 16.492 30.932C30.476 24.2693 35.6947 30.2227 37.8987 28.804C38.1013 28.3733 37.9747 27.9427 37.8227 27.664C36.1507 23.9653 32.8827 21.1027 26.4227 20.8493C24.4213 10.184 6.35867 1.01333 2.66 2.508ZM17.0493 15.9347L19.4053 18.1893L22.572 17.5307L21.1533 20.4693L22.7747 23.2813L19.5573 22.8507L17.3533 25.232L16.796 22.04L13.832 20.6973L16.6947 19.1773L17.0493 15.9347Z" fill="#FD9700" />
                        </g>
                        <defs>
                            <filter id="filter0_d_242_275" x="0" y="0" width="39.0038" height="40" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                                <feOffset dx="1" dy="2" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix type="matrix" values="0 0 0 0 0.305882 0 0 0 0 0.184314 0 0 0 0 0.572549 0 0 0 1 0" />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_242_275" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_242_275" result="shape" />
                            </filter>
                        </defs>
                    </svg>
                    LNBookshelf
                </a>

                <ul className="navbar__menu">
                    <li className="menu-item"><a href="#">Inicio</a></li>
                    <li className="menu-item"><a href="#">Biblioteca</a></li>
                    <li className="menu-item"><a href="#">Ranking</a></li>
                    <li className="menu-item"><a href="#">Comunidad</a></li>
                </ul>

                <div className="">
                    a
                </div>
            </div>
        </header>
    );
}

export default Header;