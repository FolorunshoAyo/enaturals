import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    transition: all .3s ease-out;
`;

const ProductName = styled.div`
    font-size: 2.5rem;
    color: #7e8485;
    transition: all .3s;
`;

const ProductCard = styled.div`
    flex: 0 0 22%;

    &:hover ${Image}{
        border-radius: 100px;
    }

    &:hover ${ProductName}{
        color: #B8A398; 
    }
`;

const ProductImage = styled.div`
    height: 50%;
`;

const ProductDescription = styled.div`
    padding: 3rem 1rem;
    text-align: center;
`;

const ProductDetails = styled.div`
    font-size: 1.8rem;
    padding: 10px 0;
    color: #7e8485;
`;

const ProductPrice = styled.div`
    margin: 2.5rem 0;
    font-size: 1.8rem;
    font-weight: 700;
`;

const ButtonsContainer = styled.div`
    font-size: 1rem;
`;

const ProductActionButton = styled.button`
    width: 160px;
    height: 40px;
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
`;

const NewProduct = ({productImg, productName, priceRange, productDetails}) => {
    return (
        <ProductCard>
            <ProductImage>
                <Image src={productImg}/>
            </ProductImage>
            <ProductDescription>
                <ProductName>
                    {productName}
                </ProductName>
                <ProductDetails>
                    {productDetails}
                </ProductDetails>
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


export default NewProduct;