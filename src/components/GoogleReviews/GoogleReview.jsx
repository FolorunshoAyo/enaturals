import React from "react";
import styled from "styled-components";
import Rating from "../Rating/Rating";
import { smallPhone } from "../../responsive";


const ReviewItem = styled.div`
    background-color: #F2EEEC;
    display: flex;
    padding: 3rem 1.5rem;
    border-radius: 10px;

    &:not(:last-child){
        margin-bottom: 20px;
    }
`;

const ReviewImageContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 20px;

    ${smallPhone({alignItems: "flex-start"})}
`;

const ReviewImg = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;

    ${smallPhone({width: "50px", height: "50px"})}
`;

const ReviewInfo = styled.div`
    display: flex;
    flex-direction: column;
`;

const ReviewAuthor = styled.h3`
    font-size: 2rem;
    font-family: Lato, sans-serif;
    color: #4b5354;
`;

const Review = styled.p`
    font-size: 1.5rem;
    font-family: Lato, sans-serif;
`;



const GoogleReview = ({ image, authorName, testimonial, rating }) => {
    return (
        <ReviewItem>
            <ReviewImageContainer>
                <ReviewImg src={image} alt="enaturals logo" />
            </ReviewImageContainer>
            <ReviewInfo>
                <ReviewAuthor> {authorName} </ReviewAuthor>
                <Rating rating={rating} starSize={25} />
                <Review>{testimonial}</Review>
            </ReviewInfo>
        </ReviewItem>
    );
};




export default GoogleReview;