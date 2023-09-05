import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import styled from "styled-components";

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
  const totalAmount = modalCartItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  // 모달 렌더링
  return ReactDOM.createPortal(
    <Overlay>
      <ModalWrap className="cart-modal">
        <div className="cart-content">
          <h2>장바구니</h2>
          {modalCartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <Card>
                <CartItemText>
                <span className="item-name">{item.name}</span>
                <span className="item-price">{item.price}원</span>
                </CartItemText>
                <QuantityWrapper>
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
                </QuantityWrapper>
              </Card>
            </div>
          ))}
          <AmountCard className="total-amount">
            전체 금액 : {totalAmount}원
          </AmountCard>
        </div>
        <ModalButton>
        <button className="close-button" onClick={onClose}>
          취소
        </button>
        <button className="pay-button" onClick={onPay}>
          결제
        </button>
        </ModalButton>
      </ModalWrap>
    </Overlay>,
    document.getElementById('cart-modal-root')
  );
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

const ModalWrap = styled.div`
  width: 600px;
  height: fit-content;
  border-radius: 15px;
  background-color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  h2 {
    margin: 1rem;
    padding: 1rem;
  }
`;

const Card = styled.div`
display: flex;
flex-direction: center;
align-items: center;
justify-content: space-between;
border: 1px solid;
margin: 2% 20% 2% 20%;
padding: 1rem;
`;

const CartItemText = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`;

const QuantityWrapper = styled.div`
display: flex;
align-items: center;

button {
  background-color: #4B0082;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin: 10px;
}
`;

const AmountCard = styled.div`
display: flex;
flex-direction: row-reverse;
align-items: center;
margin: 2% 20% 2% 20%;
padding: 1rem;
font: small-caps bold 24px/1 sans-serif;
`;

const ModalButton = styled.div`
display: flex;
flex-direction: row-reverse;
align-items: center;
margin: 1rem;
padding: 1rem;

.close-button,
.pay-button {
  background-color: #4B0082;
  color: #fff;
  padding: 10px 30px;
  margin: 5px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}
`;


export default CartModal;
