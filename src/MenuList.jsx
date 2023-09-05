import React from 'react';
import MenuItem from './MenuItem'; 

const MenuList = ({ menuData, onAddToCart }) => {
  // slice, map 메소드 사용, MenuItem 컴포넌트로 변환
  const menuItems = menuData.slice(0, 5).map((item) => (
    <MenuItem
      key={item.id}
      name={item.name}
      price={item.price}
      quantity={item.quantity}
      onAddToCart={onAddToCart}
    />
  ));

  return (
    <div className="menu-list">
      {menuItems}
    </div>
  );
};

export default MenuList;
