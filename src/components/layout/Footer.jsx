import Logo from '../atoms/Logo';
import DiscordIcon from '../ui/DiscordIcon';
import TikTokIcon from '../ui/TikTokIcon';
import TwitterIcon from '../ui/TwitterIcon';
import FacebookIcon from '../ui/FacebookIcon';

import './Footer.scss';
function Footer() {
    return (
        <footer>
            <div className="footer container">
                <Logo />

                <div className="footer__links">
                    <ul>
                        <li><a href="#">Quienes somos</a></li>
                        <li><a href="#">Anuncios</a></li>
                        <li><a href="#">Contáctanos</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </div>

                <div className="footer__social">
                    <a href="#"><DiscordIcon /></a>
                    <a href="#"><TikTokIcon /></a>
                    <a href="#"><TwitterIcon /></a>
                    <a href="#"><FacebookIcon /></a>
                </div>
            </div>
        </footer >
    );
}

export default Footer;