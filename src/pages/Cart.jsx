import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import OrderData from '../components/OrderData/OrderData';
import Footer from '../components/Footer/Footer';
import Announcement from '../components/Announcement/Announcement';


const Cart = () => {
    return(
        <>
            <Announcement />
            <Navbar />
            <PageTitle title="Cart" pageLocation="Home | Shop | Cart"/>
            <OrderData />
            <Footer borderTop={false}/>
        </>
    );
};

export default Cart;