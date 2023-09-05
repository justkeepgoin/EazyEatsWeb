import React, { useState } from 'react';
import MenuList from './MenuList';
import CartButton from "./CartButton";
import CartModal from "./CartModal";

const App = () => {
  // 음식 메뉴 데이터
  const menuData = [
    { id: 1, name: '음식1', price: 6500, quantity: 0 },
    { id: 2, name: '음식2', price: 3000, quantity: 0 },
    { id: 3, name: '음식3', price: 15000, quantity: 0 },
    { id: 4, name: '음식4', price: 21000, quantity: 0 },
    { id: 5, name: '음식5', price: 7000, quantity: 0 },
  ];

  // 장바구니 아이템 상태 관련 함수
  const [cartItems, setCartItems] = useState([]);

  // 수량 업데이트 함수
  const updateCartItemQuantity = (itemId, newQuantity) => {
    // 장바구니 수량 업데이트
    const updatedCartItems = cartItems.map((item) =>
      item.id === itemId ? { ...item, quantity: newQuantity } : item
    );
    setCartItems(updatedCartItems);
  };

  // 장바구니 모달 열기/닫기 상태 관련 함수
  const [isCartModalOpen, setIsCartModalOpen] = useState(false);

  // 장바구니 모달 열기 함수
  const openCartModal = () => {
    setIsCartModalOpen(true);
  };
  // 장바구니 모달 닫기 함수
  const closeCartModal = () => {
    setIsCartModalOpen(false);
  };
  
  return (
    <div className="App">
      <h1>Market jeongly</h1>
      <CartButton openCartModal={openCartModal} />
      <MenuList menuData={menuData} />
      {isCartModalOpen && ( // 모달 열기 상태일 때만 모달을 렌더링
        <CartModal
          cartItems={cartItems}
          onUpdateCartItemQuantity={updateCartItemQuantity}
          onClose={closeCartModal}
        />
      )}
    </div>
  );
};

export default App;
