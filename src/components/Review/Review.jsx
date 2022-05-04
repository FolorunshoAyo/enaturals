import React from "react";
import styled from "styled-components";
import Rating from "../Rating/Rating";

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

const ReviewContent = styled.p`
    font-size: 1.5rem;
    color: #7E8485;
    font-family: Lato, sans-serif;
`;



const Review = ({name, rating, review}) => {
    return (
        <>
            <Reviewer>
                <ReviewerImgContainer>
                    <ReviewerImg src="../enaturals/enaturals7.jpg" alt="Reviewers Image"/>
                </ReviewerImgContainer>
                <CommentText>
                    <Name>{name}</Name>
                    <Rating rating={rating}/>
                    <ReviewContent>
                        {review}
                    </ReviewContent>
                </CommentText>
            </Reviewer>
        </>
    );
};


export default Review;