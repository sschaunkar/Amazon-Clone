import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "./StateProvider";
import getBasketTotal from "./reducer";

function Subtotal() {
  const [{basket}, dispatch]=useStateValue();
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the Homework */}
              Subtotal({basket.length} items):<strong>{value}</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This Order contains a Gift
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)} //part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button className="checkout_btn">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
