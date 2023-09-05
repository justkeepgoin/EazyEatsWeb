import React, { useState } from 'react';
import MenuList from './MenuList';
import CartButton from "./CartButton";
import CartModal from "./CartModal";
import styled from 'styled-components';

const App = () => {
  // 음식 메뉴 데이터
  const menuData = [
    { id: 1, name: '크림치즈', price: 4200, quantity: 0 },
    { id: 2, name: '짬뽕 밀키트', price: 12000, quantity: 0 },
    { id: 3, name: '블렌드 원두', price: 15000, quantity: 0 },
    { id: 4, name: '회냉면', price: 10800, quantity: 0 },
    { id: 5, name: '통살치킨', price: 7900, quantity: 0 },
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

  // 메뉴를 장바구니에 추가하는 함수
  const addToCart = (name, price, quantity) => {
    // 새로운 메뉴 아이템 생성
    const newItem = {
      id: cartItems.length + 1, // 임의의 ID 생성
      name,
      price,
      quantity,
    };
    setCartItems([...cartItems, newItem]);
  };

  // 장바구니 모달 열기, 닫기 상태 관련 함수
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
      <Header>
      <h1>Market jeongly</h1>
      <CartButton openCartModal={openCartModal} />
      </Header>
      <MenuList menuData={menuData} onAddToCart={addToCart} />
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

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 30px 0px 30px;
  background-color: #27005D;
  color: #FAFAFA;
  font: italic 1rem "Lato", sans-serif;
`;

export default App;
