import React, { useState, useEffect, useCallback } from "react";
import QuantityControl from "./QuantityControl"; // QuantityControl 컴포넌트를 import

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
    <div className="menu-item">
      <h3>{name}</h3>
      <p>{price}원</p>
      <div className="quantity-control">
        <QuantityControl value={itemQuantity} onUpdate={handleQuantityChange} /> {/* QuantityControl 컴포넌트를 렌더링 */}
      </div>
      <button
        className="add-to-cart-button"
        onClick={() => {
          onAddToCart(name, price, itemQuantity);
          setItemQuantity(1);
        }}
      >
        추가하기
      </button>
    </div>
  );
};

export default MenuItem;
