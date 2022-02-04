import React from 'react';
import styled from 'styled-components';
import SlickSlider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
import { sliderItems } from "../../data";
import {medPhone, tabPort} from '../../responsive';

const Container = styled.div`
    height: 100vh;
    background-color: #516348;

    ${tabPort({backgroundColor: "transparent"})}
`;

const Slide = styled.div`
    width: 100%;
    height: 100vh;
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
    visibility: hidden;

    ${tabPort({visibility: "visible"})}
`;

const InfoWrapper = styled.div`
    height: 100%;
    width: 100%;
    background: linear-gradient(120deg, transparent, #9AAF8F);
    display: flex;
    visibility: visible;

    ${tabPort({background: "none", justifyContent: "center"})}
`;

const ImageContainer = styled.div`
    flex: 0 0 55%; 

    ${tabPort({display: "none"})}
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

    ${tabPort({flex: "initial", width: "70%"})}
`;

const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: #fff;
    text-transform: uppercase;
    line-height: 1.2;

    ${tabPort({fontSize: "6rem", color: "#4b5354"})}
    ${medPhone({fontSize: "4rem"})}
`;

const Desc = styled.p`
    margin: 5rem 0;
    font-size: 2.5rem;
    font-weight: 500;
`;

const Button = styled.button`
    background-color: transparent;
    border: 2px solid #b8a398;
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    transition: all .3s ease-in;
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
                    <Slide key={sliderItem.id} background={sliderItem.img}>
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
                                <Button><Link to="/shop" className="majorLink-btn"> Shop Now </Link></Button>
                            </InfoContainer>
                        </InfoWrapper>
                    </Slide>
                ))}
            </SlickSlider>
        </Container>
    );
};

export default Slider;