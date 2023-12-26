import React, { createContext } from "react";

export const CartContext = createContext({
    items:[],
    addToCart : (item)=>{},
    removeToCart:(item)=>{},
    emptyCart:()=>{},
    quantityChange:()=>{},
    onLogIn:()=>{}
})