import React from "react";

export default function OrderCard({ product, price, quantity, onQuantityChange }) {
  const isDisabled = quantity === 0;

  return (
    <div className="order">
      <div>
        <h4>{product}</h4>
        <small>$ {price}</small>
      </div>

      <div className="order-quantity">
        <div
          className="order-button"
          style={{ backgroundColor: isDisabled ? "#bfbfbf" : "" }}
          onClick={() => !isDisabled && onQuantityChange(product, -1)}
        >
          -
        </div>
        <h4>{quantity}</h4>
        <div className="order-button" onClick={() => onQuantityChange(product, +1)}>
          +
        </div>
      </div>
    </div>
  );
}