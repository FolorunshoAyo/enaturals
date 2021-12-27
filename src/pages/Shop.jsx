import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import ProductList from '../components/ProductList/ProductList';
import Footer from '../components/Footer/Footer';


const Shop = () => {
    return(
        <div>
            <Navbar />
            <PageTitle title="Shop" pageLocation="Home | Shop"/>
            <ProductList />
            <Footer borderTop/>
        </div>
    );
};

export default Shop;