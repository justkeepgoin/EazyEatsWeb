import React from "react";

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
    <div className="quantity-control">
      <button className="decrement-button" onClick={handleDecrement}>
        -
      </button>
      <span className="quantity">{value}</span>
      <button className="increment-button" onClick={handleIncrement}>
        +
      </button>
    </div>
  );
};

export default QuantityControl;
