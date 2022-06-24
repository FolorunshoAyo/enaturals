import React, { useEffect } from 'react';
import styled from 'styled-components';
import SlickSlider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Link } from 'react-router-dom';
// import { sliderItems } from "../../data";
import {medPhone, tabPort} from '../../responsive';
import { CircularProgress } from '@mui/material';
import { useDispatch } from 'react-redux';
import { getSlides } from '../../redux/apiCalls';
import { useSelector } from 'react-redux';

const Container = styled.div`
    margin-top: 170px;
    height: 100vh;
    background-color: #516348;

    ${tabPort({backgroundColor: "transparent"})}
`;

const LoadingContainer = styled.div`
    height: 100%;
    background-color: rgba(0,0,0);
    display: flex;
    justify-content: center;
    align-items: center;
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

const SlideOverlay = styled.div`
    position: absolute;
    right: 0px;
    left: 0px;
    top: 0px;
    width: 100%;
    height: 100%;
    display: none;

    ${tabPort({display: "block", background: "linear-gradient(to bottom, transparent, rgba(0,0,0))"})}
`;

const InfoWrapper = styled.div`
    position: relative;
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
    z-index: 3;
    padding: 0 1rem;
    align-self: center;
    flex: 1;

    ${tabPort({flex: "initial", width: "70%"})}
`;

const Title = styled.h1`
    font-size: 3.5rem;
    font-weight: 700;
    letter-spacing: 1px;
    color: rgba(255, 255, 255, 0.8);
    color: #acbfa3;
    text-transform: uppercase;
    line-height: 1.2;

    ${tabPort({fontSize: "6rem"})}
    ${medPhone({fontSize: "4rem"})}
`;

const Desc = styled.p`
    margin: 5rem 0;
    font-size: 2.5rem;
    font-weight: 500;
    color: #fff;
`;

const Button = styled.button`
    background-color: transparent;
    border: 2px solid #acbfa3;
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    transition: all .3s ease-in;

    &:hover{
        background-color: #acbfa3;
    }
`;

const Slider = () => {
    const {slides, isFetching} = useSelector(state => state.slides);
    const dispatch = useDispatch();

    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    useEffect(() => {
        if(slides.length === 0){
            getSlides(dispatch);
        }
    }, [dispatch]);

    return (
        <Container>
            {
                (isFetching)? 
                <LoadingContainer>
                    <CircularProgress size="8rem"/>
                </LoadingContainer>
                : 
                <SlickSlider {...settings}>
                    {slides.map(slide => (
                        <Slide key={slide._id} background={slide.slideImg}>
                            <InfoWrapper>
                                <SlideOverlay></SlideOverlay>
                                <ImageContainer>
                                    <Image src={slide.slideImg}/>
                                </ImageContainer>
                                <InfoContainer>
                                    <Title>
                                        {slide.title}
                                    </Title>
                                    <Desc>
                                        {slide.desc}
                                    </Desc>
                                    <Button><Link to="/shop" className="majorLink-btn"> Shop Now </Link></Button>
                                </InfoContainer>
                            </InfoWrapper>
                        </Slide>
                    ))}
                </SlickSlider>
            }
        </Container>
    );
};

export default Slider;