import React from 'react';
import styled from 'styled-components';
import { bannerInfo } from '../../data';
import {res700,tabPort, res1100} from '../../responsive';
import {Link} from 'react-router-dom';

const Container = styled.div`
    margin: 0rem 0 5rem;
    padding: 6rem 8rem;
    background-color: #EFFCE8;

    ${res700({padding: "3rem 8rem 6rem"})}
`;

const BannerWrapper = styled.div`
    display: flex;
    justify-content: space-around;

    ${res700({flexDirection: "column", alignItems: "center"})}
`;

const ImageContainer = styled.div`
    flex: 0 0 50%;

    ${res700({height: "330px", flex: "initial"})}
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
`;

const ProductInfoContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 4rem;

    ${res700({padding: "4rem"})}
`;

const ProductInfo = styled.div`
`;

const Type = styled.span`
    border-bottom: 2px solid #B092B0;
    color: #B092B0;
    font-size: 3rem;

    ${res1100({fontSize: "2rem"})}
`;

const ProductName = styled.div`
    font-size: 7rem;
    color: #633E63;
    font-style: italic;
    font-weight: 700;
    padding-top: 20px;

    ${res1100({fontSize: "5.5rem"})}
    ${tabPort({fontSize: "4rem"})}
`;

const DiscountLabel = styled.div`
    border: 2px solid #B092B0;
    display inline-block;
    font-size: 3rem;
    margin-bottom: 30px;
    color: #B092B0;
    text-transform: uppercase;
    padding: 0.5rem;

    ${res1100({fontSize: "2rem"})}
`;

const TextSnippet = styled.p`
    color: #7e8485;
    font-size: 2rem;
    margin-bottom: 30px;

    ${res1100({fontSize: "1.5rem"})}
`;

const Button = styled.button`
    width: 160px;
    height: 40px;
    background-color: transparent;
    border: 2px solid #B092B0;
    text-transform: uppercase;
    color: #B092B0;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
    transition: all .3s;
    overflow: hidden;
`;

const Banner = () => {

    return (
        <Container>
            <BannerWrapper>
                <ImageContainer>
                    <Image src={bannerInfo.productImg}/>
                </ImageContainer>
                <ProductInfoContainer>
                    <ProductInfo>
                        <Type>New arrivals</Type>
                        <ProductName>{bannerInfo.productName}</ProductName>
                        <DiscountLabel>Up to {bannerInfo.discountedAmount}% off</DiscountLabel>
                        <TextSnippet>{bannerInfo.textSnippet}</TextSnippet>
                        <Button><Link to="/shop" className="btn-banner-link">Shop Now →</Link></Button>
                    </ProductInfo>
                </ProductInfoContainer>
            </BannerWrapper>
        </Container>
    );
}


export default Banner;