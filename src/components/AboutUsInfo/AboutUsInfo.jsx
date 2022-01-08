import React from 'react';
import styled from 'styled-components';
import Team from '../Team/Teams';
import {teams} from '../../data';
import {smallPhone, res480, medPhone, res700, res860,res1023, res1100} from '../../responsive';

const Container = styled.main`
`;

const AboutUsInfoWrapper = styled.section`
    padding: 10rem 10rem 2rem;

    ${res1100({padding: "10rem 4rem 2rem"})}
    ${res1023({padding: "10rem 2rem 2rem"})}
    ${res700({padding: "7rem 10rem 2rem"})}
    ${medPhone({padding: "7rem 5rem 2rem"})}
`;

const AboutUsWrapper = styled.div`
    padding: 0 2rem;

    ${res1023({width: "85%", margin: "0 auto"})}
    ${res860({width: "100%", margin: "0"})}
`;


const AboutUsContainer = styled.div`
    display: flex;
    height: 430px;

    ${res700({flexDirection: "column", height: "auto", marginBottom: "4rem"})}
`;

const AboutUs = styled.div`
    flex: 0 0 55%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 6.5rem 7.5rem;
    background-color: #f2eeec;

    ${res1023({padding: "4rem 7rem"})}
    ${smallPhone({padding: "2rem 5rem"})}
`;

const AboutUsTitle = styled.h2`
    font-size: 3rem;
    font-weight: 300;
    color: #465354;
    text-transform: uppercase;
    line-height: 1.2;

    ${res1023({fontSize: "2.5rem"})}
`;

const Brand = styled.span`
    font-weight: 400;
    font-style: italic;
    color: #9aaf8f;

`;

const AboutUsContent = styled.p`
    margin: 2rem 0;
    font-family: Lato, sans-serif;
    font-size: 15px;
    color: #465354;
`;

const AboutUsImg = styled.div`
    flex: 1;
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;

    ${res700({flex: "0 0 400px"})}
`;

const StarterQuoteContainer = styled.div`
    display: flex;
    height: 200px;

    ${res700({flexDirection: "column", height: "auto"})}
`;

const StarterImgContainer = styled.div`
    flex: 0 0 55%;
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    ${res700({flex: "0 0 200px"})}
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
    padding: 9rem 0rem 3rem;
`;

const Title = styled.h1`
    font-size: 4.5rem;
    text-transform: uppercase;
    font-weight: 300;
    text-align: center;
    color: #4B5354;
    margin-bottom: 5rem;

    ${res1023({fontSize: "3rem"})}
    ${res860({marginBottom: "4rem"})}
`;

const TeamsWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    ${res1023({width: "85%", margin: "0 auto"})}
    ${res860({width: "100%", margin: "0"})}
    ${res700({width: "80%", margin: "0 auto", flexDirection: "column", justifyContent: "flex-start"})}
    ${res480({width: "60%"})}
    ${smallPhone({width: "80%"})}
`;

const ClientGratificationContainer = styled.div`
    height: 400px;
    margin-bottom: 7rem;
    background: linear-gradient(to right, transparent, #b1c8d6);
`;

 const ClientGratificationWrapper = styled.div`
    height: 100%;
    display: flex;
    justify-content: space-between;

    ${res700({justifyContent: "flex-start"})}
`;

const BackgroundImg = styled.div`
    flex: 0 0 45%; 
    background-image: url(${props => props.background});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;

    ${res700({flex: "1"})}
    ${medPhone({flex: "0 0 40%"})}
`;

const TextBoxContainer = styled.div`
    flex: 0 0 50%;
    display: flex;

    ${res700({flex: "1", alignItems: "center", justifyContent: "center"})}
`;

const TextBox = styled.div`
    padding: 6rem 4rem;
    color: #fff;

    ${res700({padding: "0 3rem"})}
`;

const ClientGratificationTitle = styled.h3`
    font-size: 3rem;
    font-weight: 300;
    text-transform: uppercase;
    line-height: 3rem;

    ${res480({fontSize: "2.5rem"})}
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
            <AboutUsInfoWrapper>
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
            </AboutUsInfoWrapper>
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
                                We thank you for visiting our page and we all at enaturals hope that you will enjoy experiencing our Products. 
                                In every optimitic person, there is a bright future ahead of them. Let us make you happy and keep your shine on,by 
                                keeping your skin in the perfect glow. Thank you once again for your unwavering support and patronage.
                            </ClientGratificationInfo>
                        </TextBox>
                    </TextBoxContainer>
                </ClientGratificationWrapper>    
                </ClientGratificationContainer>
        </Container>
    );
};


export default AboutUsInfo;