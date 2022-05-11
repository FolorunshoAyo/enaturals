import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { addProduct } from '../../redux/cartRedux';
import { useDispatch } from "react-redux";
import {smallPhone, medPhone, bigDesktop} from '../../responsive';
import { generateTagLinks, findAndReplace } from '../../usefulFunc';

const ProductCard = styled.div`
    flex: ${props => props.view === "list"? "none" : "0 0 50%" };

    display: flex;
    flex-direction: ${props => props.view === "list"? "row" : "column"};
    padding: 4rem 1rem;
    height: ${props => props.view === "list"? "auto": "auto"};
    justify-content: space-between;

    &:not(:last-child){
        border-bottom: ${props => props.view === "list"? "2px solid #f4f5f5": "none"};
    }

    ${medPhone({flex: "0 0 100%", flexDirection: "column", height: "auto"})}
`;

const ProductImageContainer = styled.div`
    flex: ${props => props.view === "list"? "0 0 35%": "none"};
    height: ${props => props.view === "list"? "auto": "300px"};

    ${medPhone({flex: "1"})}

`;

const ProductImage = styled.img`
    width: 100%;
    height: 100%;
`;

const ProductDescription = styled.div`
    flex: 0 0 60%;
    text-align: ${props => props.view === "list"? "left" : "center"};
    padding: ${props => props.view === "list"? "0" : "2.5rem 2rem 4rem"};

    ${bigDesktop({marginTop: "2rem", padding: "0 2rem"})}
    ${medPhone({padding: "2rem 0"})}
`;

const ProductName = styled.h2`
    font-size: 2.5rem;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: 400;
    cursor: pointer; 
    color: #7e8485;
`;

const Description = styled.p`
    display: ${props => props.display === "none"? "none" : "block"};
    font-size: 1.3rem;
    font-family: Lato, sans-serif;
    line-height: 1.7;
    color: #7e8485;
    margin: 13px 0;
`;
const ProductTag = styled.div`
    color: #ABB0B2;
    font-family: Lato, sans-serif;
    font-size: 13px;
`;

const Price = styled.div`
    font-size: 1.5rem;
    margin: ${props => props.view === "list"? "1rem 0" : "2.5rem 0"};
    color: #4B5354;
    font-weight: 700;

    ${bigDesktop({margin: "1rem 0", fontSize: "1rem"})}
`;

const Button = styled.button`
    padding: 16px 32.5px;
    background-color: transparent;
    border: 2px solid #b8a398;
    text-transform: uppercase;
    color: #b8a398;
    font-weight: 700;
    cursor: pointer;
    transition: all .3s ease-in;

   &:hover{
       background-color: #b8a398;
       color: #fff;
    }

    ${smallPhone({padding: "10px 20px"})}
`;

const Product = ({productInfo, productImage, price, description, productName, view, size, productTags}) => {
    const modProductName = findAndReplace(productName);
    const quantity = 1;
    const dispatch = useDispatch();

    const handleCartAddition = () => {
        dispatch(addProduct({ ...productInfo, quantity }));
    };

    return (
        <ProductCard view={view}>
            <ProductImageContainer view={view}>
                <ProductImage src={productImage}/>
            </ProductImageContainer>
            <ProductDescription view={view}>
                <ProductName>
                    <Link to={`/product/${modProductName}`} className="productLink">
                        {productName}
                    </Link>
                </ProductName>
                <Description display={view === "grid"? "none" : "block"}>{description}</Description>
                <ProductTag>{generateTagLinks(productTags)}</ProductTag>
                <Price view={view}>{price}</Price>
                {size === "No Size"? <Button onClick={handleCartAddition}>Add To Cart</Button> : <Link to={`/product/${modProductName}`} className="addToCartLink"> Add To Cart </Link>}
            </ProductDescription>
        </ProductCard>
    );
};


export default Product;