import React, { useState, useContext } from 'react'
import ItemCount from "./ItemCount";
import { Link } from 'react-router-dom';
import CartContext from '../context/cartContext';

const ItemDetail = ({ item }) => {
    const [product, setProduct] = useState({ "id": item.id, "titulo": item.titulo, "precio": item.precio, "foto": item.foto, "cantidad": 0 })
    const [showItemCount, setShowItemCount] = useState(true)
    const [showList, setShowList] = useState(false)
    const cartContextValue = useContext(CartContext);

    function onAddCallback(n) {
        var product_= { "id": item.id, "titulo": item.titulo, "precio": item.precio, "foto": item.foto, "cantidad": n }
        setProduct(product_)
        cartContextValue.addProduct(product_, n)
       // const id = insertProduct({ "id": item.id, "titulo": item.titulo, "precio": item.precio, "foto": item.foto, "cantidad": n })
        //id && 
        setShowItemCount(false)
        alert(`${n} productos agregados correctamente`)
    }
    function clickListener(evento) {
        setShowList(!showList)
    }

    return (
        <CartContext.Consumer>{({addProduct}) => (
            <div>{!item.id
                ? (<h3>No hay elementos</h3>)
                : (<div className="container">
                    <div className="card">
                        <div className="container-fliud">
                            <div className="wrapper row">
                                <div className="preview col-md-6">
                                    <div className="preview-pic tab-content">
                                        <div className="tab-pane active" id="pic-1"><img src={item.foto} alt={item.titulo} /></div>

                                    </div>
                                </div>
                                <div className="details col-md-6">
                                    <h3 className="product-title">{item.titulo}</h3>
                                    <p className="product-description">{item.titulo}</p>
                                    {showItemCount
                                        ? <ItemCount stock={5} initial={1} onAdd={onAddCallback} />
                                        : (<>
                                            <h3>{product.cantidad}</h3>
                                            <Link to='/carrito'>
                                                <button className="btn btn-primary">Carrito</button>
                                            </Link></>
                                        )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>)
            }
            </div>
            )}
        </CartContext.Consumer>
    )
}

export default ItemDetail;