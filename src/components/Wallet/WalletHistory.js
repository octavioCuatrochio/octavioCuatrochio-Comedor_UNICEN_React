import React from "react";
import "./WalletHistory.css";
import WalletLogItem from "./WalletLogItem";

function WalletHistory(props) {
    return (
        <React.Fragment>
            <div className="wallet-history__header">
                <h2>Historial</h2>
                <h3>Ver más</h3>
            </div>
            <ul className="wallet-history__list">
                {props.items.map(historyItem => (
                    <WalletLogItem
                        key={historyItem.id}
                        date={historyItem.date}
                        amount={historyItem.amount} />
                ))}
            </ul>
        </React.Fragment>
    );
}

export default WalletHistory;