import { useContext } from "react";;
import { CartContext } from "../context/CartContext";

const cartItems = (props){
    
    const cartCtx = useContext(CartContext);

    let total = 0;
    cartCtx.items.forEach((element)=>{
        total += Number(element.price) * Number(element.quantity)
    })

    const deleteHandler = (e)=>{
        e.preventDefault();
        const eleIdx = e.target.id;
        cartCtx.removeToCart(eleIdx)
    }
    const quantityChangeHandler = (e)=>{
        console.log(e.target.id);
    }
    const purchaseHandler = ()=>{
        alert("Thanks for Purchase")
        cartCtx.emptyCart()
    }


    if(cartCtx.items.length === 0){
        return (
            <div>
                <h3>Cart Items</h3>
                <button onClick={props.onHideCart}>X</button>
                <p>Cart Is empty</p>
            </div>
        )

    }else{
        return(
            <>
            <button onClick={props.onHideCart}>X</button>
                <h3>Cart Items</h3>
                {cartCtx.items.map((data,idx)=>(
                    <div key={idx}>
                    <span>{data.title}</span>
                    </div>
                ))}
            </>
        )
    }


}

export default cartItems;