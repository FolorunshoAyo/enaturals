import React from 'react';
import styled from 'styled-components';

const ProductCard = styled.div`
    flex: ${props => props.view === "list"? "none" : "0 0 50%" };

    display: flex;
    flex-direction: ${props => props.view === "list"? "row" : "column"};
    padding: 4rem 1rem;
    height: ${props => props.view === "list"? "280px": "450px"};
    justify-content: space-between;
    
    &:not(:last-child){
        border-bottom: ${props => props.view === "list"? "0.2rem solid #7e8485": "none"};
    }
`;

const ProductImageContainer = styled.div`
    flex: ${props => props.view === "list"? "0 0 50%": "none"};
    height: ${props => props.view === "list"? "auto": "220px"}
`;

const ProductImage = styled.img`
    width: 100%;
    height: 100%;
`;

const ProductDescription = styled.div`
    flex: 0 0 45%;
    text-align: ${props => props.view === "list"? "left" : "center"};
`;

const ProductName = styled.h2`
    font-size: 2.5rem;
    letter-spacing: 1px;
    padding: 1rem 0;
    font-weight: 300; 
    color: #7e8485;
`;

const Description = styled.p`
    display: ${props => props.display === "none"? "none" : "block"};
    font-size: 1.3rem;
    margin-bottom: 2rem;
`;
const ProductTag = styled.div`
    color: #7e8485;
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

const Price = styled.div`
    font-size: 2rem;
    margin-bottom: 1rem;
`;

const Button = styled.button`
    width: 160px;
    height: 40px;
    padding: 1rem 2rem;
    background-color: transparent;
    border: 2px solid #BDBC91;
    text-transform: uppercase;
    color: #BDBC91;
    font-weight: 700;
    cursor: pointer;
    transition: all .3s ease-in;

   &:hover{
       background-color: #BDBC91;
       color: #fff;
    }
`;

const Product = ({productImage, price, description, productName, view}) => {
    return (
        <ProductCard view={view}>
            <ProductImageContainer view={view}>
                <ProductImage src={productImage}/>
            </ProductImageContainer>
            <ProductDescription view={view}>
                <ProductName>{productName}</ProductName>
                <Description display={view === "grid"? "none" : "block"}>{description}</Description>
                <ProductTag>Restoring</ProductTag>
                <Price>{price}</Price>
                <Button>Add To Cart</Button>
            </ProductDescription>
        </ProductCard>
    );
};


export default Product;