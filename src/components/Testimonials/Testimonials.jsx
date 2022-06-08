import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import SlickSlider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
// import { testimonials } from '../../data';
import {smallPhone, medPhone, res700, res1023} from '../../responsive';
import { publicRequest } from '../../requestMethod';
import { Skeleton } from '@mui/material';

const Container = styled.div`
    padding: 3rem 4rem;
    background-color: #f2eeec;
`;

const TestimonialWrapper = styled.div`
    width: 70%;
    margin: 0 auto;
    padding: 30px 50px;
    color: #7e8485;

    ${res1023({width: "85%"})}
    ${res700({width: "90%", padding: "30px 25px"})}
    ${medPhone({width: "95%", padding: "30px 0px"})}
`;

const Testimonial = styled.div`
    background-color: white;
    font-size: 2rem;
    text-align: center;
    padding: 8rem 5rem 0;
    position: relative;

    ${res700({fontSize: "1.5rem"})}
    ${medPhone({padding: "8rem 5rem 2rem"})}
`;

const Image = styled.img`
    display: inline-block !important;
    width: 50px;
    height: 50px;
    border-radius: 50%;

    ${medPhone({width: "35px",height: "35px"})}
`;

const Name = styled.figcaption`
    font-size: 1.5rem;
    font-weight: 700;

    ${medPhone({fontSize: "1.3rem"})}
`;

const QuoteContainer = styled.div`
    position: absolute;
    top: 0px;
    right: 47%;

    ${medPhone({right: "44%"})}
    ${smallPhone({right: "42%"})}
`;

const Title = styled.h2`
    text-align: center;
    font-size: 2.5rem;
    text-transform: uppercase;
    font-weight: 300;
    color: #4B5354;
    margin-bottom: 4rem;
`;

const Center = styled.div`
    width: 40px;
    margin: 20px auto;
`;

const Testifier = styled.figure` 
    margin-top: 1.5rem;
    text-align: center;

    ${smallPhone({marginTop: "1.8rem"})}
`;

const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true
}

const Testimonials = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getTestimonials = async () => {
            try{
                const res = await publicRequest.get("/testimonials/");
                setTestimonials(res.data);
                setLoading(false);
            }catch(err){
                console.log(err);
            }
        };

        getTestimonials();
    }, []);
    
    return (
        <Container>
            <TestimonialWrapper>
                    <Title>Clients About Us</Title>
                    {
                        loading?
                        <>
                            <Skeleton variant="rectangular" animation="wave" width={"100%"} height={118} />
                            <Center>
                                <Skeleton variant="circular" animation="wave" width={40} height={40} />
                            </Center>
                            <Skeleton variant="text" animation="wave" />
                        </>
                        :
                        <SlickSlider {...settings}>
                            {testimonials.map(testimonial => {
                                return (
                                    <Testimonial key={testimonial._id}>
                                        {testimonial.testimony}
                                        <QuoteContainer>
                                            <FormatQuoteOutlinedIcon style={{fontSize: 50}}/>
                                        </QuoteContainer>
                                        <Testifier>
                                            <Image src={testimonial.testifierImg} />
                                            <Name>{testimonial.testifier}</Name>
                                        </Testifier>
                                    </Testimonial>
                                );
                            })}
                        </SlickSlider>
                    }
            </TestimonialWrapper>
        </Container>
    );
};


export default Testimonials;