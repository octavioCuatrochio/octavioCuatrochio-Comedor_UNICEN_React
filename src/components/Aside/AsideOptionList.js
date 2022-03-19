import BellIcon from "../Icons/BellIcon";
import LockIcon from "../Icons/LockIcon";
import "./AsideOptionList.css";

function AsideOptionList(props) {
    return (
        <ul className="aside-option__list">
            <li className="item-card aside-option__item">
                <h1>Notificaciones</h1>
                <BellIcon fill="black" />
            </li>
            <li className="item-card aside-option__item">
                <h1>Contraseña</h1>
                <LockIcon fill="black" />
            </li>
        </ul>
    );
}

export default AsideOptionList;