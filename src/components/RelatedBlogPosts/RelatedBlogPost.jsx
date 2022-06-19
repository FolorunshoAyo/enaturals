import React from "react";
import styled from "styled-components";
import { formatDate } from "../../usefulFunc";
import { res700, res1023 } from "../../responsive";

const RelatedBlog = styled.div`
flex: 0 0 48%;

&:not(:last-child){
  ${res700({marginBottom: "20px"})}
}

${res700({flex: "initial"})}
`;

const RelatedBlogImg = styled.img`
width: 100%;
height: 160px;
margin-bottom: 10px;

${res1023({height: "180px"})}
`;

const RelatedPostHeader = styled.div`
text-align: center;
font-size: 1.5rem;
display: flex;
flex-direction: column;
`;

const RelatedPostDate = styled.span`
color: #ACBFA3;
font-family: Lato, sans-serif;
`;

const RelatedPostTitle = styled.span`
color: #4b5354;
text-transform: uppercase;
font-weight: 300;
`; 


const RelatedBlogPost = ({photo, title, createdAt}) => {
    return (
        <RelatedBlog>
            <RelatedBlogImg src={photo} alt="Related media attachment"/>
            <RelatedPostHeader>
                <RelatedPostDate>{formatDate(createdAt)}</RelatedPostDate>
                <RelatedPostTitle>{title}</RelatedPostTitle>
            </RelatedPostHeader>
        </RelatedBlog>
    );
};


export default RelatedBlogPost;