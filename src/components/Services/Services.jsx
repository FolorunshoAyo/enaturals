import React from 'react';
import styled from 'styled-components';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import CleanHandsIcon from '@mui/icons-material/CleanHands';
import SpaIcon from '@mui/icons-material/Spa';
import {tabPort} from '../../responsive';

const Container = styled.div`
    background-color: #B092B0;
    padding: 6rem 5rem;
`;

const Row = styled.div`
    display: flex;
    padding: 0 1rem;
    justify-content: space-between;

    ${tabPort({flexDirection: "column"})}
`;

const ServiceItem = styled.div`
    text-align: center;
    color: white;

    ${tabPort({padding: "3rem 0"})}
`;

const ServiceIcon = styled.div`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: rgba(255,255,255,.9);
    color: #B092B0;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ServiceInfo = styled.div`
    padding-top: 20px;
`;

const ServiceTitle = styled.h6`
    text-transform: uppercase;
    letter-spacing: 1px;
    font-size: 1.4rem;
    padding-bottom: 14px;
    width: 60%;
    margin: 0 auto;
    border-bottom: 2px solid #fff;

    ${tabPort({width: "40%"})}
`;

const ServiceDescription = styled.p`
    font-size: 18px;
    padding: 20px 10px;
`;

const Services = () =>{
    return (
        <Container>
        <Row>
            <ServiceItem>
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
            <ServiceItem>
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
            <ServiceItem>
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
            <ServiceItem>
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