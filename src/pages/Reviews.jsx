import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import Footer from '../components/Footer/Footer';
// import ScrapeReviews from '../components/ScrapeReviews/ScrapeReviews';
import Announcement from '../components/Announcement/Announcement';
import GoogleReviews from '../components/GoogleReviews/GoogleReviews';


const Reviews = () => {
    
    return(
        <>
            <Announcement />
            <Navbar />
            <PageTitle title="Reviews" pageLocation="Home | Reviews" />
            <GoogleReviews itemsPerPage={10} />
            <Footer borderTop={false}/>
        </>
    );
};




export default Reviews;