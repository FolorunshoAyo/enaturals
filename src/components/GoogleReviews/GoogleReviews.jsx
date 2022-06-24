import React, {useState, useEffect} from "react";
import styled from "styled-components";
import { smallPhone, medPhone } from "../../responsive";
import { googleSampleReviews } from "../../data";
import InfiniteScroll from "react-infinite-scroll-component";
import GoogleReview from "./GoogleReview";

const Container = styled.main`
`;

const GoogleReviewsWrapper = styled.section`
    padding: 7rem 10rem 2rem;

    ${medPhone({padding: "7rem 5rem 2rem"})}
    ${smallPhone({padding: "4rem 3rem 2rem"})}
`;

const Reviews = styled.div`

`;

const GoogleReviews = ({itemsPerPage}) => {
    const [googleReviews, setGoogleReviews] = useState([]);
    const [itemOffset, setItemOffset] = useState(0);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        const endOffset = itemOffset + itemsPerPage;
        setGoogleReviews([...googleReviews, ...googleSampleReviews.slice(itemOffset, endOffset)]);
    }, [itemOffset, itemsPerPage]);

    const fetchData = () => {
        const newOffset = itemOffset + itemsPerPage;
        setItemOffset(newOffset);

        if((newOffset + 10) === googleSampleReviews.length){
            setHasMore(false);
        }
    };

    return (
        <Container>
            <GoogleReviewsWrapper>
                <Reviews>
                    <InfiniteScroll
                        dataLength={googleSampleReviews.length} //This is important field to render the next data
                        next={fetchData}
                        hasMore={hasMore}
                        loader={<h4>Loading...</h4>}
                        endMessage={""}
                        >
                        {googleReviews.map(googleReview => (
                         <GoogleReview
                            key={googleReview.id}
                            image={googleReview.image}
                            authorName={googleReview.authorName}
                            testimonial={googleReview.testimonial}
                            rating={googleReview.rating}
                         />   
                        ))}
                </InfiniteScroll>
                </Reviews>
            </GoogleReviewsWrapper>
        </Container>
    );
};




export default GoogleReviews;