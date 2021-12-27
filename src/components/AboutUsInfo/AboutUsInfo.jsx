import React from 'react';
import styled from 'styled-components';
import Team from '../Team/Teams';
import {teams} from '../../data';

const Container = styled.div`
    padding: 6rem 4rem
`;

const AboutUsWrapper = styled.div`
    padding: 0 2rem;
`;


const AboutUsContainer = styled.div`
    display: flex;
`;

const AboutUs = styled.div`
    flex: 0 0 55%;
    padding: 6rem 7rem;
    background-color: #f2eeec;
`;

const AboutUsTitle = styled.h2`
    font-size: 3rem;
    font-weight: 300;
    color: #465354;
    text-transform: uppercase;
    letter-spacing: 1px;
`;

const Brand = styled.span`
    font-weight: 400;
    font-style: italic;
    color: #9aaf8f;

`;

const AboutUsContent = styled.p`
    margin: 2rem 0;
    font-family: Lato, sans-serif;
    font-size: 2rem;
`;

const AboutUsImg = styled.div`
    flex: 1;
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
`;

const StarterQuoteContainer = styled.div`
    display: flex;
    height: 300px
`;

const StarterImgContainer = styled.div`
    flex: 0 0 55%;
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const StarterQuote = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    padding: 4rem;
    background-color: #b8a398;
`;

const Quote = styled.div`
    font-size: 2rem;
    position: relative;
    font-weight: 400;
    font-family: Lato, sans-serif;
    line-height: 26px;
    color: #fff;

    &::before{
        content: '“';
        font-size: 40px;
        position: absolute;
        right: 101%;
    }

    &::after{
        content: '”';
        position: absolute;
        top: 90%;
        font-size: 40px;
    }
`;

const TeamsContainer = styled.div`
    padding: 9rem 4rem 3rem;
`;

const Title = styled.h1`
    font-size: 4.5rem;
    text-transform: uppercase;
    font-weight: 300;
    text-align: center;
    color: #4B5354;
    margin-bottom: 5rem;
`;

const TeamsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const ClientGratificationContainer = styled.div`
    height: 400px;
    background: linear-gradient(to right, transparent, #b1c8d6);
`;

 const ClientGratificationWrapper = styled.div`
    padding: 0 5rem;
    height: 100%;
    display: flex;
    justify-content: space-between;
`;

const BackgroundImg = styled.div`
    flex: 0 0 45%; 
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
`;

const TextBoxContainer = styled.div`
    flex: 0 0 50%;
    display: flex;
`;

const TextBox = styled.div`
    padding: 6rem 4rem;
    color: #fff;
`;

const ClientGratificationTitle = styled.h3`
    font-size: 3rem;
    font-weight: 300;
    text-transform: uppercase;
    line-height: 3rem;
`;

const ClientGratificationInfo = styled.p`
    font-size: 1.5rem;
    font-family: Lato, sans-serif;
    line-height: 2.5rem;
    font-weight: 400;
    margin: 3rem 0;
`;

const AboutUsInfo = () => {
    return (
        <Container>
            <AboutUsWrapper>
                <AboutUsContainer>
                    <AboutUs>
                        <AboutUsTitle>About <Brand>E-naturals</Brand> Products</AboutUsTitle>
                        <AboutUsContent>
                            Handmade soap is exactly that made by hand. They are made with vegetable oil and/or animals fats for their skin care properties. 
                            The soapmaker will often include additives to the soap for their healing, exfoliating and esthetic properties. 
                            The final product if further handcrafted by the creator with regards to packaging design. lorem ipsum dolor apset popo
                        </AboutUsContent>
                    </AboutUs>
                    <AboutUsImg background="../enaturals/enaturals5.jpg">

                    </AboutUsImg>
                </AboutUsContainer>
                <StarterQuoteContainer>
                    <StarterImgContainer background="../enaturals/enaturals6.jpg">

                    </StarterImgContainer>
                    <StarterQuote>
                        <Quote>
                        We started out with two pots on our stove, and we remain committed to the handmade way
                        </Quote>
                    </StarterQuote>
                </StarterQuoteContainer>
            </AboutUsWrapper>
            <TeamsContainer>
                <Title>Our Team</Title>
                <TeamsWrapper>
                    {teams.map(team => (
                        <Team
                        key={team.id}
                        img={team.img}
                        name={team.name}
                        socials={team.socialLinks}
                        position={team.position} 
                        />
                    ))}
                </TeamsWrapper>
            </TeamsContainer>
            <ClientGratificationContainer>
                <ClientGratificationWrapper>
                    <BackgroundImg background="../enaturals/enaturals5.jpg">

                    </BackgroundImg>
                    <TextBoxContainer>
                        <TextBox>
                            <ClientGratificationTitle>
                                We Love Our Client
                            </ClientGratificationTitle>
                            <ClientGratificationInfo>
                                We thank you for visiting our page and hope that you will enjoy experiencing our Products. 
                            </ClientGratificationInfo>
                        </TextBox>
                    </TextBoxContainer>
                </ClientGratificationWrapper>    
            </ClientGratificationContainer>
        </Container>
    );
};


export default AboutUsInfo;