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
    height:200px; 
    margin: 0 auto;
    text-align: center;
    width:200px; 
    background: #FEF6F6;
`;

const CrossIcon = styled.i`
    color: #B4615E;
    font-size: 100px;
    line-height: 200px;
    margin-left:-15px;
`;

const FailureTitle = styled.h1`
    color: #E0B4B4;
    font-family: Lato, sans-serif;
    font-weight: 900;
    font-size: 40px;
    text-align: center;
    margin-bottom: 10px;
`;

const FailureMessage = styled.p`
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

const PaymentFailure = () => {
    return(
        <Wrapper>
            <PaymentSuccessCard>
               <CheckMarkContainer>
                    <CrossIcon>x</CrossIcon>
               </CheckMarkContainer>
               <FailureTitle>Success</FailureTitle>
               <FailureMessage>
                    We received your purchase request;<br/> we'll be in touch shortly!
               </FailureMessage>
               <ActionLinks>
                    <Link to="/" className="checkoutDetailsLink">
                        Home
                    </Link>

                    <Link to="/checkout" className="checkoutDetailsLink">
                        Try again
                    </Link>
               </ActionLinks>
            </PaymentSuccessCard>
        </Wrapper>
    );
};


export default PaymentFailure;