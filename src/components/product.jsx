import "./product.css";
import QuantityPicker from '../components/quantityPicker';
import StoreContext from "../state/storeContext";
import { useContext, useEffect, useState } from "react";

//when the component is loaded, console.log("component loaded");


function Product(props){
    const [quantity, setQuantity] = useState(1);

    const addProductToCart = useContext(StoreContext).addProductToCart; 

    useEffect(function(){
        //when the component is loaded
        console.log("component loaded");
    },[]);

    function onQuantityChange(value){
        console.log('quantity has changed', value);
        setQuantity(value);
    }

    function getTotal(){
        const total = quantity * props.data.price;
        return total.toFixed(2);
    }

    function handleAdd(){
        console.log("a message");
        let prodForCart = {...props.data}; // copy an object
        prodForCart.quantity = quantity;
        addProductToCart(prodForCart);
    }

    return(
        <div className="product">

            <img src={"/images/" + props.data.image} alt="cakes"></img>
            <h5> {props.data.title} </h5>

            <div className='prices'>
            <label className="price"> ${props.data.price.toFixed(2)} </label>
            <label className="total"> ${getTotal()} </label>
            </div>

            {/*here we want to add the Qt-picker*/}
            <QuantityPicker onChange={onQuantityChange}/>
            

            <button onClick={handleAdd} className="btn btn-sm btn-success">Add<i class="fa-solid fa-cart-plus"></i></button>

        </div>
        
    );

}

export default Product;


/**
 * 
 * 
 * click on the button
 * call a function ('handleAdd')
 * the function should console log a message
 * 
 */

//create a Product component inside of the -- clear
//components folder (with a h5 for the title) -- clear
//render a <QuantityPicker/> inside of Product -- clear
//render the product component in the catalog - 5 times