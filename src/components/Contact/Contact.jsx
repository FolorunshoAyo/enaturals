import React from 'react';
import styled from 'styled-components';
import {smallPhone, res700, res1023} from '../../responsive';

const Container = styled.div`
    margin-top: 3rem;
`;

const ContactWrapper = styled.div`
    display: flex;

    ${res700({flexDirection: "column"})}
`;

const NewsletterContainer = styled.div`
    flex: 1;

    display: flex;
    align-items: center;
    background-color: #B8A398;
    padding: 6rem 5rem 7rem;

    ${smallPhone({padding: "6rem 3rem 7rem"})}
`;

const ContactContainer = styled.div`
    flex: 1;

    display: flex;
    align-items: center;
    background-color: #9AAF8F;
    padding: 7rem 5rem 7rem;

    ${smallPhone({padding: "6rem 3rem 7rem"})}
`;

const Newsletter = styled.div`
    flex: 1;
`;

const ContactInfo = styled.div`
    flex: 1;
`;

const Title = styled.h3`
    font-weight: 300;
    font-size: 2.5rem;
    color: #fff;
    letter-spacing: 1px;
    text-transform: uppercase;
`;    

const InputContainer = styled.div`
    display: flex; 
    justify-content: space-between;
    margin: 5rem 0;
`;

const Input = styled.input`
    border: none;
    border-bottom: 3px solid #fff;
    background-color: transparent;
    padding: 0.5rem 1rem;
    flex: 0 0 70%;
    caret-color: #fff;

    &:focus{
        outline: none;
    }

    &::placeholder{
        color: rgba(255, 255, 255, .8);
    }

    ${res1023({flex: "0 0 60%"})}
    ${res700({flex: "0 0 70%"})}
    ${smallPhone({marginRight: "3px"})}
`;

const Button = styled.div`
    padding: 1.6rem 3.2rem;
    background-color: transparent;
    background-color: #9AAF8F;
    text-transform: uppercase;
    color: #fff;
    text-align: center;
    letter-spacing: 1px;
    flex: 0 0 20%;
    font-weight: 700;
    cursor: pointer;
    font-size: 1.5rem;

    ${smallPhone({padding: "1rem 2.5rem"})}
`;

const ContactDetails = styled.div`
    color: #fff;
    margin: 2.5rem 0;
    font-size: 1.8rem;
`;

const Address = styled.div`
    padding: 0.5rem 0;
`;

const Number = styled.div`
    padding: 0.5rem 0;
`;

const Email = styled.div`
    padding: 0.5rem 0;
`;



const Contact = () => {
    return (
        <Container>
            <ContactWrapper>
                <NewsletterContainer>
                    <Newsletter>
                        <Title>Stay tuned for updates</Title>
                        <InputContainer>
                            <Input placeholder="Your email" type="email" disabled/>
                            <Button disabled>submit</Button>
                        </InputContainer>
                    </Newsletter>
                </NewsletterContainer>
                <ContactContainer>
                    <ContactInfo>
                        <Title>contact us</Title>
                        <ContactDetails>
                            <Address>No.26, Teejay avenue Olumo Oreyo Ikorodu, Lagos</Address>
                            <Number>Call: +234 70 878 571 41</Number>
                            <Email>Email: info@enaturals.com</Email>
                        </ContactDetails>
                    </ContactInfo>
                </ContactContainer>
            </ContactWrapper>
        </Container>
    );
};


export default Contact;