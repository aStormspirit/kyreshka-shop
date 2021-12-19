import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './component/App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Store from './store/Store'
import Product from './store/product/Product';
import NotFound from './component/NotFound'
import About from './component/About'
import { store } from './redux/store'
import { Provider } from 'react-redux'


ReactDOM.render(
  <React.StrictMode>

    <BrowserRouter>
      <Provider store={store}>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path='/store' element={<Store />} />
          <Route path="store/product/:id" element={<Product />} />
          <Route path='*' element={<NotFound />} />
          <Route path='/kyreshka-shop' element={<About />} />
        </Routes>
      </Provider>
    </BrowserRouter>

  </React.StrictMode>,
  document.getElementById('root')
);
