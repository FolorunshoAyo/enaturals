import React from 'react';
import styled from 'styled-components';
import Rating from '../Rating/Rating';

const Reviews = styled.div`
    padding: 2rem 0;
`;

const Reviewer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ReviewerImgContainer = styled.div`
    flex: 0 0 20%;
    align-self: flex-start;
`;

const ReviewerImg = styled.img`
    height: 100%;
    width: 100%;
`;

const CommentText = styled.div`
    flex: 1;
    padding-left: 2rem;
`;

const Name = styled.p`
    font-size: 2rem;
    font-style: italic;
    font-family: Lato, sans-serif;
    color: #7E8485;
`;


const Review = styled.p`
    font-size: 1.5rem;
    color: #7E8485;
    font-family: Lato, sans-serif;
`;

const AllReviews = () => {
    return (
        <Reviews>
            <Reviewer>
                <ReviewerImgContainer>
                    <ReviewerImg src="../enaturals/enaturals7.jpg" alt="Reviewers Image"/>
                </ReviewerImgContainer>
                <CommentText>
                    <Name>Joseph</Name>
                    <Rating rating={2}/>
                    <Review>
                        The product is very nice, i really saw some changes in about 3-5 days
                        It's really nice to have a product that works wonders whenever applied.
                        In other words, this product is brilliant and i expect to see more of it.
                    </Review>
                </CommentText>
            </Reviewer>
        </Reviews>
    );
};


export default AllReviews;