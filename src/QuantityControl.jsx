import React from "react";
import styled from 'styled-components';


const QuantityControl = ({ value, onUpdate }) => {
  const handleDecrement = () => {
    if (value > 1) { // 음수가 아닌 경우에만 감소
      onUpdate(value - 1);
    }
  };

  const handleIncrement = () => {
    onUpdate(value + 1);
  };

  return (
    <StyledQuantityControl className="quantity-control">
      <button className="decrement-button quantity-button" onClick={handleDecrement}>
        -
      </button>
      <span className="quantity">{value}</span>
      <button className="increment-button quantity-button" onClick={handleIncrement}>
        +
      </button>
    </StyledQuantityControl>
  );
};

const StyledQuantityControl = styled.div`
  span {
    padding: 5px 10px;
  }

  .quantity-button {
    padding: 5px 10px;
    margin: 5px; 
    cursor: pointer;

  }

  .decrement-button,
  .increment-button {
    background-color: #fff; 
    border: 1px solid #D8BFD8;
    color: black;

    &:hover {
      background-color: #E6E6FA;
    }
  }

`;

export default QuantityControl;
