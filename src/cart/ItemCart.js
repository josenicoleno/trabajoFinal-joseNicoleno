import React from "react";
import Item from "./Item";

const ItemCart = ({ items }) => {
    return (
        <>
            <div className="row">
                {items?.map((item) => <Item item={item} key={item.id} />)}
            </div>
            {/*  <!-- Single item --> */}

            <hr className="my-4" />
        </>)
}
export default ItemCart;