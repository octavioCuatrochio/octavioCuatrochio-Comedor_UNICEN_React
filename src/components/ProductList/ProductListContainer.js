import ProductSearch from "./ProductSearch";
import "./ProductListContainer.css";
import ProductList from "./ProductList";

function ProductListContainer(props) {
    return (
        <div className="product-list__container">
            <ProductSearch />

            <ProductList items={props.items} />
        </div>
    );
}

export default ProductListContainer;