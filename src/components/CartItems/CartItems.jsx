import React from 'react';
import styled from 'styled-components';
import CloseIcon from '@mui/icons-material/Close';
import { smallPhone } from '../../responsive';

const CartItemsContainer = styled.div`
    padding: ${props => props.isNav? "1rem 2rem" : "4rem 2rem"}; 
`;

const CartItem = styled.div`
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

const BillingContainer = styled.div`
    margin-top: 50px;
`; 

const SubTotal = styled.div`
    border-top: 1px solid #cabbb2;
    border-bottom: 1px solid #cabbb2;
    text-align: end;
    padding: 2rem 0;
    font-weight: 400;
    font-size: 1.5rem;
`;

const SubTotalTitle = styled.span`
    font-weight: 600;
    text-transform: uppercase;
    color: #7E8485;
`;


const OrderButtonContainer = styled.div`
    padding: 2rem 0 0;
    text-align: end;
`;

const CheckoutButton = styled.button`
    text-transform: uppercase;
    color: #ACBFA3;
    width: 35%;
    margin-right: 20px;
    border: none;
    cursor: pointer;
    background: transparent;
    letter-spacing: 1px;

    &:hover{
        color: #B8A398;m
    }

    ${smallPhone({fontSize: "1.2rem"})}
`;

const ViewCartButton = styled.button`
    text-transform: uppercase;
    color: #B8A398;
    width: 40%;
    padding: 1rem 1.5rem;
    letter-spacing: 1px;
    background-color: transparent;
    border: 2px solid #B8A398;
    font-weight: 700;
    cursor: pointer;
    transition: all .3s ease-in;
    font-size: 1rem;

   &:hover{
       background-color: #B8A398;
       color: #fff;
    }

    ${smallPhone({width: "50%", fontSize: "1.2rem"})}
`;


const CartItems = ({ dropdown }) => {
    return (
        <CartItemsContainer isNav={dropdown}>
            <CartItem>
                <ItemImgContainer>
                    <ItemImg src="../enaturals/enaturals12.jpg"/>
                </ItemImgContainer>
                <ItemDescription>
                    <ItemName>Face cream with olive oil</ItemName>
                    <ItemPrice> 2 x ₦1000</ItemPrice>
                </ItemDescription>
                <Close>
                    <CloseIcon style={{backgroundColor: "#fff", fontSize: 15}}/>
                </Close>
            </CartItem>
            <BillingContainer>
                <SubTotal>
                    <SubTotalTitle>Subtotal:</SubTotalTitle> ₦2000
                </SubTotal>
                <OrderButtonContainer>
                    <CheckoutButton>
                        Checkout
                    </CheckoutButton>
                    <ViewCartButton>
                        View Cart
                    </ViewCartButton>
                </OrderButtonContainer>
            </BillingContainer>
        </CartItemsContainer>
    );
};



export default CartItems;