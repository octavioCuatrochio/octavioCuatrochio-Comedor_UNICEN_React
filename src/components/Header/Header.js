import "./Header.css";
import { useLocation } from "react-router-dom";

import MoneyItem from "./MoneyItem";
import icon from '../../img/Options.svg'

function Header(props) {

    const path = useLocation();

    function openAsideHandler() {
        props.onToggleAside();
    }

    return (
        <header className="header-container">
            <button onClick={openAsideHandler} className="header-icon__container">
                <img src={icon} className="icon-options" />
            </button>
            {path.pathname == "/wallet" && <div />}
            {path.pathname != "/wallet" && <MoneyItem current_funds={props.funds} />}
        </header>
    );
};

export default Header;