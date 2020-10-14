import React from "react";
import "./Checkout.css";
import Subtotal from "./Subtotal";

function Checkout() {
  return (
    <div className="checkout">
      <div className="checkout_left">
        <img
          className="checkout_ad"
          src="https://images-eu.ssl-images-amazon.com/images/G/31/img20/Watches/GW/unrec/Sept/GW_PC_BUNK_watches1500x600._CB405140901_.jpg"
          alt="Ad"
        />
        <div>
          <h2 className="checkout_title">This is your Shopping Basket</h2>
        </div>
      </div>
      <div className="checkout_left">
        <Subtotal />
      </div>
    </div>
  );
}

export default Checkout;
