import React, { useState, useEffect, useCallback } from "react";
import styled from 'styled-components';
import QuantityControl from "./QuantityControl"; 

const MenuItem = ({ name, price, quantity, onAddToCart }) => {
  // 수량 상태와 이를 업데이트하는 함수
  const [itemQuantity, setItemQuantity] = useState(quantity);

  // 수량이 변경될 때마다 호출되는 콜백 함수
  useEffect(() => {
    // 수량이 음수가 되지 않도록 보정
    if (itemQuantity < 1) {
      setItemQuantity(1);
    }
  }, [itemQuantity]);

  // 수량 변경 핸들러
  const handleQuantityChange = useCallback(
    (newQuantity) => {
      setItemQuantity(newQuantity);
    },
    [setItemQuantity]
  );

  return (
    <StyledMenuItem className="menu-item">
      <TextElement>
      <h3>{name}</h3>
      <p>{price}원</p>
      </TextElement>
      <ButtonWrapper className="quantity-control">
      <QuantityControl value={itemQuantity} onUpdate={handleQuantityChange} />
      <button
        className="add-to-cart-button"
        onClick={() => {
          onAddToCart(name, price, itemQuantity);
          setItemQuantity(1);
        }}
      >
        추가하기
      </button>
      </ButtonWrapper>
    </StyledMenuItem>
  );
};

const StyledMenuItem = styled.div`
display: flex;
flex-direction: center;
align-items: center;
justify-content: space-between;
border: 1px solid #D8BFD8;
margin: 1rem 25rem;
padding: 0.2rem 2rem;
`;

const TextElement = styled.div`
display: flex;
flex-direction: column;
`;

const ButtonWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;

button {
  background-color: #4B0082;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin: 10px;

  &:hover {
    background-color: #27005D;
  }
}
`;

export default MenuItem;
