import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import SingleProduct from '../components/SingleProduct/SingleProduct';
import Footer from '../components/Footer/Footer';


const Product = () => {
    return(
        <div>
            <Navbar />
            <PageTitle title="Whitening oil" pageLocation="Home | Shop | ... | Whitening oil"/>
            <SingleProduct />
            <Footer borderTop/>
        </div>
    );
};

export default Product;