import React from "react";
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import { findAndReplace } from "../../usefulFunc";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeProduct } from '../../redux/cartRedux';
import toast from "react-hot-toast";

const SingleItem = styled.div`
    display: flex;
    height: 65px;

    &:not(:last-child){
        margin-bottom: 20px;
    }
`;

const ItemImgContainer = styled.div`
    flex: 0 0 25%;
    margin-right: 10px;
`;

const ItemImg = styled.img`
    width: 100%;
    height: 100%;
`;

const ItemDescription = styled.div`
    align-self: flex-start;
    font-size: 1.5rem;
`;

const ItemName = styled.h4`
    color: #4B5354;
    font-size: 1.3rem;
    text-transform: capitalize;
    margin-bottom: 5px;
    font-family: Lato, sans-serif;
    cursor: pointer;
    font-weight: 400;
    transition: all .3s;

    &:hover{
        color: #ACBFA3;
    }
`;

const ItemPrice = styled.p`
    font-size: 1.5rem;
    font-family: Lato, sans-serif;
    color: #4B5354;
    font-weight: 600;
`;

const Close = styled.div`
    align-self: flex-start;
    margin-left: auto;
    transition: all .3s;
    cursor: pointer;

    &:hover{
        color: red;
    }
`;

const CartItem = ({ productID, productImage, productName, size, price, quantity, discount, discountPrice}) => {
    const dispatch = useDispatch();
    // console.log(productImage, productName, size, quantity);

    const initialOfSize = (size) => {
        const firstLetter = size[0].toUpperCase();

        return firstLetter;
    };

    const modProductName = findAndReplace(productName);

    // console.log({ productID, quantity, price});
    
    const handleCartRemoval = () => {
        if(discount){
            dispatch(removeProduct({ productID, quantity, price: discountPrice}));
            toast.success("Cart item removed");
        }else{
            dispatch(removeProduct({ productID, quantity, price}));
            toast.success("Cart item removed");
        }
    };

    return(
        <>
            <SingleItem>
                <ItemImgContainer>
                    <ItemImg src={productImage}/>
                </ItemImgContainer>
                <ItemDescription>
                    <ItemName>
                        <Link to={`/product/${modProductName}`} className="cartProductLink">
                            {productName} {size === "No Size"? "" : `(${initialOfSize(size)})`}
                        </Link>
                    </ItemName>
                    <ItemPrice> {quantity} x ₦{discount? discountPrice : price}</ItemPrice>
                </ItemDescription>
                <Close onClick={handleCartRemoval}>
                    <CloseIcon style={{backgroundColor: "#fff", fontSize: 15}}/>
                </Close>
            </SingleItem>
        </>
    );
};




export default CartItem;