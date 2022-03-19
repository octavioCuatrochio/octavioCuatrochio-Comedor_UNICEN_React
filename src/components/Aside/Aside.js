import "./Aside.css";
import AsideContainer from "./AsideContainer";

function Aside(props) {
    let classes = "aside " + props.className;

    function outsideClickHandler() {
        props.onClose();
    }

    return (
        <div className={classes}>
            <AsideContainer />
            <div onClick={outsideClickHandler} className="aside__overlay" />
        </div>
    );
}

export default Aside;