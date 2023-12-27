import React, { useContext } from 'react'
import { useProductContext } from '../context/productContext';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';

const ProductList = () => {
    const cartCtx = useContext(CartContext);

    const { products, isLoading } = useProductContext();

    const clickHandler = (data) => {
        if (cartCtx.items.length > 0) {
            let copy = [...cartCtx.items];
            copy = copy.filter((element) => element.id === data.id);
            if (copy.length > 0) {
                cartCtx.quantityChange(copy[0].id);
            } else {
                let elem = { id: data.id, price: data.price, img: data.imageUrl, title: data.title, quantity: 1 };
                cartCtx.addCartItem({ ...elem })
            }
        }
        else {
            let elem = { id: data.id, price: data.price, img: data.imageUrl, title: data.title, quantity: 1 };
            cartCtx.addCartItem({ ...elem })
        }
    }

    // console.log(cartCtx.items);


    if (isLoading) {
        return (
            <div>...Loading</div>
        )
    }


    return (
        <section>
            <h2>MUSIC</h2>
            <div>
                {/* {products.map(data => {
                    return (
                        <div>
                            <div id={data.id} key={data.id}>
                                <h3>{data.name}</h3>
                                <Link to={`/singleProduct/${data.id}`}>
                                <div>
                                    <img src={data.imageUrl} alt={data.title}/>
                                </div>
                            </Link>
                            <div>
                                <span>
                                    $
                                    <span>{data.price}</span>
                                </span>
                                <button className={classes.button} onClick={() => clickHandler(data)}>ADD TO CART</button>
                            </div>
                        </div >

                    )
                })}\ */}
            </div>
        </section >
    )
}

export default ProductList