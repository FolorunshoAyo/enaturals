import React from 'react';
import styled from 'styled-components';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import SpaIcon from '@mui/icons-material/Spa';
import {tabPort, res1023} from '../../responsive';

const Container = styled.div`
    padding: 6rem 3rem;
`;

const Row = styled.div`
    display: flex;
    padding: 0 1rem;
    justify-content: space-between;

    ${res1023({width: "85%", margin: "0 auto", padding: "4rem 0 0"})}
    ${tabPort({flexDirection: "column"})}
`;

const ServiceItem = styled.div`
    text-align: center;
    color: white;
    background-color: ${props => props.color};
    flex: 0 0 24%;
    padding: 3rem 2rem;

    ${tabPort({padding: "3rem 0", marginBottom: "2rem"})}
`;

const ServiceIcon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #ffffff4D;
    color: #fff;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover{
        color: #B8A398;
    }
`;

const ServiceInfo = styled.div`
    padding-top: 20px;
`;

const ServiceTitle = styled.h6`
    text-transform: uppercase;
    font-size: 1.8rem;
    padding-bottom: 14px;
    width: 60%;
    margin: 0 auto;
    border-bottom: 2px solid #fff;
    font-weight: 400;

    ${tabPort({width: "30%"})}
`;

const ServiceDescription = styled.p`
    font-size: 1.5rem;
    padding: 20px 10px;
    font-family: Lato, sans-serif;
`;

const Services = () =>{
    return (
        <Container>
        <Row>
            <ServiceItem color="#ACBFA3">
                <ServiceIcon>
                    <LocalShippingIcon style={{fontSize: 35}}/>
                </ServiceIcon>
                <ServiceInfo>
                    <ServiceTitle>
                        Fast Delivery
                    </ServiceTitle>
                    <ServiceDescription>
                        Our products get delivered to you right at your doorstep in no time
                    </ServiceDescription>
                </ServiceInfo>
            </ServiceItem>
            <ServiceItem color="#86B398">
                <ServiceIcon>
                    <CardGiftcardIcon style={{fontSize: 35}}/>
                </ServiceIcon>
                <ServiceInfo>
                    <ServiceTitle>
                            Beautifully Packed
                    </ServiceTitle>
                    <ServiceDescription>
                        Each product is gently packed in a stylish and colourful wrap
                    </ServiceDescription>
                </ServiceInfo>
            </ServiceItem>
            <ServiceItem color="#B8A398">
                <ServiceIcon>
                    <CleanHandsIcon style={{fontSize: 35}}/>
                </ServiceIcon>
                <ServiceInfo>
                    <ServiceTitle>
                        Truly Handmade
                    </ServiceTitle>
                    <ServiceDescription>
                        Everything in our shop is made by hand and wuth great care
                    </ServiceDescription>
                </ServiceInfo>
            </ServiceItem>
            <ServiceItem color="#B092B0">
                <ServiceIcon>
                    <SpaIcon style={{fontSize: 35}}/>
                </ServiceIcon>
                <ServiceInfo>
                    <ServiceTitle>
                        100% Organic
                    </ServiceTitle>
                    <ServiceDescription>
                        Everything in our shop is made by hand and wuth great care
                    </ServiceDescription>
                </ServiceInfo>
            </ServiceItem>
        </Row>
    </Container>
    );
}

export default Services