import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import SingleTeam from './pages/SingleTeam';
import Checkout from './pages/Checkout';
import CustomSwitch from './components/CustomSwitch/CustomSwitch'
const App = () => {
  return (
    <CustomSwitch>
      <Route exact path="/" element={<Home />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/product/:productid" element={<Product />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/aboutus" element={<AboutUs />} />
      <Route path="/aboutus/:memberName" element={<SingleTeam />} />
      <Route path="/checkout" element={<Checkout />} />
    </CustomSwitch>
  );
};

export default App;