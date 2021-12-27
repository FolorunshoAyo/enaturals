import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

const IconContainer = styled.div`
    display: inline-block;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: #ccccbe;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .5s ease;
    cursor: pointer;
    opacity: 0;

    &:not(:last-child){
        margin-right: 10px;
    }

    &:hover{
        background-color: #b8a398;
    }
`;

const TeamCard = styled.div`
    flex: 0 0 23%;

    &:hover ${IconContainer}{
        opacity: 1;
    }
`;

const HoverView = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background-color: rgba(184, 163, 152, .6);
    display: flex;
    align-items: center;
    justify-content: center;
    color: #ACBFA3;
    font-size: 10rem;
    transition: all .5s ease-in-out;
    opacity: 0;
`;

const TeamImg = styled.div`
    height: 215px;
    position: relative;
    cursor: pointer;

    &:hover ${HoverView}{
        opacity: 1;
    }
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
`;

const TeamInfo = styled.div`
    padding: 3rem;
    text-align: center;
`;

const TeamName = styled.div`
    font-size: 2.5rem;
    color: #4B5354;
    line-height: 30px;
    text-transform: uppercase;
    transition: color .4s ease-in;
    cursor: pointer;

    &:hover{
        color: #ACBFA3;
    }
`;


const TeamPosition = styled.div`
    font-size: 1.3rem;
    color: #7E8485;
    font-family: Lato, sans-serif;
    margin-top: 1rem;
`;

const SocialsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 1rem;
`;


const Teams = ({img, name, socials, position}) => {
    return (
        <TeamCard>
            <TeamImg>
                <Image src={img} />
                <HoverView>
                    ...
                </HoverView>
            </TeamImg>
            <TeamInfo>
                <TeamName>
                    {name}
                </TeamName>
                <TeamPosition>
                    {position}
                </TeamPosition>
                <SocialsContainer>
                    <IconContainer>
                        <FacebookIcon style={{fonstSize: 20, color: '#fff'}}/>
                    </IconContainer>
                    <IconContainer>
                        <TwitterIcon style={{fonstSize: 20, color: '#fff'}} />
                    </IconContainer>
                    <IconContainer>
                        <WhatsAppIcon style={{fonstSize: 20, color: '#fff'}} />
                    </IconContainer>
                    <IconContainer>
                        <InstagramIcon style={{fonstSize: 20, color: '#fff'}} />
                    </IconContainer>
                </SocialsContainer>
            </TeamInfo>
        </TeamCard>
    );
};


export default Teams;