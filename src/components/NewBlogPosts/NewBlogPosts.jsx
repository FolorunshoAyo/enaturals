import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import NewBlogPost from './NewBlogPost';
// import {newBlogPosts} from '../../data';
import {res700} from '../../responsive';
import { publicRequest } from '../../requestMethod';
import toast from 'react-hot-toast';
import { CircularProgress } from '@mui/material';

const Wrapper = styled.div`
    margin-top: 8rem;
    padding: 0 8rem;
`;

const Title = styled.h2`
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 300;
    Margin-bottom: 5rem;
`;

const ProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

const NoNewBlogErr = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Lato, sans-serif;
    font-size: 2.5rem;
    height: 300px;
`;

const Container = styled.div`
    display: flex;
    justify-content: space-between;

    ${res700({width: "60%", margin: "0 auto", flexDirection: "column"})}
`;

const BlogPosts = () => {
    const [newBlogPosts, setNewBlogPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getNewBlogPosts = async () => {
            try{
                setLoading(true);
                const res = await publicRequest.get("/blogs/newBlogPosts");
                setNewBlogPosts(res.data);
                setLoading(false);            
            }catch(error){
                toast.error("Unable to get new blogs (501)");
            }
        };

        getNewBlogPosts();
    }, []);

    return (
        <Wrapper>
            <Title> Latest Blog Posts </Title>
            {
                loading?
                <ProgressWrapper>
                    <CircularProgress size="8rem"/>
                </ProgressWrapper>
                :
                (newBlogPosts.length === 0)?
                <NoNewBlogErr>
                    No new blogs to display
                </NoNewBlogErr>
                :
                <Container>
                    {newBlogPosts.map(newBlog => (
                        <NewBlogPost 
                            key={newBlog._id}
                            photo={newBlog.photo}
                            title={newBlog.title}
                            createdAt={newBlog.createdAt}
                        />
                    ))}
                </Container>
            }
        </Wrapper>
    );
}


export default BlogPosts;