import { useProductsContext } from '../contexts/ProductsContext';
import { useLocaleContext } from '../contexts/LocaleContext';

export default function Products() {
    const [ products, setProducts ] = useProductsContext();
    const [ locale ] = useLocaleContext();
    let currency;

    if (locale === 'en-us') {
        currency = '$';
    } else if (locale === 'en-gb') {
        currency = '£';
    } else {
        currency = '€';
    }

    function deleteProduct (element) {
        const newProducts = products.filter((product) => product.id !== element.id )
        setProducts(newProducts);
    }

    return (
        <div className="Products">
            {products.map(prod => <div key={prod.id}>
                {prod.name}: {prod.price} {currency} 
                <button className="inline" onClick={() => deleteProduct(prod)}>X</button>
            </div>)}
        </div>
    )
}