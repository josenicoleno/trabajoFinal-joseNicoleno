import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import SearchForm from "./SearchForm";
import { getProducts } from "../firebase/firebase";

const ItemListContainer = ({ greeting }) => {
    /* function onAddCallback(n) {
        alert(`${n} productos agregados`)
    } */

    const [loading, setLoading] = useState(true)
    const [list, setList] = useState([])
    const [err, setErr] = ('')

    const searchWords = (str) => {
        /*  fetch("https://rickandmortyapi.com/api/character/?name=" + str)
             .then((res) => res.json())
             .then((json) => {
                 setList(json.results)
             })
             .catch(() => {
                 setErr('Ocurrió un error')
                 alert(err)
             })
             .finally(() => setLoading(false)) */
    }

    useEffect(() => {
        getProducts()
            .then((snp) => {
                setList(
                    snp.docs.map((document) => ({
                        ...document.data(),
                        id: document.id,
                    }
                    ))
                )
            })
            .catch(() => setErr('Ocurrió un error'))
            .catch(() => alert(err))
            .finally(() => setLoading(false))
    }, [])
    
    return (
        <div className="container py-12" style={{ textAlign: `center` }}>
            {/* {greeting}
            <ItemCount stock={5} initial={1} onAdd={onAddCallback} /> */}
            <SearchForm onSearch={searchWords} />
            {loading
                ? (
                    <div className="spinner-grow" style={{ width: `4rem`, height: `4rem` }} role="status">
                    </div>
                ) : (
                    <div className="container py-5">
                        <ItemList items={list} />
                    </div>
                )
            }
        </div>
    )
}
export default ItemListContainer;