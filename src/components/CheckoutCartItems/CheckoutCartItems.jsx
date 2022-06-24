import React from "react";
import styled from "styled-components";


const CartItem = styled.tr`
`;

const ProductName = styled.td`
    padding: 9px 12px;
    border-bottom: 1px solid #cabbb2;
`;

const ProductPrice = styled.td`
    padding: 9px 12px; 
    border-bottom: 1px solid #cabbb2;
`;


const CheckoutCartItems = ({productName, quantity, productPrice}) => {
    return (
        <CartItem>
            <ProductName>
                {productName} x {quantity}
            </ProductName>
            <ProductPrice>
                ₦{productPrice}
            </ProductPrice>
        </CartItem>
    );
};



export default CheckoutCartItems;