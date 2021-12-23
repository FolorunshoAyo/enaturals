import React from 'react';
import NavBar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import GridGallery from '../components/GridGallery/GridGallery';
import Footer from '../components/Footer/Footer';
import SimpleReactLightbox from 'simple-react-lightbox'

const Gallery = () => {
    return (
        <>
            <NavBar />
            <PageTitle title="Gallery" pageLocation="Home | Gallery"/>
            <SimpleReactLightbox>
                <GridGallery />
            </SimpleReactLightbox>
            <Footer />
        </>
    );
};

export default Gallery;