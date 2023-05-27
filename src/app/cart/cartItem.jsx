"use client";
import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import Image from "next/image";
import "./cart.css";

export const CartItem = (props) => {
  const { id, productName, price, productImage } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  return (
    <div className="cartItem">
      <Image src={productImage} alt="" width={200} />
      <div className="description">
        <p>
          <b>{productName}</b>
        </p>
        <p> Price: ${cartItems[id] * price}</p>
        <div className="countHandler">
          <button onClick={() => removeFromCart(id)}> - </button>
          <input
            value={cartItems[id]}
            onChange={(e) => updateCartItemCount(Number(e.target.value), id)}
          />
          <button onClick={() => addToCart(id)}> + </button>
        </div>
      </div>
    </div>
  );
};
