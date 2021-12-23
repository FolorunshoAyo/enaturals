import React from 'react';
import styled from 'styled-components';
import SlickSlider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined';
import { testimonials } from '../../data';

const Container = styled.div`
    padding: 3rem 4rem;
    background-color: #B092B0;
`;

const TestimonialWrapper = styled.div`
    width: 70%;
    margin: 0 auto;
    padding: 30px 50px;
    color: #7e8485;
`;

const Testimonial = styled.div`
    background-color: white;
    font-size: 2rem;
    text-align: center;
    padding: 60px 50px 90px;
    position: relative;
`;

const Testifier = styled.figure` 
    text-align: center;
    position absolute;
    left: 40%;
    right: 40%;
    bottom: 0px;
`;

const Image = styled.img`
    display: inline-block !important;
    width: 50px;
    height: 50px;
    border-radius: 50%;
`;

const Name = styled.figcaption`
    font-size: 1.5rem;
    font-weight: 700;
`;

const QuoteContainer = styled.div`
    position: absolute;
    top: 0px;
    right: 45%;
`;

const Title = styled.h2`
    text-align: center;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 300;
    margin-bottom: 4rem;
`;

const Testimonials = () => {
    const settings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true
    }
    return (
        <Container>
            <TestimonialWrapper>
                    <Title>Clients About Us</Title>
                    <SlickSlider {...settings}>
                        {testimonials.map(testimonial => {
                            return (
                                <Testimonial key={testimonial.id}>
                                    {testimonial.caption}
                                    <Testifier>
                                        <Image src={testimonial.profile.image} />
                                        <Name>{testimonial.profile.name}</Name>
                                    </Testifier>
                                    <QuoteContainer>
                                        <FormatQuoteOutlinedIcon style={{fontSize: 50}}/>
                                    </QuoteContainer>
                                </Testimonial>
                            );
                        })}
                    </SlickSlider>
            </TestimonialWrapper>
        </Container>
    );
};


export default Testimonials;