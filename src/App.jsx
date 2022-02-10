import React from 'react';
import { Route } from 'react-router-dom';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Blog from './pages/Blog';
import Gallery from './pages/Gallery';
import AboutUs from './pages/AboutUs';
import SingleTeam from './pages/SingleTeam';
import Checkout from './pages/Checkout';
import CustomSwitch from './components/CustomSwitch/CustomSwitch';
import PageNotFound from './pages/PageNotFound';
import './App.css';

const App = () => {
  return (
    <CustomSwitch>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/product/:productid" element={<Product />} />
      <Route exact path="/blog" element={<Blog />} />
      <Route exact path="/gallery" element={<Gallery />} />
      <Route exact path="/aboutus" element={<AboutUs />} />
      <Route exact path="/aboutus/:memberName" element={<SingleTeam />} />
      <Route exact path="/checkout" element={<Checkout />} />
      <Route path="*" element={<PageNotFound />} />
    </CustomSwitch>
  );
};

export default App;