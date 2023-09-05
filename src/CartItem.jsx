import React from "react";

const CartItem = ({ item, updateCartItemQuantity }) => {
  return (
    <div className="cart-item">
      <div className="item-info">
        <span className="item-name">{item.name}</span>
        <span className="item-price">{item.price}원</span>
      </div>
      <div className="quantity-control">
        <button
          className="decrement-button"
          onClick={() => updateCartItemQuantity(item.id, item.quantity - 1)}
        >
          -
        </button>
        <span className="quantity">{item.quantity}</span>
        <button
          className="increment-button"
          onClick={() => updateCartItemQuantity(item.id, item.quantity + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
};

export default CartItem;
