import React, { createContext, useState, useContext, useEffect } from 'react';
import { insertProduct, updateProduct, removeProduct, removeAllProducts } from '../firebase/firebase';

const CartContext = createContext({});
export const CartContextProvider = ({ products, children }) => {
    const [carrito, setCarrito] = useState(products)
    
    useEffect(() => {
        setCarrito(products)
    }, [products])

    const addProduct = async (product, quantity) => {
        //agregar una cantidad de un articulo
        const producto = {id: product.id, name:product.name, quantity:quantity}
        const id = await insertProduct(producto)
        const _carrito = products.concat(producto)
        setCarrito(_carrito)
    }

    const deleteProduct = (ProductId) => {
        //remover un articulo 
        const _carrito = products.filter((el, i) => i !== ProductId);
        try{
            removeProduct(products[ProductId].id)
            setCarrito(_carrito)
        }catch{}
    }
    const clear = () => {
        //remover todos los articulos
        const products_ = products.map((product) => ({...product}))
        removeAllProducts(products_)
      /*   const _carrito = {} */
        setCarrito(products_)
    }

    function  isInCart(id) {
        let bool = false

        return bool
    }

    return (
        <CartContext.Provider
            value={{
                products: carrito,
                addProduct,
                deleteProduct,
                clear,
                isInCart
            }}
        >
            {children}
        </CartContext.Provider>
    )
}

export const useCartContext = () => {
    const cartContextValue = useContext(CartContext)

    return cartContextValue
}

export default CartContext;