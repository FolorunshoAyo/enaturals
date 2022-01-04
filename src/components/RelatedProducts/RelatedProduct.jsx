import React from 'react';
import styled from 'styled-components';
import {res480, res700, res1023} from '../../responsive';

const ProductCard = styled.div`
    flex: 0 0 32%;
    height: 300px;
    position: relative;

    ${res1023({height: "250px"})}
    ${res700({flex: "0 0 440px", marginBottom: "3rem"})}
    ${res480({flex: "0 0 300px"})}
`;

const BackView = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: #BFABA0;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transition: all .3s ease-in;

    &:hover {
        opacity: 1;
    }
`;

const FrontView = styled.div`
    height: 100%;
    cursor: pointer;
`;

const Image = styled.img`
    height: 100%;
    width: 100%;
`;

const ProductInfoContainer = styled.div`
    text-align: center;
`;

const ProductName = styled.p`
    font-size: 2.5rem;
    text-transform: uppercase;
    color: #fff;
    font-weight: 400;
`;

const PriceRange = styled.p`
    font-size: 1.9rem;
    color: #fff;
    font-weight: 700;
    margin: 1.8rem 0;
`;

const Button = styled.button`
    width: 100%;
    height: 100%;
    padding: 1rem 2rem;
    background-color: transparent;
    border: 2px solid #fff;
    text-transform: uppercase;
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    transition: all .3s ease-in;

    &:hover{
        background-color: #9AAF8F;
        color: #fff;
    }   

    &:hover ${ProductName}{
        color: #9AAF8F;
    }
`;

const RelatedProducts = ({name, productImg, price}) => {
    return(
        <ProductCard>
            <FrontView>
                <Image src={productImg}/>
            </FrontView>
            <BackView>
                <ProductInfoContainer>
                    <ProductName>{name}</ProductName>
                    <PriceRange>{price}</PriceRange>
                    <Button>Add To Cart</Button>
                </ProductInfoContainer>
            </BackView>
        </ProductCard>
    );
};

export default RelatedProducts;