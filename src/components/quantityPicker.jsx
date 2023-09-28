import "./quantityPicker.css" 
import { useState } from "react";

function QuantityPicker(props){
    let [quantity, setQuantity] = useState(1);
    function decrease(){
        console.log("Decreasing quantity");
        // quantity = 100; //don't
        if(quantity===1) return;
        let val = quantity-1;
        setQuantity(val);
        props.onChange(val);
    }
    // So please create the increasing quantity logic yourself
    function increase(){
        console.log("Increasing quantity");
        // quantity = 100; //don't
        let val = quantity+1;
        setQuantity(val);
        props.onChange(val);
    }



    return(
        <div className="qt-Picker">
            {/* please create 2 buttons and a label to render the + and - symbol and use the component in the app.js */}
            <button className="btn btn-sm btn--outline-dark" disabled={quantity===1} onClick={decrease}> - </button>
            <label>{quantity}</label>
            <button className="btn btn-sm btn-outline-dark" onClick={increase}> + </button>
            
        </div>
    )
}

export default QuantityPicker;
