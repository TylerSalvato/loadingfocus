import { createContext } from 'react';


/**
 * 
 * Context
 * is interface, description of the data
 * it promises data
 * does not contains implementation
 * 
 */


const StoreContext = createContext({
    cart: [],
    user: {},
    addProductToCart: () => {},
    removeProductFromCart: () => {}
});


export default StoreContext;
