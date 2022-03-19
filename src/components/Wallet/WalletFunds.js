import "./WalletFunds.css";

function WalletFunds(props) {
    return(
        <div className="wallet-funds__container">
            <h1 className="wallet-funds__content">{ "$" + props.funds}</h1>
        </div>
    );
}
export default WalletFunds;