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



const Review = ({fullname, rating, review}) => {
    return (
        <>
            <Reviewer>
                <ReviewerImgContainer>
                    <ReviewerImg src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Reviewers Image"/>
                </ReviewerImgContainer>
                <CommentText>
                    <Name>{fullname}</Name>
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