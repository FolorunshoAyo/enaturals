import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import {smallPhone} from '../../responsive';

const Container = styled.div`
    padding: 3rem 0 1rem;
    text-align: center;
    border-top: ${props => props.borderTop? "2px solid #f4f5f5" : "none"}
`;


const OwnerInfo = styled.div`
    font-size: 1.5rem;
`;

const Copyright = styled.span`
    color: #9AAF8F;
`;

const SocialContainer = styled.div`
    padding: 3rem 0;
`;

const IconContainer=styled.div`
    display: inline-block;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background-color: #9AAF8F;
    cursor: pointer;
    color: #fff;
    transition: all .5s ease;
    
    &:not(:last-child){
        margin-right: 20px;

        ${smallPhone({marginRight: "10px"})}
    }

    &:hover{
        background-color: #B8A398;
    }

    ${smallPhone({width: "35px", height: "35px"})}
`;
const Icon = styled.span`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Footer = ({borderTop}) => {
    return (
        <Container borderTop={borderTop}>
            <OwnerInfo>
                E-Naturals <Copyright> © {new Date().getFullYear()} All rights reserved. </Copyright>
            </OwnerInfo>
            <SocialContainer>
                <IconContainer>
                    <Icon>
                        <FacebookIcon style={{fontSize: 20}}/>
                    </Icon>
                </IconContainer>
                <IconContainer>
                    <Icon>
                        <TwitterIcon style={{fontSize: 20}}/>
                    </Icon>
                </IconContainer>
                <IconContainer>
                    <Icon>
                        <WhatsAppIcon style={{fontSize: 20}}/>
                    </Icon>
                </IconContainer>
                <IconContainer>
                    <Icon>
                        <InstagramIcon style={{fontSize: 20}}/>
                    </Icon>
                </IconContainer>
            </SocialContainer>
        </Container>
    ); 
};

export default Footer;