import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import ProductList from '../components/ProductList/ProductList';
import Footer from '../components/Footer/Footer';
import Announcement from '../components/Announcement/Announcement';
import { useParams } from 'react-router-dom';
import { splitAndSpace } from '../usefulFunc';

const Shop = () => {
    const { productTag } = useParams();

    if(productTag){
        return(
            <>
                <Announcement />
                <Navbar />
                <PageTitle title={splitAndSpace(productTag, "-")} pageLocation={"Home | Shop | " + productTag} params={productTag}/>
                <ProductList />
                <Footer borderTop/>
            </>
        );
    }else{
        return(
            <>
                <Announcement />
                <Navbar />
                <PageTitle title="Shop" pageLocation="Home | Shop"/>
                <ProductList />
                <Footer borderTop/>
            </>
        );
    }
};

export default Shop;