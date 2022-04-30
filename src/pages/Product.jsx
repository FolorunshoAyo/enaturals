import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import SingleProduct from '../components/SingleProduct/SingleProduct';
import Footer from '../components/Footer/Footer';
import Announcement from "../components/Announcement/Announcement";
import { useParams } from 'react-router-dom';
import { splitAndSpace } from '../usefulFunc';


const Product = () => {
    const { productName } = useParams();
    
    return(
        <>
            <Announcement /> 
            <Navbar />
            <PageTitle title={splitAndSpace(productName, "-")} pageLocation={"Home | Shop | ... | " + productName} params={productName}/>
            <SingleProduct productName={productName}/>
            <Footer borderTop/>
        </>
    );
};

export default Product;