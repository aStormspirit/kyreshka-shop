// css
import 'normalize.css';
import './App.css'
// components
import HeaderTop from "./top-navigation/HeaderTop.js";
import HeaderBottom from "./bottom-navigation/HeaderBottom.js";
import Slider from './slider/Slider';
import Product from './product/Product'
import Corusel from './corusel/Corusel';
import Cart from './cart/Cart'
import Question from './question/Question';
import Post from './post/Post';
import Footer from './footer/Footer';

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
