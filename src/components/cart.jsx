import "./cart.css";
import CartProduct from "./cartProduct";
import StoreContext from "../state/storeContext";
import { useContext } from "react";


function Cart() {
    let cart = useContext(StoreContext).cart;


    return  (
        <div className='cart'>
            <h1>Pay here to checkout</h1>
            <h3>You have {cart.length} products in your basket</h3>

            <div className="prod-list">
                {/* map cart into li and render product title*/}
                {cart.map((prod) =>
                <CartProduct key={prod._id} data={prod} /> 
                )}

            </div>
        </div>
    );
}

export default Cart;

/**
 * 
 * create CartProduct component
 * cart should render to CartProduct instead of li
 * -should pass data
 * 
 * CartProduct should receive props
 * and render the information
 * 
 */