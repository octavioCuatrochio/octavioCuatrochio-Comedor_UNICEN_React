import hamburger from '../../img/Hamburger.svg';
import leaf from '../../img/Leaf.svg';

import ItemCard from '../UI/ItemCard';
import IconHeader from "../UI/IconHeader";
import "./MenuContainer.css";

function MenuContainer(props) {
    return (
        <div className="menu-container">
            <IconHeader className="title-icon" icon={hamburger}>Común</IconHeader>
            <ItemCard className="item-card" title="Pastel de carne" description="De pollo con salsa 4 quesos." price="38.00" />
            <IconHeader className="title-icon" icon={leaf}>Veggie</IconHeader>
            <ItemCard className="item-card" title="Milanesa" description="De zapallo." price="45.00" />
            <IconHeader className="title-icon" icon={leaf}>Celíaco</IconHeader>
            <ItemCard className="item-card" title="Milanesa" description="De zapallo." price="45.00" />
        </div>
    );
}

export default MenuContainer;