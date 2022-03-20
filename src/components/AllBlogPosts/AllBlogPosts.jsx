import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { posts as blogPosts } from '../../data';
import './AllBlogPosts.css';
import BlogPosts from '../BlogPosts/BlogPosts';
import { ArrowForwardIos } from '@mui/icons-material';
import { ArrowBackIos } from '@mui/icons-material';

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
  };

  return (
    <div className="blogWrapper">
        <BlogPosts posts={posts} />
        <div className="paginationContainer">
            <ReactPaginate
            nextLabel={<ArrowForwardIos className="paginationIcon"/>}
            breakLabel="..."
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={<ArrowBackIos className="paginationIcon"/>}
            containerClassName={'reviewPagination'}
            activeClassName={'active'}
            />
        </div>
    </div>
  );
}


export default AllBlogPosts;
