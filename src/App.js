// App.jsx
import React from 'react';
import MenuList from './MenuList';

const App = () => {
  // 음식 메뉴 데이터
  const menuData = [
    { id: 1, name: '음식1', price: 6500, quantity: 0 },
    { id: 2, name: '음식2', price: 3000, quantity: 0 },
    { id: 3, name: '음식3', price: 15000, quantity: 0 },
    { id: 4, name: '음식4', price: 21000, quantity: 0 },
    { id: 5, name: '음식5', price: 7000, quantity: 0 },
  ];

  return (
    <div className="App">
      <MenuList menuData={menuData} />
    </div>
  );
};

export default App;
