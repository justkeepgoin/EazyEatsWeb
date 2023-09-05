import React from 'react';

const CartButton = ({ openCartModal }) => {
  return (
    <button className="cart-button" onClick={openCartModal}>
      장바구니
    </button>
  );
};

export default CartButton;
