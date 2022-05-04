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
                        name={productReview.name}
                        rating={productReview.rating}
                        review={productReview.review}
                    />
                ))
            }
        </Reviews>
    );
};


export default AllReviews;