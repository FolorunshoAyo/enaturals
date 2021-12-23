import React from 'react';
import styled from 'styled-components';
import Rating from '../Rating/Rating';

const Reviews = styled.div`
    padding: 2rem 0;
    overflow: auto;
`;

const Reviewer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 80px;
`;

const ReviewerImgContainer = styled.div`
    flex: 0 0 20%;
`;

const ReviewerImg = styled.img`
    height: 100%;
    width: 100%;
`;

const CommentText = styled.div`
    flex: 1;
    padding-left: 2rem;
`;

const Name = styled.em`
    font-size: 2rem;
    font-family: Lato, sans-serif;
    color: #7E8485;
`;


const Review = styled.p`
    font-size: 1.5rem;
    width: 80%;
    color: #7E8485;
`;

const AllReviews = () => {
    return (
        <Reviews>
            <Reviewer>
                <ReviewerImgContainer>
                    <ReviewerImg src="../enaturals/enaturals7.jpg" alt="Reviewers Image"/>
                </ReviewerImgContainer>
                <CommentText>
                    <Name>joseph</Name>
                    <Rating rating={2}/>
                    <Review>That's nice bfywfq bfywbfywqbfq hwqbywqbqfbwq hbwqc whqc  cwqbcwqc</Review>
                </CommentText>
            </Reviewer>
        </Reviews>
    );
};


export default AllReviews;