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
import SingleBlogPost from './pages/SingleBlogPost';
import Reviews from './pages/Reviews';
import AdminLogin from './pages/AdminLogin';
import './App.css';

const App = () => {
  return (
    <CustomSwitch>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/shop" element={<Shop />} />
      <Route exact path="/cart" element={<Cart />} />
      <Route exact path="/product/:productName" element={<Product />} />
      <Route exact path="/product-tag/:productTag" element={<Shop />} />
      <Route exact path="/blog" element={<Blog />} />
      <Route exact path="/blog/:blogTitle" element={<SingleBlogPost />} />
      <Route exact path="/gallery" element={<Gallery />} />
      <Route exact path="/reviews" element={<Reviews />} />
      <Route exact path="/aboutus" element={<AboutUs />} />
      <Route exact path="/aboutus/:memberName" element={<SingleTeam />} />
      <Route exact path="/checkout" element={<Checkout />} />
      <Route exact path="/admin" element={<AdminLogin />} />
      <Route path="*" element={<PageNotFound />} />
    </CustomSwitch>
  );
};

export default App;