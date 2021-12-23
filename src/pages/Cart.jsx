import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import OrderData from '../components/OrderData/OrderData';
import Footer from '../components/Footer/Footer';


const Cart = () => {
    return(
        <div>
            <Navbar />
            <PageTitle title="Cart" pageLocation="Home | Shop | Cart"/>
            <OrderData />
            <Footer borderTop={false}/>
        </div>
    );
};

export default Cart;