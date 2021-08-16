import { useProductsContext } from '../contexts/ProductsContext';
import { useLocaleContext } from '../contexts/LocaleContext';

export default function Products() {
    const [ products ] = useProductsContext();
    const [ locale ] = useLocaleContext();
    let currency;
    
    if (locale === 'en-us') {
        currency = '$';
    } else if (locale === 'en-gb') {
        currency = '£';
    } else {
        currency = '€';
    }

    return (
        <div className="Products">
            {products.map(prod => <div>{prod.name}: {prod.price} {currency}</div>)}
        </div>
    )
}