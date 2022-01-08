import React from 'react';
import styled from 'styled-components';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import {res480, medPhone, res750, tabPort, tabLand, medDesktop, bigDesktop} from '../../responsive';

const Container = styled.section`

    ${bigDesktop({width: "1400px", margin: "0 auto"})}
    ${medDesktop({width: "1200px", margin: "0 auto"})}
    ${tabLand({width: "100%", margin: "0 auto"})}
`;

const TeamInfoContainer = styled.div`
    padding: 10rem 5rem;

    ${res750({padding: "8rem 15rem"})}
    ${medPhone({padding: "5rem 8rem"})}
    ${res480({padding: "5rem 6rem"})}
`;

const TeamInfoWrapper = styled.div`
    display: flex;

    ${res750({flexDirection: "column"})}
`;

const TeamImageContainer = styled.div`
    flex: 0 0 320px;
    padding-right: 4rem;

    ${bigDesktop({flex: "0 0 500px"})}
    ${medDesktop({flex: "0 0 400px"})}
    ${tabLand({flex: "0 0 380px"})}
    ${tabPort({flex: "0 0 280px", height: "320px", paddingRight: "2rem"})}
    ${res750({flex: "0 0 440px", marginBottom: "4rem", paddingRight: "0"})}
    ${res480({flex: "0 0 280px"})}
`;


const TeamImage = styled.img`
    width: 100%;
    height: 100%;
`;

const TeamDescription = styled.div`  
    flex: 1;
`;

const TeamPosition = styled.h3`
    font-size: 3rem;
    font-weight: 300;
    text-transform: uppercase;
    color: #4b5354;

    ${tabLand({fontSize: "4rem"})}
    ${tabPort({fontSize: "3rem"})}
`;

const TeamEmail = styled.div`
    font-size: 1.5rem;
    font-family: Lato, sans-serif;
    color: #7E8485;
    margin: 2rem 0;
`;

const Email = styled.a`
    color: #ACBFA3;
    text-decoration: none;
    transition: all .5s ease;

    &:hover{
        color: #B8A398;
    }
`;

const TeamDescriptionInfo = styled.p`
    margin-bottom: 3.5rem;
    font-size: 1.5rem;
    font-family: Lato, sans-serif;
    color: #7E8485;
`;

const TeamSocialsContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 1rem;
`;

const IconContainer = styled.div`
    display: inline-block;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background-color: #CCCCBE;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all .5s ease;
    cursor: pointer;

    &:not(:last-child){
        margin-right: 15px;
    }

    &:hover{
        background-color: #B8A398;
    }
`;

const TeamFurtherInfo = styled.div`
    text-align: justify;
    font-size: 1.5rem;
    color: #7E8485;
    font-family: Lato, sans-serif;
    margin: 4rem 0;
`;

const TeamInfo = () => {
    return (
        <Container>
            <TeamInfoContainer>
                <TeamInfoWrapper>
                    <TeamImageContainer>
                        <TeamImage src="../enaturals/enaturals5.jpg"/>
                    </TeamImageContainer>
                    <TeamDescription>
                        <TeamPosition>Manager</TeamPosition>
                        <TeamEmail>E-mail:<Email href="#"> tijaniAbimbola@server.com</Email></TeamEmail>
                        <TeamDescriptionInfo>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                            Commodi temporibus aspernatur vitae atque numquam sapiente rem officia cumque fugit enim minima impedit accusamus quia sit, 
                            ipsa nesciunt eveniet error, necessitatibus perspiciatis dolor vero eum non blanditiis!
                            Consequatur, ea, voluptate quas qui itaque vero error nemo quam voluptates sapiente, a assumenda molestias enim natus cum dignissimos vitae animi magnam nisi corporis in. 
                            Voluptate quibusdam recusandae alias maiores, blanditiis consequuntur eaque mollitia?
                        </TeamDescriptionInfo>
                        <TeamSocialsContainer>
                            <IconContainer>
                                <FacebookIcon style={{fontSize: 20, color: '#fff'}}/>
                            </IconContainer>
                            <IconContainer>
                                <TwitterIcon style={{fontSize: 20, color: '#fff'}} />
                            </IconContainer>
                            <IconContainer>
                                <WhatsAppIcon style={{fontSize: 20, color: '#fff'}} />
                            </IconContainer>
                            <IconContainer>
                                <InstagramIcon style={{fontSize: 20, color: '#fff'}} />
                            </IconContainer>
                        </TeamSocialsContainer>
                    </TeamDescription>
                </TeamInfoWrapper>
                <TeamFurtherInfo>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam deserunt perspiciatis laboriosam. Nam fugiat eos rem provident quas placeat officia ullam, 
                    modi asperiores, ex quibusdam molestiae et nostrum, architecto omnis? Dignissimos consequatur sit laudantium, culpa odit perspiciatis. 
                    Beatae illum adipisci dignissimos facere impedit similique, cumque reiciendis quas? Quaerat repudiandae ipsa, consequatur optio eaque animi quas 
                    saepe asperiores nesciunt in enim nulla suscipit possimus laudantium aut perspiciatis nobis ratione facilis illo incidunt rem sint odit? 
                    Omnis vero repellat dolor hiclaboriosam quis vel voluptates minima eius quas maxime blanditiis expedita, 
                    nihil error totam veritatis! Expedita voluptatibus animi nemo itaque, dolores reprehenderit quod odio a est molestiae illo at ab quae atque 
                    nihil velit cupiditate laudantium, ad doloremque quia aspernatur laborum necessitatibus!
                </TeamFurtherInfo>
            </TeamInfoContainer>
        </Container>
    );
};


export default TeamInfo;