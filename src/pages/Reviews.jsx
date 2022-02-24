import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import Footer from '../components/Footer/Footer';
import ScrapeReviews from '../components/ScapeReviews/ScrapeReviews';


const Reviews = () => {
    
    return(
        <>
            <Navbar />
            <PageTitle title="Reviews" pageLocation="Home | Reviews" />
            <ScrapeReviews />
            <Footer borderTop={false}/>
        </>
    );
};




export default Reviews;