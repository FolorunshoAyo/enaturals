import React, { useState } from 'react';
import styled from 'styled-components';
import { states } from '../../data';
import './datalist.css';
import ReactHtmlDatalist from 'react-html-datalist';

const PaymentContainer = styled.section`
    padding: 15rem 10rem;
`;

const PaymentWrapper = styled.div`
    color: #7E8485
`;

const PaymentMainForm = styled.form`
    display: flex;
    justify-content: space-between;
`; 

const BillingDetailsContainer = styled.div`
    flex: 0 0 48%;
`;

const BillingDetails = styled.div`
    padding: 1rem 0;
`;

const AdditionalInformationContainer = styled.div`
    flex: 0 0 48%;
`;

const AdditionalInformation = styled.div`
    padding: 1rem 0;
`;

const Title = styled.h3`
    margin-bottom: 1.5rem;
    color: #4B5354;
    font-size: 3rem;
    font-weight: 300;
    text-transform: uppercase;
`;

const NameContainer = styled.div`
    display: flex;  
    justify-content: space-between;
    margin-bottom: 1rem;
`;

const Firstname = styled.div`
    flex: 0 0 45%;
`;

const Lastname = styled.div`
    flex: 0 0 45%;
`;

const Label = styled.label`
    display: block;
    font-size: 1.5rem;
    font-family: Lato, sans-serif;
`;

const Required = styled.span`
    color: #A00;
    font-size: 2rem;
`;

const Input = styled.input`
    width: 100%;
    padding: 1.5rem 0.6rem;
    font-family: Lato, sans-serif;
    border: none;
    border-bottom: 2px solid #bdc0c0;
    transition: all .2s ease-in;

    &:focus{
        outline: none;
        border-bottom: 2px solid #4B5354;
    }
`;

const StreetAddress = styled.div`
    margin-bottom: 1rem;
`;

const TownOrCity = styled.div`
    margin-bottom: 1rem;
`;

const State = styled.div`
    margin-bottom: 1rem;
`;

const Phone = styled.div`
    margin-bottom: 1rem;
`;

const EmailAddress = styled.div`
    margin-bottom: 1rem;
`;

const NoteContainer = styled.div`
    margin-bottom: 1rem;

`;

const Note = styled.textarea`
    height: 56px;
    overflow-y: auto;
    font-family: Lato, sans-serif;
    border: none;
    padding: 1.5rem 0.6rem;
    border-bottom: 2px solid #bdc0c0;
    resize: none;
    width: 100%;
    transition: all .2s ease-in;

    &:focus{
        outline: none;
        border-bottom: 2px solid #4B5354;
    }
`;



const PaymentForm = () => {
    const [detail, setDetail] = useState({state: ""});

    const handleChange = e => {
        setDetail({...detail, [e.target.name]: e.target.value})
    }

    return(
        <PaymentContainer>
            <PaymentWrapper>
                <PaymentMainForm>
                    <BillingDetailsContainer>
                        <BillingDetails>
                            <Title>
                                Billing Details
                            </Title>
                            <NameContainer>
                                <Firstname>
                                    <Label for="fname">
                                        First name <Required>*</Required>
                                    </Label>
                                    <Input type="text" name="fname" id="fname"/>
                                </Firstname>
                                <Lastname>
                                    <Label for="lname">
                                        Last name <Required>*</Required>
                                    </Label>
                                    <Input type="text" name="lname" id="lname"/>
                                </Lastname>
                            </NameContainer>
                            <StreetAddress>
                                    <Label for="streetAddress">
                                        Street address <Required>*</Required>
                                    </Label>
                                    <Input type="text" name="streetAddress" id="lname"/>
                            </StreetAddress>
                            <TownOrCity>
                                    <Label for="city">
                                        Town/City <Required>*</Required>
                                    </Label>
                                    <Input type="text" name="city" id="city"/>
                            </TownOrCity>
                            <State>
                                <Label for="state">
                                    State <Required>*</Required>
                                </Label>
                                <ReactHtmlDatalist 
                                    name="state"
                                    onChange={handleChange}
                                    classNames={"datalistEl"}
                                    options={[
                                        { text: "Kwara", value: "Kwara"},
                                        { text: "Kogi", value: "Kogi"},
                                        { text: "Lagos", value: "Lgos"},
                                        { text: "Ogun", value: "Ogun"}
                                    ]}
                                />
                            </State>
                            <Phone>
                                <Label for="phone">
                                    Town/City <Required>*</Required>
                                </Label>
                                <Input type="text" name="phone" id="phone"/>
                            </Phone>
                            <EmailAddress>
                                <Label for="email">
                                    Email address <Required>*</Required>
                                </Label>
                                <Input type="email" name="email" id="email"/>
                            </EmailAddress>
                        </BillingDetails>
                    </BillingDetailsContainer>
                    <AdditionalInformationContainer>
                        <AdditionalInformation>
                            <Title>
                                Additional Information
                            </Title>
                            <NoteContainer>
                                <Label for="notes" required={false}>
                                    Order notes (optional)
                                </Label>
                                <Note name="notes" placeholder="Notes about your order e.g special notes for delivery." id="notes">

                                </Note>
                            </NoteContainer>
                        </AdditionalInformation>
                    </AdditionalInformationContainer>
                </PaymentMainForm>
            </PaymentWrapper>
        </PaymentContainer>
    );
};


export default PaymentForm;