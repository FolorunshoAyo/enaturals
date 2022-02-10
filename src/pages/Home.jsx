import React from 'react';
import Announcements from '../components/Announcements/Announcements';
import Navbar from '../components/Navbar/Navbar';
import Slider from '../components/Slider/Slider';
import Services from '../components/Services/Services';
import MajorProducts from '../components/MajorProducts/MajorProducts';
import Banner from '../components/Banner/Banner';
import SkincareKits from '../components/SkincareKits/SkincareKits';
import NewProducts from '../components/NewProducts/NewProducts';
import Testimonials from '../components/Testimonials/Testimonials';
import NewBlogPosts from '../components/NewBlogPosts/NewBlogPosts'
import Contact from '../components/Contact/Contact';
import Footer from '../components/Footer/Footer';

const Home = () => {
    return (
        <div style={{overflow: "hidden"}}>
            <Announcements />
            <Navbar />
            <Slider />
            <Services />
            <MajorProducts />
            <Banner />
            <SkincareKits />
            <NewProducts />
            <Testimonials />
            <NewBlogPosts />
            <Contact />
            <Footer borderTop={false}/>
        </div>
    );
}

export default Home;