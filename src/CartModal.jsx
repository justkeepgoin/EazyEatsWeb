// CartModal.jsx
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const CartModal = ({ cartItems, onUpdateCartItemQuantity, onClose, onPay }) => {
  // 모달 내에서 장바구니 아이템, 금액 상태를 관리
  const [modalCartItems, setModalCartItems] = useState(cartItems);

  // 모달 내에서 장바구니 아이템 수량 업데이트
  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 1) {
      newQuantity = 1; // 양수값으로 출력되도록 설정
    }

  const updatedCartItems = modalCartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setModalCartItems(updatedCartItems);
    onUpdateCartItemQuantity(itemId, newQuantity);
};


  // 총 금액 계산
  const totalAmount = modalCartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  // 모달 렌더링
  return ReactDOM.createPortal(
    <div className="cart-modal">
      <div className="cart-content">
        <h2>장바구니</h2>
        {modalCartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <span className="item-name">{item.name}</span>
            <span className="item-price">{item.price}원</span>
            <div className="quantity-control">
              <button
                className="decrement-button"
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                -
              </button>
              <span className="quantity">{item.quantity}</span>
              <button
                className="increment-button"
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                +
              </button>
            </div>
          </div>
        ))}
        <div className="total-amount">
          총 금액: {totalAmount}원
        </div>
      </div>
      <button className="close-button" onClick={onClose}>
          취소
        </button>
        <button className="pay-button" onClick={onPay}>
          결제
        </button>
    </div>,
    document.getElementById('cart-modal-root')
  );
};

export default CartModal;
