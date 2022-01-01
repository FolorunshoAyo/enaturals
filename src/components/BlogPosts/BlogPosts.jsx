import React from 'react';
import styled from 'styled-components';
import BlogPost from './BlogPost';
import {blogPosts} from '../../data';
import {res700} from '../../responsive';

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

const Container = styled.div`
    display: flex;
    justify-content: space-between;

    ${res700({width: "60%", margin: "0 auto", flexDirection: "column"})}
`;

const BlogPosts = () => {
    return (
        <Wrapper>
            <Title> Latest Blog Posts </Title>
            <Container>
                {blogPosts.map(blog => (
                    <BlogPost 
                    key={blog.id}
                    blogImg={blog.thumb}
                    title={blog.blogTitle}
                    date={blog.date}
                    />
                ))}
            </Container>
        </Wrapper>
    );
}


export default BlogPosts;