// In App.js
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home';
import Product from './Pages/Product/Product';
import Headphones from './Pages/Headphones/Headphones';
import Speakers from './Pages/Speakers/Speakers';
import Checkout from './Pages/Chekout/Chekout'
import { CartProvider } from './Components/Context/CartContext';
import ScrollToTop from './Components/ScrollToTop';
import Earphones from './Pages/Earphones/Earphones';

function App() {
  return (
    <CartProvider>
      <div className="App">
        <BrowserRouter>
        <ScrollToTop/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product/:id" element={<Product />} />
            <Route path='/headphones' element={<Headphones />} />
            <Route path='/speakers' element={<Speakers />} />
            <Route path='/checkout' element={<Checkout />} />
            <Route path='/earphones' element={<Earphones />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </CartProvider>
  );
}

export default App;
