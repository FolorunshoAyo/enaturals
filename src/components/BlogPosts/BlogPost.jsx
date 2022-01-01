import React from 'react';
import styled from 'styled-components';
import {res700} from '../../responsive';

const BlogCard = styled.div`
    flex: 0 0 30%;
`;

const BlogImg = styled.div`
    height: 50%;

    ${res700({height: "30%"})}
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
`;

const BlogDesc = styled.div`
    padding: 1rem 2rem;
    text-align: center;

    ${res700({padding: "1rem 2rem 4rem"})}
`;

const Title = styled.h3`
    text-transform: uppercase;
    font-size: 2rem;
    padding: 1rem 0;
    font-weight: 700;
    color: #4B5354;
`;

const DateAndComments = styled.div`
    color: #ABB0B2;
    font-family: Lato, sans-serif;
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