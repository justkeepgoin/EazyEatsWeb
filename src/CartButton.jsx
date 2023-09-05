import React from 'react';
import styled from 'styled-components';

const CartButton = ({ openCartModal }) => {
  return (
    <StyledCartButton className="cart-button" onClick={openCartModal}>
      장바구니
    </StyledCartButton>
  );
};

const StyledCartButton = styled.button`
  background-color: #fff;
  color: #27005D;
  padding: 15px 50px;
  border: none;
  border-radius: 15px;
  cursor: pointer;

  &:hover {
    background-color: #E6E6FA;
  }
`;

export default CartButton;
