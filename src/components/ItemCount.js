import React, { useState } from "react";

const ItemCount = ({ stock, initial, onAdd}) => {
    const [count, setCount] = useState(initial)

    const incrementar = () => {
        setCount(count + 1)
    }
    const decrementar = () => {
        setCount(valAnt => valAnt > 1 ? count - 1 : count)
    }
    const agregarCarrito = () => {
        count <= stock ? onAdd(count) : alert("No hay suficientes productos")
    }

    return (
        <div>
            <h3>{count}</h3>
            <button onClick={decrementar}>-</button>
            <button onClick={incrementar}>+</button>
            <button onClick={agregarCarrito}>Agregar al carrito</button>
        </div>
    )
}
export default ItemCount;