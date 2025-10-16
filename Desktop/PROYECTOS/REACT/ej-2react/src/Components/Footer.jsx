import './Footer.css';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
    return (
        <footer>
            <div id="autor">
                <p>© 2025 Mónica Jiménez</p>
            </div>

            <div class="social-icons">
                <a href="https://facebook.com" target="_blank"><FaFacebook /></a>
                <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
                <a href="https://instagram.com" target="_blank"><FaInstagram /></a>
            </div>

        </footer>
    );
}
export default Footer;