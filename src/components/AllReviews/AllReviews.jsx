import React from 'react';
import styled from 'styled-components';
import Review from '../Review/Review';

const Reviews = styled.div`
    padding: 2rem 0;
`;

const AllReviews = ({productReviews}) => {
    return (
        <Reviews>
            {
                productReviews.map(productReview => (
                    <Review 
                        key={productReview._id}
                        fullname={productReview.fullname}
                        rating={productReview.rating}
                        review={productReview.review}
                    />
                ))
            }
        </Reviews>
    );
};


export default AllReviews;