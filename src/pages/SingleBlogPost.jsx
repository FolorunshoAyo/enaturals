import React from 'react';
import Footer from '../components/Footer/Footer';
import Navbar from '../components/Navbar/Navbar';
import BlogContent from "../components/BlogContent/BlogContent";
import PageTitle from '../components/PageTitle/PageTitle';



const SingleBlogPost = () => {
    return (
        <>
            <Navbar />
            <PageTitle title={"Types of relaxing massage to make you happy"} pageLocation={"Home | All Posts | ... | Types of Relaxing Massages to Make You Happy"}/>
            <BlogContent />
            <Footer borderTop/>
        </>
    );
};



export default SingleBlogPost