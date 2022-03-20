import React from 'react';
import styled from 'styled-components';
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import PaymentForm from '../components/PaymentForm/PaymentForm';
import Footer from '../components/Footer/Footer';
import Announcement from '../components/Announcement/Announcement';


const Checkout = () => {
    return (
        <>
            <Announcement />
            <Navbar />
            <PageTitle title="Checkout" pageLocation="Home | Shop | Checkout"/>
            <PaymentForm />
            <Footer borderTop={false}/>
        </>
    );
} 


export default Checkout;