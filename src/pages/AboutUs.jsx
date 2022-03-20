import React from 'react';
import NavBar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import AboutUsInfo from '../components/AboutUsInfo/AboutUsInfo';
import Contact from '../components/Contact/Contact';
import GoogleMap from '../components/GoogleMap/GoogleMap';
import Footer from '../components/Footer/Footer';
import Announcement from '../components/Announcement/Announcement';



const AboutUs = () => {
    return(
        <>
            <Announcement />
            <NavBar />
            <PageTitle title="About Us" pageLocation="Home | About Us" />
            <AboutUsInfo />
            <Contact />
            <GoogleMap />
            <Footer borderTop={false}/>
        </>
    );
}

export default AboutUs;