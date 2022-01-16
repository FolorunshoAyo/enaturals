import React from 'react';
import styled from 'styled-components';
import { states } from '../../data';

const PaymentContainer = styled.section`
    padding: 5rem 10rem;
`;

const PaymentWrapper = styled.div`
    color: #7E8485
`;

const PaymentMainForm = styled.form`
    display: flex;
`; 

const BillingDetailsContainer = styled.div`
    flex: 1;
`;

const BillingDetails = styled.div`
    padding: 1rem 0;
`;

const AdditionalInformationContainer = styled.div`
    flex: 1;
`;

const AdditionalInformation = styled.div`
    padding: 1rem 0;
`;

const Title = styled.h3`
    margin-bottom: 1.5rem;
    color: #4B5354;
    font-size: 2rem;
`;

const NameContainer = styled.div`
    display: flex;  
    justify-content: space-betwwen;
`;

const Firstname = styled.div`
    flex: 0 0 45%;
`;

const Label = styled.label`
    display: block;
`;

const Required = styled.span`
    color: #A00;
    font-size: 0.8rem;
`;


const PaymentForm = () => {
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
                                <Input type="text" placeholder="Select an option..." name="state" list="states" id="state"/>
                                <States id="state">
                                    {states.map(state => {
                                        <Option value={state} />
                                    })}
                                </States>
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