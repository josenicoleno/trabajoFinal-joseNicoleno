import React from "react";
import { Link } from 'react-router-dom';

const Item = ({ id, titulo, precio, categorias, foto }) => {
    /* function onAddCallback(n) {
        alert(`${n} productos agregados`)
    }  */
    
    return (
        <div className="card bg-dark text-white h-100" style={{width: `18rem`, textAlign: `center`}}>
            <img className="card-img opacity-75" src={foto} alt={titulo} />
            <h5 className="card-title">{titulo}</h5>
            <p className="card-text"><b>Precio</b> {precio} {/* - <b>categoría:</b> {categorias} */}</p>
            <Link to={'/productos/' + id}>
                <button className="btn btn-primary">View details</button>
            </Link>

        </div>
    )
}
export default Item;