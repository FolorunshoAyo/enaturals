import React, { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
// import { posts as blogPosts } from '../../data';
import './AllBlogPosts.css';
import BlogPosts from '../BlogPosts/BlogPosts';
import { ArrowForwardIos } from '@mui/icons-material';
import { ArrowBackIos } from '@mui/icons-material';
import { useSelector } from 'react-redux';
import { Skeleton } from '@mui/material';
import { Grid } from '@mui/material';
import { Box } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getBlogs } from '../../redux/apiCalls';

const AllBlogPosts = ({ itemsPerPage }) => {
  const {blogs, isFetching} = useSelector(state => state.blogs);
  const [posts, setCurrentItems] = useState(blogs);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    getBlogs(dispatch);
  }, [dispatch]);

  useEffect(() => {
    const endOffset = itemOffset + itemsPerPage;
    setCurrentItems(blogs.slice(itemOffset, endOffset));
    setPageCount(Math.ceil(blogs.length / itemsPerPage));
  }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % blogs.length;
    setItemOffset(newOffset);
  };

  return (
    <div className="blogWrapper">
      {
        isFetching?
        <Grid container wrap="wrap" sx={{width: "75%", mx: "auto"}}>
          <Box sx={{ width: "100%", marginRight: 0.5, my: 5 }}>
            <Skeleton variant="rectangular" width="100%" height="200px"/>
            <Box sx={{ pr: 2 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Box>
          <Box sx={{ width: "100%", marginRight: 0.5, my: 5 }}>
            <Skeleton variant="rectangular" width="100%" height="200px"/>
            <Box sx={{ pr: 2 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Box>
          <Box sx={{ width: "100%", mmarginRight: 0.5, my: 5 }}>
            <Skeleton variant="rectangular" width="100%" height="200px"/>
            <Box sx={{ pr: 2 }}>
              <Skeleton />
              <Skeleton width="60%" />
            </Box>
          </Box>
        </Grid>
        :
        <>
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
        </>
      }
    </div>
  );
}


export default AllBlogPosts;
