import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const Container = styled.div`
    padding: 3rem 0 1rem;
    text-align: center;
    border-top: ${props => props.borderTop? "2px solid #7e8485" : "none"}
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
    
    &:not(:last-child){
        margin-right: 20px;
    }
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
                        <FacebookIcon style={{fontSize: 25}}/>
                    </Icon>
                </IconContainer>
                <IconContainer>
                    <Icon>
                        <TwitterIcon style={{fontSize: 25}}/>
                    </Icon>
                </IconContainer>
                <IconContainer>
                    <Icon>
                        <WhatsAppIcon style={{fontSize: 25}}/>
                    </Icon>
                </IconContainer>
                <IconContainer>
                    <Icon>
                        <InstagramIcon style={{fontSize: 25}}/>
                    </Icon>
                </IconContainer>
            </SocialContainer>
        </Container>
    ); 
};

export default Footer;