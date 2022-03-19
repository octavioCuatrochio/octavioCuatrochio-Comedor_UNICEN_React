import "./MoneyItem.css";

function MoneyItem(props) {
    return (
        <div className="funds-container">
            <h1 className="funds-balance">{"$" + props.current_funds}</h1>
        </div>
    );
}

export default MoneyItem;