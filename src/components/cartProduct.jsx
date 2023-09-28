import "./cartProduct.css" 

function CartProduct(props) {
    function getTotal() {
        const total = props.data.price * props.data.quantity; 
        return total.toFixed(2);
    }

    return (

        <div className="cart-product">
            <img src={'/images/' + props.data.image} alt=""></img>

            <div className="info">

            <h5>{props.data.title}</h5>
            <p>{props.data.category}</p>
            </div>

            <label>{props.data.price}</label>
            <label>{props.data.quantity}</label>
            <label className="total">{getTotal()}</label>
            
            

        </div>
    )
}

export default CartProduct;