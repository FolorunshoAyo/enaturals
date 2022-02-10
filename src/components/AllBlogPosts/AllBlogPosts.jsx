import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';
import { blogPosts } from '../../data';
import BlogPosts from '../BlogPosts/BlogPosts';
import './AllBlogPosts.css';
import {res750} from '../../responsive';


const BlogWrapper = styled.div`
    padding: 9.5rem 0;

    ${res750({padding: "6rem 0"})}
`;

const AllBlogPosts = ({ itemsPerPage }) => {
  const [posts, setCurrentItems] = useState(blogPosts);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(blogPosts.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(blogPosts.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blogPosts.length;
    setItemOffset(newOffset);
    window.scrollTo(0, 350);
  };

  return (
    <BlogWrapper>
        <BlogPosts posts={posts} />
        <div className="paginationContainer">
            <ReactPaginate
            nextLabel={<ArrowForwardIosIcon />}
            breakLabel="..."
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={<ArrowBackIosIcon />}
            containerClassName={'reviewPagination'}
            activeClassName={'active'}
            />
        </div>
    </BlogWrapper>
  );
}


export default AllBlogPosts;
