import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";

function Subtotal() {
  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              {/* Part of the Homework */}
              Subtotal(0 items):<strong>0</strong>
            </p>
            <small className="subtotal_gift">
              <input type="checkbox" />
              This Order contains a Gift
            </small>
          </>
        )}
        decimalScale={2}
        value={0} //part of the homework
        displayType={"text"}
        thousandSeparator={true}
        prefix={"₹"}
      />
      <button className="checkout_btn">Proceed to Checkout</button>
    </div>
  );
}

export default Subtotal;
