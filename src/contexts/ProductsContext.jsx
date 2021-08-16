import React, { useState, useContext, useReducer } from 'react';

export const ProductsContext = React.createContext();

const initialProducts = [{id:1, name:"iPad", price:10}];

export function ProductsContextProvider(props) {
    const [products, dispatch] = useReducer( reducer, initialProducts);
    //const [products, setProducts] = useState([{id:1, name:"iPad", price:10}]);

    function reducer(previousState, action) {
        if (action.type === 'addProduct') {
            const id = Math.floor(Math.random() * 99999999999);
            // Destructure the previous array in order to get a new value (and not only a new pointer)
            const newState = [...previousState, {id: id, name: action.name, price: action.price}];
            return newState;
        } else if (action.type === 'deleteProduct') {
            const newState = previousState.filter((product) => product.id !== action.id )
            return newState;
        } else {
            return previousState;
        }
    }

    return (
        <ProductsContext.Provider value={[ products, dispatch ]}>
            {props.children}
        </ProductsContext.Provider>
    )
}

export const useProductsContext = () => {
    return useContext(ProductsContext);
}