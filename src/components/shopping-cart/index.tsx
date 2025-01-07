"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import type { RootState } from "@/store";

import CheckoutStatus from "../checkout-status";
import Item from "./item";
import exchangeRate from "@/pages/api/exchangeRate";

const ShoppingCart = () => {
  const { cartItems } = useSelector((state: RootState) => state.cart);
  const [totalPrice, setTotalPrice] = useState(0);

  const priceTotal = async () => {
    let totalPrice = 0;
    if (cartItems.length > 0) {
      for (const item of cartItems) {
        const convertedPrice = await exchangeRate(item.price);
        totalPrice += convertedPrice * item.count;
      }
    }
    return totalPrice;
  };

  useEffect(() => {
    const calculateTotalPrice = async () => {
      const totalPrice = await priceTotal();
      setTotalPrice(totalPrice);
    };
    calculateTotalPrice();
  }, [cartItems]);

  return (
    <section className="cart">
      <div className="container">
        <div className="cart__intro">
          <h3 className="cart__title">Shopping Cart</h3>
          <CheckoutStatus step="cart" />
        </div>

        <div className="cart-list">
          {cartItems.length > 0 && (
            <table>
              <tbody>
                <tr>
                  <th style={{ textAlign: "left" }}>Product</th>
                  <th>Color</th>
                  <th>Size</th>
                  <th>Ammount</th>
                  <th>Price</th>
                  <th />
                </tr>

                {cartItems.map((item) => (
                  <Item
                    key={item.id}
                    id={item.id}
                    thumb={item.thumb}
                    name={item.name}
                    color={item.color}
                    price={item.price}
                    size={item.size}
                    count={item.count}
                  />
                ))}
              </tbody>
            </table>
          )}

          {cartItems.length === 0 && <p>Nothing in the cart</p>}
        </div>

        <div className="cart-actions">
          <Link href="/products" className="cart__btn-back">
            <i className="icon-left" /> Continue Shopping
          </Link>
          <input
            type="text"
            placeholder="Promo Code"
            className="cart__promo-code"
          />

          <div className="cart-actions__items-wrapper">
            <p className="cart-actions__total">
              Total cost <strong>₦{totalPrice.toFixed(2)}</strong>
            </p>
            <Link
              href="/cart/checkout"
              className="btn btn--rounded btn--yellow"
            >
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShoppingCart;
