import React from 'react';
import styled from 'styled-components';
import { bannerInfo } from '../../data';


const Container = styled.div`
    margin: 5rem 0 5rem;
    padding: 6rem 8rem;
    background-color: #EFFCE8;
`;

const BannerWrapper = styled.div`
    display: flex;
    justify-content: space-around;
`;

const Image = styled.img`
    flex: 0 0 40%;
`;

const ProductInfoContainer = styled.div`
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-left: 4rem;
`;

const ProductInfo = styled.div`
`;

const Type = styled.span`
    border-bottom: 2px solid #B092B0;
    color: #B092B0;
    font-size: 3rem;
`;

const ProductName = styled.div`
    font-size: 7rem;
    color: #633E63;
    font-style: italic;
    font-weight: 700;
    padding-top: 20px;
`;

const DiscountLabel = styled.div`
    border: 2px solid #B092B0;
    display inline-block;
    font-size: 3rem;
    margin-bottom: 30px;
    color: #B092B0;
    text-transform: uppercase;
    padding: 0.5rem;
`;

const TextSnippet = styled.p`
    color: #7e8485;
    font-size: 2rem;
    margin-bottom: 30px;
`;

const Button = styled.button`
    width: 160px;
    height: 40px;
    padding: 10px;
    background-color: transparent;
    border: 2px solid #B092B0;
    text-transform: uppercase;
    color: #B092B0;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
    transition: all .3s;

    &:hover{
        background-color: #B092B0;
        color: #fff;
    }
`;

const Banner = () => {

    return (
        <Container>
            <BannerWrapper>
                <Image src={bannerInfo.productImg}/>
                <ProductInfoContainer>
                    <ProductInfo>
                        <Type>New arrivals</Type>
                        <ProductName>{bannerInfo.productName}</ProductName>
                        <DiscountLabel>Up to {bannerInfo.discountedAmount}% off</DiscountLabel>
                        <TextSnippet>{bannerInfo.textSnippet}</TextSnippet>
                        <Button>Shop Now →</Button>
                    </ProductInfo>
                </ProductInfoContainer>
            </BannerWrapper>
        </Container>
    );
}


export default Banner;