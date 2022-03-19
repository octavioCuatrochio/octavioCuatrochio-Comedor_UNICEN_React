import "./Footer.css"
import FooterButton from "./FooterButton";
import MenuIcon from "../Icons/MenuIcon";
import ListIcon from "../Icons/ListIcon";
import WalletIcon from "../Icons/WalletIcon";

function Footer() {
    return (
        <footer className="footer-container">
            <FooterButton destination="/home" title="Menú">
                <MenuIcon />
            </FooterButton>
            <FooterButton destination="/list" title="Listado">
                <ListIcon />
            </FooterButton>
            <FooterButton destination="/wallet" title="Fondos">
                <WalletIcon />
            </FooterButton>
        </footer>
    );
}

export default Footer;