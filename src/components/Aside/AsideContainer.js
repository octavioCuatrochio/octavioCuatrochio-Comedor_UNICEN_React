import logo from "../../img/Logo.png";
import "./AsideContainer.css";
import AsideOptionList from "./AsideOptionList";
import LogOutIcon from "../Icons/LogOutIcon";

function AsideContainer(params) {
    return (
        <div className="aside__container">
            <img src={logo} alt="logo" />

            <div className="aside__info">
                <h1>Cuatrochio Octavio</h1>
                <AsideOptionList />
            </div>


            <div>
                <li className="item-card aside-option__item aside__log-out">
                    <h1>Cerrar sesión</h1>
                    <LogOutIcon/>
                </li>
                {/* <h2>awhawh</h2> */}
            </div>
        </div>
    );
}

export default AsideContainer;