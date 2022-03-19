import "./ItemCard.css";

function ItemCard(props) {
    const classes = "item-card " + props.className;

    return (
        <div className={classes}>
            <div className="info-container">
                <h1 className="info-container__title">{props.title}</h1>
                <h2 className="info-container__description">{props.description}</h2>
            </div>

            <h3 className="card-price">{"$"+ props.price}</h3>
        </div>
    );
}

export default ItemCard;