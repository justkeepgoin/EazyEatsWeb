import React from 'react';
import MenuItem from './MenuItem'; 
import styled from 'styled-components';


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
    <StyledListItem className="menu-list">
      {menuItems}
    </StyledListItem>
  );
};

const StyledListItem = styled.div`
display: center;
`;

export default MenuList;
