import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
    background-color: #f2eeec;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
`;

const PaymentSuccessCard = styled.div`
    background: white;
    padding: 60px;
    border-radius: 4px;
    box-shadow: 0 2px 3px #C8D0D8;
    display: inline-block;
`;

const CheckMarkContainer = styled.div`
    border-radius:200px; 
    text-align: center;
    margin: 0 auto;
    height:200px; 
    width:200px; 
    background: #F8FAF5;
`;

const CheckIcon = styled.i`
    color: #9ABC66;
    font-size: 100px;
    line-height: 200px;
    margin-left:-15px;
`;

const SuccessTitle = styled.h1`
    color: #88B04B;
    font-family: Lato, sans-serif;
    font-weight: 900;
    font-size: 40px;
    text-align: center;
    margin-bottom: 10px;
`;

const SuccessMessage = styled.p`
    color: #404F5E;
    text-align: center;
    font-family: Lato, sans-serif;
    font-size: 20px;
`;
const ActionLinks = styled.div`
    margin-top: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center
`;

const PaymentSuccess = () => {
    return(
        <Wrapper>
            <PaymentSuccessCard>
               <CheckMarkContainer>
                    <CheckIcon>✓</CheckIcon>
               </CheckMarkContainer>
               <SuccessTitle>Success</SuccessTitle>
               <SuccessMessage>
                    We received your purchase request;<br/> we'll be in touch shortly!
               </SuccessMessage>
               <ActionLinks>
                    <Link to="/" className="checkoutDetailsLink">
                        Home
                    </Link>

                    <Link to="/shop" className="checkoutDetailsLink">
                        Continue Shopping
                    </Link>
               </ActionLinks>
            </PaymentSuccessCard>
        </Wrapper>
    );
};


export default PaymentSuccess;