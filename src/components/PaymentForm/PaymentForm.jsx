import React, { useState } from 'react';
import styled from 'styled-components';
import { states } from '../../data';
import './datalist.css';
import ReactHtmlDatalist from 'react-html-datalist';

const PaymentContainer = styled.section`
    padding: 15rem 10rem;
    color: #7E8485;
`;

const PaymentWrapper = styled.div``;

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


const YourOrderContainer = styled.section`
    margin: 4rem 0 2rem;
`;

const TableContainer = styled.div`
`;

const Table = styled.table`
    width: 100%;
    border-spacing: 0.1rem;
    font-size: 1.5rem;
`; 

const TableHeader = styled.thead`
    background-color: #B8A398;
    color: #fff;
    text-transform: uppercase;
`;

const TableRow = styled.tr`
    padding: 9px 12px;
`;

const TableHead = styled.th`
    padding: 9px 12px;
    text-align: left;
`;

const TableBody = styled.tbody`
`;

const CartItem = styled.tr`
`;

const ProductName = styled.td`
    padding: 9px 12px;
    border-bottom: 1px solid #cabbb2;
`;

const ProductPrice = styled.td`
    padding: 9px 12px; 
    border-bottom: 1px solid #cabbb2;
`;

const Subtotal = styled.td`
    padding: 9px 12px;
    text-transform: uppercase;
`;

const SubtotalPrice = styled.td`
    padding: 9px 12px;
    border-bottom: 1px solid #cabbb2;
`;

const Total = styled.td`
    padding: 9px 12px;
    text-transform: uppercase;
`;

const TotalPrice = styled.td`
    padding: 9px 12px;
    border-bottom: 1px solid #cabbb2;
`;

const PaymentOptionContainer = styled.div`
    padding: 1.5rem;
    margin: 5rem 0;
    border-top: 2px solid #f4f5f5; 
    border-bottom: 2px solid #f4f5f5; 
`;

const PaymentOption = styled.label`
    font-family: Lato, sans-serif;
    font-size: 1.5rem;
`;

const RadioInput = styled.input`
`;

const FlutterCaption = styled.span`
    display: inline-block;
    padding-left: 1.5rem;
    font-family: Lato, sans-serif;
`;

const FlutterImage = styled.img`
    width: 100px;
    height: 30px;
    vertical-align: middle;
`;

const PaymentBox = styled.div`
    padding: 1.5rem;
    margin: 1.5rem 0;
`;

const Paragraph = styled.p`
    font-family: Lato, sans-serif;
    font-size: 1.5rem;
`;

const PlaceOrderBox = styled.div`
    padding: 1.5rem;
    margin: 1.5rem 0;
`;

const Agreement = styled.label`
    font-family: Lato, sans-serif;
    font-size: 1.5rem;
`;

const AgreementCaption = styled.span`
    padding-left: 1.5rem;
    font-family: Lato, sans-serif;
`;

const Checkbox = styled.input`
    vertical-align: middle;
`;

const SubmitButtonContainer = styled.div`
    text-align: end;
`;

const SubmitButton = styled.input`
    padding: 16px 35px;
    border: 3px solid #B8A398;
    font-family: Lato, sans-serif;
    text-transform: uppercase;
    font-size: 1.5rem;
    background-color: transparent;
    display: inline-block;
    cursor: pointer;
    color: #B8A398;
    transition: all .5s ease;
    font-weight: 600;

    &:hover{
        color: #fff;
        background-color: #B8A398;
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
                <YourOrderContainer>
                    <Title>Your Order</Title>
                    <TableContainer>
                        <Table>
                            <TableHeader>
                                <TableRow>
                                    <TableHead>
                                        Product
                                    </TableHead>
                                    <TableHead>
                                        Subtotal
                                    </TableHead>
                                </TableRow>
                            </TableHeader>
                            <TableBody>
                                <CartItem>
                                    <ProductName>
                                        Hand care set with vitamin B x 1
                                    </ProductName>
                                    <ProductPrice>
                                        47.00
                                    </ProductPrice>
                                </CartItem>
                                <TableRow>
                                    <Subtotal>
                                        Subtotal
                                    </Subtotal>
                                    <SubtotalPrice>
                                        47.00
                                    </SubtotalPrice>
                                </TableRow>
                                <TableRow>
                                    <Total>
                                        Total
                                    </Total>
                                    <TotalPrice>
                                        47.00
                                    </TotalPrice>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </YourOrderContainer>
                <PaymentOptionContainer>
                    <PaymentOption>
                        <RadioInput type="radio" disabled checked/> 
                        <FlutterCaption> 
                            Flutterwave Payment <FlutterImage src="../enaturals/flutterwave-logo.jpeg" alt="flutterwave image"/> 
                        </FlutterCaption>
                    </PaymentOption>
                    <PaymentBox>
                        <Paragraph>
                            Pay through the Flutterwave Payment Gateway
                        </Paragraph>
                    </PaymentBox>
                </PaymentOptionContainer>
                <PlaceOrderBox>
                    <Agreement for="agreement">
                        <Checkbox type="checkbox" name="agreement" id="agreement"/>
                        <AgreementCaption>
                        By using this form, you agree with the storage and usage of data by this website.
                        </AgreementCaption>
                    </Agreement>
                    <SubmitButtonContainer>
                        <SubmitButton type="submit" value="Place Order"/>
                    </SubmitButtonContainer>
                </PlaceOrderBox>
            </PaymentWrapper>
        </PaymentContainer>
    );
};


export default PaymentForm;