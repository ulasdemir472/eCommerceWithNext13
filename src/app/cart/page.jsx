"use client";
import React, { useContext } from "react";
import { ShopContext } from "@/context/shop-context";
import { PRODUCTS } from "@/product";
import { CartItem } from "./cartItem";
import "./cart.css";
import Link from "next/link";
import { SmileySad } from "phosphor-react";

const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();

  return (
    <div className="cart">
      <div>
        <h1>Your Cart Items</h1>
      </div>
      <div className="cart">
        {PRODUCTS.map((product) => {
          if (cartItems[product.id] !== 0) {
            return <CartItem key={product.id} data={product} />;
          }
        })}
      </div>
      {totalAmount > 0 ? (
        <div className="checkout">
          <p>Subtotal : ${totalAmount}</p>
          <Link href="/shop">Continue Shopping</Link>
        </div>
      ) : (
        <div>
          {" "}
          <SmileySad size={250} />
          <h3 className="mt-4">Your Cart is Empty</h3>
        </div>
      )}
    </div>
  );
};

export default Cart;
