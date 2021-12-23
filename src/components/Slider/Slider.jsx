import React from 'react';
import styled from 'styled-components';
import SlickSlider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { sliderItems } from "../../data";

const Container = styled.div`
    height: 100vh;
    background-color: #516348;
`;

const Slide = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${(props) => props.backgroundImg});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
`;

const InfoWrapper = styled.div`
    height: 100%;
    background: linear-gradient(120deg, transparent, #9AAF8F);
    display: flex;
`;

const ImageContainer = styled.div`
    flex: 0 0 55%; 
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    clip-path: polygon(0 0, 100% 0, 80% 100%, 0 100%);
`;

const InfoContainer = styled.div`
    text-align: center;
    padding: 0 1rem;
    align-self: center;
    flex: 1;
`;

const Title = styled.h1`
    font-size: 5rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: #fff;
    text-transform: uppercase;
`;

const Desc = styled.p`
    margin: 5rem 0;
    font-size: 2.5rem;
    font-weighr: 500;
`;

const Button = styled.button`
    background-color: transparent;
    padding: 2rem;
    color: #fff;
    font-size: 2rem;
    cursor: pointer;
    border: 4px solid #7e8485;
`;

const Slider = () => {
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 2
    };

    return (
        <Container>
            <SlickSlider {...settings}>
                {sliderItems.map(sliderItem => (
                    <Slide key={sliderItem.id}>
                        <InfoWrapper>
                            <ImageContainer>
                                <Image src={sliderItem.img}/>
                            </ImageContainer>
                            <InfoContainer>
                                <Title>
                                    {sliderItem.title}
                                </Title>
                                <Desc>
                                    {sliderItem.desc}
                                </Desc>
                                <Button>Shop Now</Button>
                            </InfoContainer>
                        </InfoWrapper>
                    </Slide>
                ))}
            </SlickSlider>
        </Container>
    );
};

export default Slider;