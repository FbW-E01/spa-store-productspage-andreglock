import { useEffect, useState } from 'react'
import { useProductsContext } from '../contexts/ProductsContext'

export default function CreateProduct() {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [products, dispatch] = useProductsContext();

    function createProduct(e) {
        dispatch({ type: 'addProduct', name: name, price: price});
    }

    return (
        <div>
            <input type="text" value={name} onChange={e => setName(e.target.value)} />
            <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
            <button onClick={createProduct}>Add product!</button>
        </div>
    )
}