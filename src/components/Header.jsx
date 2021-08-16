import { useProductsContext } from '../contexts/ProductsContext';
import { useLocaleContext } from '../contexts/LocaleContext';

export default function Header() {
    const [ products ] = useProductsContext();
    const [ , dispatch ] = useLocaleContext();

    return (
        <header>
            <h1>Product manager</h1>
            <p>Now with {products.length} products</p>
            <div>Currency: 
                <select id="currency" onChange={(e) => dispatch({ type: e.target.value })}>
                    <option value="de-de">Euro</option>
                    <option value="en-us">Dollar</option>
                    <option value="en-gb">Pound</option>
                </select>
            </div>
        </header>
    )
}