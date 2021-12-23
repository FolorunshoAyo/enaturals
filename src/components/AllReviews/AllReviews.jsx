import React from 'react';
import styled from 'styled-components';
import Rating from '../Rating/Rating';

const Reviews = styled.div`
    padding: 2rem 0;
    overflow: scroll;
`;

const Reviewer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100px;
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
    font-size: 1.6rem;
    font-family: Lato, sans-serif;
    color: #7E8485;
`;


const Review = styled.p`
    font-size: 1.3rem;
    color: #7E8485;
`;

const AllReviews = () => {
    return (
        <Reviews>
            <Reviewer>
                <ReviewerImgContainer>
                    <ReviewerImg src="../enaturals/enaturals.jpg" alt="Reviewers Image"/>
                </ReviewerImgContainer>
                <CommentText>
                    <Name>joseph</Name>
                    <Rating rating={2}/>
                    <Review>That's nice</Review>
                </CommentText>
            </Reviewer>
        </Reviews>
    );
};


export default AllReviews;