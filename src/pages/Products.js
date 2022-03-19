import Container from "../components/UI/Container";
import SectionHeader from "../components/UI/SectionHeader";
import ProductListContainer from "../components/ProductList/ProductListContainer";

function Products() {

    let items = [
        {
            id: 0,
            name: "9 DE ORO PEPAS MEMBRILLO X 200 GRS",
            price: "125.00"
        },
        {
            id: 1,
            name: "shampoo",
            price: "85.00"
        }
    ];

    return (
        <Container>
            <div className="section-header__container">
                <SectionHeader title="Listado" subtitle="de productos actuales" />

            </div>

            <ProductListContainer items={items} />

        </Container>
    );
}

export default Products;