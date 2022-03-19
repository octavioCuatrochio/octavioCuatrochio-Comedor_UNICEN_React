import { ReactComponent as Lupa } from '../../img/Lupa.svg';
import "./ProductSearch.css";

function ProductSearch(params) {
    return (
        <div className="product-search__container">
            <Lupa fill="white"/>
            <input type="text" className='product-search__input' placeholder='Buscar productos...'/>
        </div>
    )
}

export default ProductSearch;