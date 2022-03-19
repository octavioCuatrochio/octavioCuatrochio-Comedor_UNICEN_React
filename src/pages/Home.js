import Container from "../components/UI/Container";
import SectionHeader from "../components/UI/SectionHeader";
import MenuContainer from "../components/Menu/MenuContainer";

function Home() {
    return (
        <Container>
            <div className="section-header__container">
                <SectionHeader title="Menú" subtitle="Junio 28" />
            </div>

            <MenuContainer></MenuContainer>

        </Container>
    );
}

export default Home;