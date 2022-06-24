import React from "react";
import styled from "styled-components";
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import {res750} from "../../responsive";
import { findAndReplace, formatDate } from '../../usefulFunc';
import { Link } from 'react-router-dom';

const SearchBlogPostItem = styled.div`
    margin-bottom: 20px;
    height: 600px;
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

const SearchBlogImgContainer = styled.div`
    position: relative;
    height: 60%;
    cursor: pointer;

    &:hover ${HoverDots}{
        opacity: 1;
    }

    ${res750({height: "60%"})}
`;

const SearchBlogImg = styled.img`
    width: 100%;
    height: 100%;
`;

const SearchBlogTitle = styled.h2`
    font-weight: 300;
    font-size: 2rem;
    text-transform: uppercase;
    margin: 10px 0;
    color: #4b5354;
`;

const SearchBlogPostDate = styled.div`
    margin-top: 1rem;
    display: flex;
    align-items: center;
    font-style: italic;
    font-family: Lato, sans-serif;
    color: #abb0b2;
    font-size: 1.5rem;
`;

const SearchBlogBodySnippet = styled.p`
    padding-top: 1.5rem;
    font-family: Lato, sans-serif;
    font-size: 1.4rem;
`;

const SearchBlogResult = ({photo, title, dateOfCreation, content}) => {
    const modBlogTitle = findAndReplace(title);
    return (
        <SearchBlogPostItem>
            <SearchBlogImgContainer>
                <Link to={`/blog/${modBlogTitle}`}>
                    <SearchBlogImg src={photo} alt="Blog"/>
                    <HoverDots>
                        ...
                    </HoverDots>
                </Link>
            </SearchBlogImgContainer>
            <SearchBlogTitle>
                <Link to={`/blog/${modBlogTitle}`} className="blogLink">
                    {title}
                </Link>
            </SearchBlogTitle>
            <SearchBlogPostDate>
                <AccessAlarmIcon style={{fontSize: 15, color: "#b8a398", marginRight: "10px"}}/> 
                {formatDate(dateOfCreation)}
            </SearchBlogPostDate>
            <SearchBlogBodySnippet dangerouslySetInnerHTML={{__html: content.slice(0, 100) + "..."}}>
            </SearchBlogBodySnippet>
        </SearchBlogPostItem>
    );
};


export default SearchBlogResult;