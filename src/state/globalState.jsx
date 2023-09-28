import { useState } from 'react';
import StoreContext from './storeContext';


function GlobalState(props){
    const [cart, setCart]= useState([]);
    const [user, setUser]= useState({ id:1234, name: 'Tyler' });

    function addProductToCart(prod){
        //Modify and State Object or State Array
        //create a copy
        let copy = [...cart];
        //modify the copy
        copy.push(prod);
        //set the copy back
        setCart(copy);
        console.log("global add");
    }

    function removeProductFromCart(){
        console.log("global remove");
    }

    return (
        <StoreContext.Provider value={{
            cart: cart,
            user: user,
            addProductToCart: addProductToCart,
            removeProductFromCart: removeProductFromCart,

        }}>
            {props.children}
        </StoreContext.Provider>
    );
}

export default GlobalState;
