import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import PageTitle from '../components/PageTitle/PageTitle';
import Footer from '../components/Footer/Footer';
import { useLocation } from 'react-router-dom';
import Announcement from '../components/Announcement/Announcement';
import SearchBlog from '../components/SearchBlog/SearchBlog';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}


const BlogSearch = () => {
    const query = useQuery();
    const search = query.get("q");

    return (
        <>
            <Announcement />
            <Navbar />
            <PageTitle title={`Search: ${search}`} pageLocation={"Home | Search: " + search} params={search}/>
            <SearchBlog searchQuery={search} />
            <Footer borderTop/>
        </>
    );
};



export default BlogSearch;