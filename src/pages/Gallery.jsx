import React from 'react';
import NavBar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import GridGallery from '../components/GridGallery/GridGallery';
import Footer from '../components/Footer/Footer';
import SimpleReactLightbox from 'simple-react-lightbox'
import Announcement from '../components/Announcement/Announcement';

const Gallery = () => {
    return (
        <>
            <Announcement />
            <NavBar />
            <PageTitle title="Gallery" pageLocation="Home | Gallery"/>
            <SimpleReactLightbox>
                <GridGallery />
            </SimpleReactLightbox>
            <Footer borderTop/>
        </>
    );
};

export default Gallery;