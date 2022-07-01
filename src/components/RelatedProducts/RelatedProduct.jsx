import React from 'react';
import styled from 'styled-components';
import {res480, res700, res1023} from '../../responsive';
import { Link } from 'react-router-dom';
import { findAndReplace, generateTagLinks } from '../../usefulFunc';
import { useDispatch } from "react-redux";
import { addDiscountedProduct, addProduct } from '../../redux/cartRedux';
import toast from 'react-hot-toast';

const ProductCard = styled.div`
    flex: 0 0 32%;
    height: 300px;
    position: relative;

    ${res1023({height: "250px"})}
    ${res700({flex: "0 0 440px", marginBottom: "3rem"})}
    ${res480({flex: "0 0 300px"})}
`;

const OutOfStockText = styled.div`
    display: ${(props) => props.inStock === "in-stock"? "none": "flex"};
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    width: 50px;
    height: 50px;
    align-items: center;
    justify-content: center;
    color: #fff;
    z-index: 5;
    font-size: 0.7rem;
    font-family: Lato, sans-serif;
    background-color: #acbfa3;
    border-radius: 50%;
`;

const DiscountBadge = styled.div`
    display: ${(props) => props.discounted === "yes"? "flex": "none"};
    position: absolute;
    z-index: 5;
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

const ProductTag = styled.div`
    color: #fff;
    font-family: Lato, sans-serif;
    font-size: 1.8rem;
`;

const PriceRange = styled.p`
    font-size: 1.9rem;
    color: #fff;
    font-weight: 700;
    margin: 1.8rem 0;
`;

const PreviousPrice = styled.span`
    color: gray;
    text-decoration: line-through;
    margin-right: 10px;
    font-weight: 700;
`;

const Price = styled.span`
    font-weight: 700;
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

const RelatedProducts = ({productInfo, name, productImg, price, categories, inStock, size, discounted, discountPrice}) => {
    const modProductName = findAndReplace(name);
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

    return(
        <ProductCard>
            <OutOfStockText inStock={inStock? "in-stock" : "not-in-stock"}>
                Out of stock
            </OutOfStockText>
            <DiscountBadge discounted={Array.isArray(discounted)? (discounted.includes(true))? "yes" : "no" : discounted? "yes" : "no"}>
                {Array.isArray(discounted)? (discounted.includes(true))? "sale!" :  "" : `-${Math.round((price-discountPrice)/price * 100)}%`}
            </DiscountBadge>
            <FrontView>
                <Image src={productImg}/>
            </FrontView>
            <BackView>
                <ProductInfoContainer>
                    <ProductName>
                        <Link to={`/product/${modProductName}`} className="productLink">
                            {name}
                        </Link>
                    </ProductName>
                    <ProductTag>{generateTagLinks(categories)}</ProductTag>
                    <PriceRange>{Array.isArray(price)? `₦${arrangedPrices[0]} - ₦${arrangedPrices[arrangedPrices.length - 1]}` : discounted? <><PreviousPrice>{`₦${price}`}</PreviousPrice> <Price>{`₦${discountPrice}`}</Price></> :  <Price>{`₦${price}`}</Price>}</PriceRange>
                     {size === "No Size"? <Button onClick={handleCartAddition}>Add To Cart</Button> : <Link to={`/product/${modProductName}`} className="relAddToCartLink"> Add To Cart </Link>}
                </ProductInfoContainer>
            </BackView>
        </ProductCard>
    );
};

export default RelatedProducts;