import { useProductsContext } from '../contexts/ProductsContext';
import { useLocaleContext } from '../contexts/LocaleContext';
import { useState, useEffect } from 'react';

export default function Products() {
    const [ products, dispatch ] = useProductsContext();
    const [ locale ] = useLocaleContext();
    const [forEx, setCurrency] = useState(false);
    const currency = {
        symbol: '€',
        rate: 1,
    };

    useEffect(() => {
        fetch('http://data.fixer.io/api/latest?access_key=9ba2e53142e945a61f3506a5f548b646', 
        { method: 'GET' })
            .then(response => response.json())
            .catch(e => console.warn('error getting currency:', e))
            .then(result => setCurrency(result));
    }, []);

    if (locale === 'en-us') {
        currency.symbol = '$';
        currency.rate = forEx.rates.USD;
    } else if (locale === 'en-gb') {
        currency.symbol = '£';
        currency.rate = forEx.rates.GBP;
    } else if (locale === 'pt-br') {
        currency.symbol = 'R$';
        currency.rate = forEx.rates.BRL;}
    else {
        currency.symbol = '€';
        currency.rate = 1;
    }

    function deleteProduct (element) {
        dispatch({ type: 'deleteProduct', id: element.id})
    }

    return (
        <div className="Products">
            {products.map(prod => <div key={prod.id}>
                {prod.name}: {(prod.price * currency.rate).toFixed(2)} {currency.symbol} 
                <button className="inline" onClick={() => deleteProduct(prod)}>X</button>
            </div>)}
        </div>
    )
}