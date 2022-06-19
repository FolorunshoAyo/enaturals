import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import Footer from '../components/Footer/Footer';
import { useParams } from 'react-router-dom';
import Announcement from '../components/Announcement/Announcement';
import { splitAndSpace } from '../usefulFunc';
import BlogsCategory from '../components/BlogCategory/BlogsCategory';

const BlogCategories = () => {
    const { category } = useParams();

    return (
        <>
            <Announcement />
            <Navbar />
            <PageTitle title={splitAndSpace(category, "-")} pageLocation={"Home | All Posts | " + category} params={category} />
            <BlogsCategory category={category}/>
            <Footer borderTop/>
        </>
    );
};



export default BlogCategories;