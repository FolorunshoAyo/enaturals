import React from 'react';
import NavBar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import AllBlogPosts from '../components/AllBlogPosts/AllBlogPosts';
import Footer from '../components/Footer/Footer';


const Blog = () => {
    return (
        <>
        <NavBar />
        <PageTitle title="All Posts" pageLocation="Home | Blog" />
        <AllBlogPosts itemsPerPage={6}/>
        <Footer borderTop/>
        </>
    );
};


export default Blog;