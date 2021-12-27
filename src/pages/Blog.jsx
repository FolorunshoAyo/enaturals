import React from 'react';
import NavBar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import BlogApp from '../compoonents/BlogApp/BlogApp';
import Footer from '../components/Footer/Footer';


const Blog = () => {
    return (
        <>
        <Navbar />
        <PageTitle title="Blog" pageLocation="Home | Blog" />
        <BlogApp />
        <Footer borderTop/>
        </>
    );
};


export default Blog;