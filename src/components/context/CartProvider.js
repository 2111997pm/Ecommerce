import React from "react";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "./CartContext";
import AuthContext from "./AuthContext";

const CartProvider = (props) => {
  const authCtx = useContext(AuthContext);

  const [item, setItems] = useState([]);

  const onLogInRestore = async () => {
    if (authCtx.userEmail) {
      try {
        const email = authCtx.userEmail.replace(/[@.]/g, "");
        const res = await fetch(
          `https://63dba5e5b8e69785e4875188.mockapi.io/Ecommerce/${email}`
        );
        const data = await res.json();
        let array = [];
        data.forEach((element) => {
          if (element.cartItems.length !== 0) {
            array.push(element.cartItems[0]);
          }
        });
        setItems([...array]);
      } catch (error) {
        console.log("Something Went Wrong");
      }
    }
  };

  useEffect(() => {
    onLogInRestore();
  }, [authCtx.userEmail]);

  useEffect(() => {
    onLogInRestore();
  }, []);

  const addToCartHandler = (items) => {
    setItems([...item, items]);
    saveCartItems(item);
  };

  const removeCartItem = async (index) => {
    const newItems = [...item];
    let uniqId;
    try {
      const email = authCtx.userEmail.replace(/[@.]/g, "");
      const res = await fetch(
        `https://63dba5e5b8e69785e4875188.mockapi.io/Ecommerce/${email}`
      );

      const data = res.json();
      data.forEach((element) => {
        element.cartitem.forEach((cartitem) => {
          if (cartitem.id === newItems[index].id) {
            uniqId = element;
          }
        });
      });
    } catch (error) {
      console.log("product not awailable in cart");
    }
    newItems.splice(index, 1);
    setItems(newItems);
    try {
      const email = authCtx.userEmail.replace(/[@.]/g, "");
      await fetch(
        `https://63dba5e5b8e69785e4875188.mockapi.io/Ecommerce/${email}/${uniqId}`,
        {
          method: "DELETE",
        }
      );
    } catch (error) {
      console.log("delet error");
    }
  };
};
