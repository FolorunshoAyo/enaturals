import React from 'react';
import styled from 'styled-components';
import {tabPort, res1023} from '../../responsive';

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: all .3s ease-out;
`;

const ProductName = styled.div`
    font-size: 2rem;
    color: #7e8485;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-weight: 400;
    cursor: pointer; 
    transition: all .3s;

    &:hover{
        color: #ACBFA3;
    }

    ${res1023({fontSize: "1.8rem"})}
`;

const ProductCard = styled.div`
    flex: 0 0 22%;

    &:hover ${Image}{
        border-radius: 100px;
    }
`;

const ProductImage = styled.div`
    width: 100%;
    height: 50%;

    ${res1023({height: "35%"})}
`;

const ProductDescription = styled.div`
    text-align: center;
    padding: 2.5rem 2rem 4rem; 

    ${res1023({padding: "1.5rem 0"})}
`;

const ProductTag = styled.div`
    font-size: 1.5rem;
    color: #7e8485;
    font-family: Lato, sans-serif;
    cursor: pointer;

    &:hover{
        color: #ABB0B2;
    }
`;

const ProductPrice = styled.div`
    margin: 2.5rem 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: #4B5354;
`;

const ButtonsContainer = styled.div`
    font-size: 1rem;
`;

const ProductActionButton = styled.button`
    padding: 16px 25px;
    background-color: transparent;
    border: 2px solid #B8A398;
    text-transform: uppercase;
    color: #B8A398;
    font-weight: 700;
    cursor: pointer;
    transition: all .3s ease-in;

   &:hover{
       background-color: #B8A398;
       color: #fff;
    }

    ${res1023({padding: "14px 18px"})}
`;

const MajorProduct = ({productImg, productName, priceRange, productTag}) => {
    return (
        <ProductCard>
            <ProductImage>
                <Image src={productImg}/>
            </ProductImage>
            <ProductDescription>
                <ProductName>
                    {productName}
                </ProductName>
                <ProductTag>
                    {productTag}
                </ProductTag>
                <ProductPrice>
                    {priceRange}
                </ProductPrice>
                <ButtonsContainer>
                    <ProductActionButton>Add To Cart</ProductActionButton>
                    {/* <FavoriteBorderIcon style={{color: 'red', fontSize: 20}}/> */}
                </ButtonsContainer>
            </ProductDescription>
        </ProductCard>
    );
};


export default MajorProduct;