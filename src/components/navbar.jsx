"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { ShoppingCart } from "phosphor-react";
import "./navbar.css";
import { ShopContext } from "@/context/shop-context";

const Navbar = () => {
  const {} = useContext(ShopContext);
  return (
    <div className="navbar d-flex justify-content-end align-items-center">
      <div className="links">
        <Link href="/shop">Shop</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
