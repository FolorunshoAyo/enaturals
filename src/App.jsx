import React from 'react';
import { Navigate, Route } from 'react-router-dom';
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
import './App.css';
import NetworkDetector from './Hoc/NetworkDetector';
import CustomerAccount from './pages/CustomerAccount';
import { Toaster } from "react-hot-toast"; 
import { useSelector } from 'react-redux';
import BlogCategories from './pages/BlogCategories';
import BlogSearch from './pages/BlogSearch';

const App = () => {
  const user = useSelector(state => state.user.currentUser);

  return (
    <>
      <Toaster 
      toastOptions={{
        duration: 3000,
        style: {
          width: "40%",
          fontSize: "15px",
          fontFamily: "Lato, sans-serif"
        }
      }}
      />
      <CustomSwitch>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/customer/account" element={ user? <CustomerAccount /> : <Navigate to="/"/>} />
        <Route exact path="/customer/order" element={user? <CustomerAccount /> : <Navigate to="/"/>} />
        <Route exact path="/customer/account/edit" element={user? <CustomerAccount /> : <Navigate to="/"/>} />
        <Route exact path="/customer/address" element={user? <CustomerAccount /> : <Navigate to="/"/>} />
        <Route exact path="/customer/account/changepass" element={user? <CustomerAccount /> : <Navigate to="/"/>} />
        <Route exact path="/customer/address/edit/:addressNo" element={user? <CustomerAccount /> : <Navigate to="/"/>} />
        <Route exact path="/customer/address/create" element={user? <CustomerAccount /> : <Navigate to="/"/>} />
        <Route exact path="/product/:productName" element={<Product />} />
        <Route exact path="/product-category/:productTag" element={<Shop />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blog/:blogTitle" element={<SingleBlogPost />} />
        <Route exact path="/blog/category/:category" element={<BlogCategories/>} />
        <Route exact path="/blog/search" element={<BlogSearch />} />
        <Route exact path="/gallery" element={<Gallery />} />
        <Route exact path="/reviews" element={<Reviews />} />
        <Route exact path="/aboutus" element={<AboutUs />} />
        <Route exact path="/aboutus/:memberName" element={<SingleTeam />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route path="*" element={<PageNotFound />} />
      </CustomSwitch>
    </>
  );
};

export default NetworkDetector(App);