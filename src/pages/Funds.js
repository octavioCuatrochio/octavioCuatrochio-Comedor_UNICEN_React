import Container from "../components/UI/Container";
import SectionHeader from "../components/UI/SectionHeader";
import WalletFunds from "../components/Wallet/WalletFunds";
import WalletHistory from "../components/Wallet/WalletHistory";

function Funds() {

    let items = [
        {
            id: 0,
            date: "16/5",
            amount: "-16"
        },
        {
            id: 1,
            date: "16/5",
            amount: "216"
        },
        {
            id: 2,
            date: "15/5",
            amount: "-45.5"
        }
    ];

    return (
        <Container>
            <div className="section-header__container">
                <SectionHeader title="Saldo" subtitle="Actual de la cartera" />
            </div>

            <WalletFunds funds="243.5" />

            <div className="wallet-history__container">
                <WalletHistory items={items} />
            </div>

        </Container>
    );
}

export default Funds;