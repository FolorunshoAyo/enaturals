import React from 'react';
import styled from 'styled-components';

const BlogCard = styled.div`
    flex: 0 0 30%;
    height: 400px;
`;

const BlogImg = styled.div`
    height: 50%;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
`;

const BlogDesc = styled.div`
    padding: 1rem 2rem;
    text-align: center;
`;

const Title = styled.div`
    text-transform: uppercase;
    font-size: 2rem;
    padding: 1rem 0;
    font-weight: 700;
    color: #7e8485;
`;

const DateAndComments = styled.div`
    color: grey;
    font-size: 1.5rem;
`;

const Date = styled.span``;
const Comment = styled.span``;


const BlogPost = ({ blogImg, title, date}) => {
    return (
        <BlogCard>
            <BlogImg>
                <Image src={blogImg}/>
            </BlogImg>
            <BlogDesc>
                <Title>{title}</Title>
                <DateAndComments>
                    <Date>{date}</Date> | <Comment>1 Comment</Comment>
                </DateAndComments>
            </BlogDesc>    
        </BlogCard>
    );
}

export default BlogPost;