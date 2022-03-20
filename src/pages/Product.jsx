import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import SingleProduct from '../components/SingleProduct/SingleProduct';
import Footer from '../components/Footer/Footer';
import Announcement from "../components/Announcement/Announcement";


const Product = () => {
    return(
        <>
            <Announcement /> 
            <Navbar />
            <PageTitle title="Whitening oil" pageLocation="Home | Shop | ... | Whitening oil"/>
            <SingleProduct />
            <Footer borderTop/>
        </>
    );
};

export default Product;