import "./App.css";
import MenuItem from "./MenuItem";

function App() {
  return (
    <div className="App">
      <MenuItem
        name="햄버거"
        price={6500}
        quantity={1}
        onAddToCart={(name, price, quantity) => {
          // 추가하기 버튼 클릭 핸들러 로직 구현
          console.log(
            `${quantity}개의 ${name}이(가) ${price}원으로 장바구니에 추가되었습니다.`
          );
        }}
      />
    </div>
  );
}

export default App;
