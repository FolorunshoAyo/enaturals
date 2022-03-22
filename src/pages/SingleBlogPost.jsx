import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import BlogContent from "../components/BlogContent/BlogContent";
import PageTitle from '../components/PageTitle/PageTitle';
import Footer from '../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import Announcement from '../components/Announcement/Announcement';
import { splitAndSpace } from '../usefulFunc';

const SingleBlogPost = () => {
    const { blogTitle } = useParams();

    return (
        <>
            <Announcement />
            <Navbar />
            <PageTitle title={splitAndSpace(blogTitle, "-")} pageLocation={"Home | All Posts | ... | " + blogTitle} params={blogTitle} />
            <BlogContent />
            <Footer borderTop/>
        </>
    );
};



export default SingleBlogPost;