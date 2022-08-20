import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getProduct
 } from '../firebase/firebase';
import { limitToLast } from 'firebase/firestore';
const ItemDetailContainer = ()=>{
    const [results, setResults] = useState([])
    const [loading, setLoading] = useState(true)
    const [err, setErr] = useState('')
    const {id} = useParams()
    
    /* useEffect(() => {
        fetch('https://rickandmortyapi.com/api/character/' + id)
        .then((res) => res.json())
        .then((json) => {
            setResults(json)
        })
        .catch((err) => {
            console.error('entras')
            setErr('Ocurrió algo extraño!!')
        })
        .finally(()=>setIsLoading(false))
    }, [id]) */

    useEffect(() => {
        getProduct(id)
            .then((snp) => {
                setResults(
                    snp.docs.map((document) => ({
                        ...document.data(),
                        id: document.id,
                    }
                    ))
                )
            })
            .catch(() => setErr('Ocurrió un error'))
            .finally(() => setLoading(false))
    }, [id])
    console.log(results)
    if (loading){
        return  <div className="spinner-grow" style={{ width: `4rem`, height: `4rem` }} role="status">
        </div>
    }
    if (err.length > 0){
        console.error(err)
    }else{
    return (
        <div>
            <ItemDetail item={results}/>
        </div>
    )} 
}

export default ItemDetailContainer;