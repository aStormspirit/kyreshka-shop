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
import Question from './component/question/Question';
import Post from './component/post/Post';
import Footer from './component/footer/Footer';

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
        <Question />
        <Post />
      </main>
      <Footer />
    </div>
  );
}

export default App;
