import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { mergeSimilarProductAccToID, numberWithCommas } from "../../usefulFunc";
import CartItem from "../CartItem/CartItem";
import { smallPhone } from '../../responsive';

const CartContainer = styled.div`
    max-height: 300px;
    overflow-y: auto;
`;

const NavEmptyCartMsg = styled.p`
    font-family: Lato, sans-serif;
    color: #000;
    text-align: center;
    text-transform: lowercase;
`;

const EmptyCartMsg = styled.p`
    font-family: Lato, sans-serif;
    font-size: 2rem;
    color: #7E8485;
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

const CartItems = ({isNav}) => {
    const cart = useSelector(state => state.cart);

    const reArrangedCart = mergeSimilarProductAccToID(cart.products);

    // logging an array of similar product subtotals 
    // console.log(reArrangedCart[1]);
    
    // fetch subtotal
    const subtotal = reArrangedCart[1].reduce((prev, current) => {
        const returns = prev + current;

        return returns;
    }, 0);

    const convertedSubTotal = numberWithCommas(subtotal);

    return (
        <>
        {
            (cart.products.length === 0)?
            <>
                {(isNav)? <NavEmptyCartMsg>Cart is Empty</NavEmptyCartMsg> : <EmptyCartMsg>Cart is Empty</EmptyCartMsg>}
            </>
            : 
            <>
                <CartContainer>
                    {
                        reArrangedCart[0].map((similarProducts, i) => (
                            <CartItem
                                key={i} 
                                productImage={similarProducts[0].img}
                                productName={similarProducts[0].productName}
                                size={similarProducts[0].size}
                                //total={reArrangedCart[1][i]} In case of total for each product added to cart
                                price={similarProducts[0].price}
                                quantity={reArrangedCart[2][i]}
                            />
                        ))
                    }
                </CartContainer>
                <BillingContainer>
                    <SubTotal>
                        <SubTotalTitle>Subtotal:</SubTotalTitle> ₦{convertedSubTotal}
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
            </>
        }
        </>
    );
};


export default CartItems;

