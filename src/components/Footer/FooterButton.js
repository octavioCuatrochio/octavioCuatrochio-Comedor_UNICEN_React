import "./FooterButton.css";
import { NavLink } from "react-router-dom";

function FooterButton(props) {

    return (
        <NavLink className="button-icon__container" to={props.destination} activeClassName="button-icon__container_active">
            {props.children}
            <h2 className="button-icon__name">{props.title}</h2>
        </NavLink>
    );
}

export default FooterButton;