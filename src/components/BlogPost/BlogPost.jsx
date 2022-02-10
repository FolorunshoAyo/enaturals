import React from 'react';
import styled from 'styled-components';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import {res750 ,res1023, bigDesktop} from "../../responsive";

const BlogPostItem = styled.div`
    flex: 0 0 32%;
    margin-bottom: 20px;
    height: 500px;

    ${res1023({height: "550px"})}
    ${res750({flex: "0 0 500px", height: "0"})}
    ${bigDesktop({flex: "0 0 32%", height: "700px"})}
`;


const HoverDots = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    font-size: 7rem;
    background-color: #b8a3988a;
    color: #8be77c;
    display: flex;
    opacity: 0;
    align-items: center;
    justify-content: center;
    transition: all .3s ease-in;
`;

const BlogImgContainer = styled.div`
    position: relative;
    height: 40%;
    cursor: pointer;

    &:hover ${HoverDots}{
        opacity: 1;
    }

    ${res750({height: "60%"})}
`;

const BlogImg = styled.img`
    width: 100%;
    height: 100%;
`;

const BlogTitle = styled.h2`
    font-weight: 300;
    font-size: 2rem;
    text-transform: uppercase;
    margin: 10px 0;
    color: #4b5354;
`;

const BlogPostDate = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    font-style: italic;
    font-family: Lato, sans-serif;
    color: #abb0b2;
    font-size: 1.5rem;
`;

const BlogBodySnippet = styled.p`
    padding-top: 1.5rem;
    font-family: Lato, sans-serif;
    font-size: 1.4rem;
`;

const BlogPost = ({photo, title, dateOfCreation, content}) => {
    return (
        <BlogPostItem>
            <BlogImgContainer>
                <BlogImg src={photo} alt="Blog"/>
                <HoverDots>
                    ...
                </HoverDots>
            </BlogImgContainer>
            <BlogTitle>{title}</BlogTitle>
            <BlogPostDate>
                <AccessAlarmIcon style={{fontSize: 15, color: "#b8a398", marginRight: "10px"}}/> 
                {new Date(dateOfCreation).toDateString()}
            </BlogPostDate>
            <BlogBodySnippet>
                {content.substr(0, 400) + "..."}
            </BlogBodySnippet>
        </BlogPostItem>
    );
};




export default BlogPost;