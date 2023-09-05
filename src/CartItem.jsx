import React from "react";
import QuantityControl from "./QuantityControl";

const CartItem = ({ item }) => {
  return (
    <div className="cart-item">
      <div className="item-info">
        <span className="item-name">{item.name}</span>
        <span className="item-price">{item.price}원</span>
      </div>
      <QuantityControl value={item.quantity} onUpdate={(newQuantity) => handleQuantityChange(newQuantity)} />
    </div>
  );
};

export default CartItem;
