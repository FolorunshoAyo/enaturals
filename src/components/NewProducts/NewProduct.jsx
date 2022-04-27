import React from 'react';
import styled from 'styled-components';
import {smallPhone ,res700 ,res1023, tabLand, medDesktop, bigDesktop} from '../../responsive';


const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: all .3s ease-out;
`;

const ProductName = styled.div`
    font-size: 2.5rem;
    color: #7e8485;
    text-transform: uppercase;
    font-weight: 400;
    line-height: 1.2;
    cursor: pointer; 
    transition: all .3s;

    &:hover{
        color: #ACBFA3;
    }

    ${res1023({fontSize: "2rem", fontWeight: "600"})}
`;

const ProductCard = styled.div`
    flex: 0 0 22%;

    &:hover ${Image}{
        border-radius: 100px;
    }

    ${res700({flex: "0 0 48%", paddingBottom: "3rem"})}    
`;

const ProductImage = styled.div`
    width: 100%;
    height: 40%;

    ${bigDesktop({height: "50%"})}
    ${medDesktop({height: "60%"})}
    ${tabLand({height: "35%"})}
    ${res1023({height: "35%"})}
    ${res700({height: "50%"})}
`;

const ProductDescription = styled.div`
    padding: 2.5rem 2rem 4rem;
    text-align: center;

    ${res1023({padding: "1.5rem 0"})}
`;

const ProductTag = styled.div`
    font-size: 1.5rem;
    color: #7e8485;
    font-family: Lato, sans-serif;
    cursor: pointer;
    padding: 0.5rem 0;

    &:hover{
        color: #ABB0B2;
    }
`;

const ProductPrice = styled.div`
    margin: 2rem 0;
    font-size: 1.5rem;
    font-weight: 700;
    color: #4B5354;
`;

const ButtonsContainer = styled.div`
    font-size: 1rem;
`;

const ProductActionButton = styled.button`
    padding: 1rem 2rem;
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

const NewProduct = ({productImg, productName, price, productTag}) => {
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
                    {price}
                </ProductPrice>
                <ButtonsContainer>
                    <ProductActionButton>Add To Cart</ProductActionButton>
                    {/* <FavoriteBorderIcon style={{color: 'red', fontSize: 20}}/> */}
                </ButtonsContainer>
            </ProductDescription>
        </ProductCard>
    );
};


export default NewProduct;