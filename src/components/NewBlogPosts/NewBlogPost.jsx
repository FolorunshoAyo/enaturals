import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {res700} from '../../responsive';
import { findAndReplace, formatDate } from '../../usefulFunc';

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


const NewBlogPost = ({ photo, title, createdAt}) => {
    const blogLink = findAndReplace(title);

    return (
        <BlogCard>
            <BlogImg>
                <Image src={photo}/>
            </BlogImg>
            <BlogDesc>
                <Title>
                    <Link to={`/blog/${blogLink}`} className="blogLink">
                       {title}
                    </Link>
                </Title>
                <DateAndComments>
                    <Date>
                        {formatDate(createdAt)}
                    </Date>
                </DateAndComments>
            </BlogDesc>    
        </BlogCard>
    );
}

export default NewBlogPost;