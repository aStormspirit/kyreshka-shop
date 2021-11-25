// css
import 'normalize.css';
import './App.css'
// components
import HeaderTop from "./component/top-navigation/HeaderTop.js";
import HeaderBottom from "./component/bottom-navigation/HeaderBottom.js";
import Slider from './component/slider/Slider';
import Product from './component/product/Product'
import Corusel from './component/corusel/Corusel';
import Cart from './component/cart/Cart'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <HeaderTop />
        <HeaderBottom />
      </header>
      <main>
        <Slider />
        <Product />
        <Corusel />
        <Cart />
      </main>
    </div>
  );
}

export default App;
