import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import Footer from '../components/Footer/Footer';
import Announcement from '../components/Announcement/Announcement';
import CheckoutDetails from '../components/CheckoutDetails/CheckoutDetails';


const Checkout = () => {
    return (
        <>
            <Announcement />
            <Navbar />
            <PageTitle title="Checkout" pageLocation="Home | Shop | Checkout"/>
            <CheckoutDetails />
            <Footer borderTop={false}/>
        </>
    );
} 


export default Checkout;