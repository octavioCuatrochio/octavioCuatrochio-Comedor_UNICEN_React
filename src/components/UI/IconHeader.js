import "./IconHeader.css";

function ItemCard(props) {
    const classes = "icon-header " + props.className;

    return (
        <div className={classes}>
            <img src={props.icon} />
            <h1>{props.children}</h1>
        </div>
    );
}

export default ItemCard;