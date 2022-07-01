import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {res700, res1023, tabLand, medDesktop, bigDesktop} from '../../responsive';
import { findAndReplace, generateTagLinks } from '../../usefulFunc';
import { useDispatch } from 'react-redux';
import { addDiscountedProduct, addProduct } from '../../redux/cartRedux';
import toast from 'react-hot-toast';

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

    ${res1023({fontSize: "2.2rem", fontWeight: "600"})}
`;

const ProductCard = styled.div`
    flex: 0 0 22%;
    height: auto;
    position: relative;

    &:hover ${Image}{
        border-radius: 100px;
    }

    ${res700({flex: "0 0 48%", paddingBottom: "3rem"})}    
`;

const OutOfStockText = styled.div`
    display: ${(props) => props.inStock === "in-stock"? "none": "flex"};
    position: absolute;
    top: -20px;
    left: -20px;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 0.7rem;
    font-family: Lato, sans-serif;
    background-color: #acbfa3;
    border-radius: 50%;
`;

const DiscountBadge = styled.div`
    display: ${(props) => props.discounted === "yes"? "flex": "none"};
    position: absolute;
    top: 50px;
    left: -20px;
    width: 50px;
    height: 30px;
    align-items: center;
    justify-content: center;
    color: #acbfa3;
    font-size: 10px;
    font-family: Lato, sans-serif;
    background-color: #effce8;
    border-radius: 10px;
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
    text-align: center;
    padding: 2.5rem 2rem 4rem; 

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

const PreviousPrice = styled.span`
    color: gray;
    text-decoration: line-through;
    margin-right: 10px;
    font-weight: 700;
`;

const Price = styled.span`
    font-size: 1.5rem;
    font-weight: 700;
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

const MajorProduct = ({productInfo, productImage, price, productName, size, inStock, productTags, discounted, discountPrice}) => {
    const productLink = findAndReplace(productName);

    const quantity = 1;
    const dispatch = useDispatch();
    let arrangedPrices = [];
    
    const handleCartAddition = () => {
        if(!inStock){
            alert("Item is currently out of stock, please check back later or shop more products.")
        }else{
            if(discounted === true){
                dispatch(addDiscountedProduct({ ...productInfo, quantity }));   
                toast.success("Product added to cart"); 
            }else{
                dispatch(addProduct({ ...productInfo, quantity }));
                toast.success("Product added to cart");
            }
        }
    };

    if(Array.isArray(price)){
        arrangedPrices = price.map(price => price.discount? price.discountPrice : price.price);
    }

    return (
        <ProductCard>
            <OutOfStockText inStock={inStock? "in-stock" : "not-in-stock"}>
                Out of stock
            </OutOfStockText>
            <DiscountBadge discounted={Array.isArray(discounted)? (discounted.includes(true))? "yes" : "no" : discounted? "yes" : "no"}>
                {Array.isArray(discounted)? (discounted.includes(true))? "sale!" :  "" : `-${Math.round((price-discountPrice)/price * 100)}%`}
            </DiscountBadge>
            <ProductImage>
                <Image src={productImage}/>
            </ProductImage>
            <ProductDescription>
                <ProductName>
                    <Link to={`/product/${productLink}`} className="productLink">
                        {productName}
                    </Link>
                </ProductName>
                <ProductTag>
                    {generateTagLinks(productTags)}
                </ProductTag>
                <ProductPrice>
                {Array.isArray(price)? `₦${arrangedPrices[0]} - ₦${arrangedPrices[arrangedPrices.length - 1]}` : discounted? <><PreviousPrice>{`₦${price}`}</PreviousPrice> <Price>{`₦${discountPrice}`}</Price></> :  <Price>{`₦${price}`}</Price>}
                </ProductPrice>
                <ButtonsContainer>
                    {size === "No Size"? <ProductActionButton onClick={handleCartAddition}>Add To Cart</ProductActionButton> : <Link to={`/product/${productLink}`} className="addToCartLink"> Add To Cart </Link>}
                </ButtonsContainer>
            </ProductDescription>
        </ProductCard>
    );
};


export default MajorProduct;