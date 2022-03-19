import ItemCard from "../UI/ItemCard";
import "./ProductList.css";

function ProductList(props) {
    return (
        <ul className="product-list__list">
            {props.items.map(product => (
                <ItemCard className="product-item"
                    key={product.id}
                    title={product.name}
                    price={product.price} />
            ))}
        </ul>
    );
}

export default ProductList;