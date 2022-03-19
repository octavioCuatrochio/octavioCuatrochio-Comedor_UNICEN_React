import "./WalletLogItem.css";
import arrow from "../../img/Arrow.svg";

function WalletLogItem(props) {

    let amount = parseFloat(props.amount);
    let transactionValue;

    if (amount > 0) {
        transactionValue = true;
    } else {
        amount = amount * (-1);
        transactionValue = false;
    }


    return (
        <li className="item-card wallet-log-item">
            <div className="wallet-log-item__info">
                {transactionValue && <img src={arrow} />}
                {!transactionValue && <img src={arrow} className="wallet-log-item__arrow-rotated" />}
                <h2>{props.date}</h2>
            </div>
            {transactionValue && <h2 className="wallet-log-transaction__positive">{"$" + amount}</h2>}
            {!transactionValue && <h2 className="wallet-log-transaction__negative">{"-$" + amount}</h2>}
        </li>
    );
}

export default WalletLogItem;