import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import { states } from '../../data';
import './datalist.css';
// import ReactHtmlDatalist from 'react-html-datalist';
import { res860, smallPhone } from "../../responsive";
import CheckoutCartItems from '../CheckoutCartItems/CheckoutCartItems';
import toast from 'react-hot-toast';
import { publicRequest } from "../../requestMethod";
import { CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';
import { matchProductsToSchema, mergeSimilarProductAccToID, numberWithCommas } from '../../usefulFunc';
import { Link, useNavigate } from 'react-router-dom';
import { medPhone } from '../../responsive';
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import { addOrder } from '../../redux/apiCalls';

const PaymentContainer = styled.section`
    padding: 5rem 10rem;
    color: #7E8485;

    ${res860({padding: "5rem"})}
`;

const PaymentWrapper = styled.div``;

const DefaultAddressContainer = styled.div`
    border-radius: 10px;
    overflw: hidden;
    border: 1px solid rgb(237, 237, 237);
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px; 
`;

const ProgressWrapper = styled.div`
    height: 200px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const DefaultAddressTitle = styled.div`
    padding: 1rem 2rem;
    border-bottom: 2px solid rgb(237, 237, 237);
    font-size: 2rem;
    text-transform: capitalize;
    color: #000;
    font-family: Lato, sans-serif;
    margin-bottom: 1rem;
`;

const NoDefaultAddressError = styled.div`
    text-align: center;
    font-size: 2rem;
    font-family: Lato, sans-serif;
    padding: 4rem 0;
`;

const AddAddressContainer = styled.div`
    margin-top: 1rem;
`;

const DefaultAddressContent= styled.div`
    display: flex;
    padding: 1rem 2rem;
    justify-content: center;

    ${medPhone({display: "block"})}
`;

const RecipientDetails = styled.div`
    flex: 0 0 60%;

    ${medPhone({marginBottom: "25px"})}
`;

const ChangeDefaultAddressContainer = styled.div`
    flex: 0 0 35%;
    display: flex;
    justify-content: center;
    align-items: center;

    ${medPhone({height: "40px"})}
`;

const RecipientName = styled.p`
    color: #282828;
    font-size: 1.5rem;
    padding-bottom: 1rem;
    font-family: Lato, sans-serif;
`;

const Address = styled.p`
    color: #75757A;
    font-size: 1.5rem;
    font-family: Lato, sans-serif;
`;

const AdditionalInfo = styled(Address)``;

const AddressNumber = styled(Address)``;

const AddressLocation = styled.p`
    color: #75757A;
    font-size: 1.5rem;
    font-family: Lato, sans-serif;
`;

const City = styled.span`
    font-family: inherit;
`;

const State = styled.span`
    font-family: inherit;
`;


// const PaymentMainForm = styled.form`
//     display: flex;
//     justify-content: space-between;

//     ${res750({flexDirection: "column", justifyContent: "flex-start"})}
// `; 

// const BillingDetailsContainer = styled.div`
//     flex: 0 0 48%;

//     ${res750({flex: "initial", marginBottom: "20px"})}
// `;

// const BillingDetails = styled.div`
//     padding: 1rem 0;
// `;

// const AdditionalInformationContainer = styled.div`
//     flex: 0 0 48%;

//     ${res750({flex: "initial"})}
// `;

// const AdditionalInformation = styled.div`
//     padding: 1rem 0;
// `;

const Title = styled.h3`
    margin-bottom: 1.5rem;
    color: #4B5354;
    font-size: 2.5rem;
    font-weight: 300;
    text-transform: uppercase;
`;

// const NameContainer = styled.div`
//     display: flex;  
//     justify-content: space-between;
//     margin-bottom: 30px;
// `;

// const Firstname = styled.div`
//     flex: 0 0 45%;
// `;

// const Lastname = styled.div`
//     flex: 0 0 45%;
// `;

// const Label = styled.label`
//     display: block;
//     font-size: 1.5rem;
//     font-family: Lato, sans-serif;
// `;

// const Required = styled.span`
//     color: #A00;
//     font-size: 2rem;
// `;

// const Input = styled.input`
//     width: 100%;
//     padding: 1.5rem 0.6rem;
//     font-family: Lato, sans-serif;
//     border: none;
//     border-bottom: 2px solid #bdc0c0;
//     transition: all .2s ease-in;

//     &:focus{
//         outline: none;
//         border-bottom: 2px solid #4B5354;
//     }
// `;

// const StreetAddress = styled.div`
//     margin-bottom: 30px;
// `;

// const TownOrCity = styled.div`
//     margin-bottom: 30px;
// `;

// const State = styled.div`
//     margin-bottom: 30px;
// `;

// const Phone = styled.div`
//     margin-bottom: 30px;
// `;

// const EmailAddress = styled.div`
//     margin-bottom: 30px;
// `;

// const NoteContainer = styled.div`
//     margin-bottom: 30px;

// `;

// const Note = styled.textarea`
//     height: 56px;
//     overflow-y: auto;
//     font-family: Lato, sans-serif;
//     border: none;
//     padding: 1.5rem 0.6rem;
//     border-bottom: 2px solid #bdc0c0;
//     resize: none;
//     width: 100%;
//     transition: all .2s ease-in;

//     &:focus{
//         outline: none;
//         border-bottom: 2px solid #4B5354;
//     }
// `;


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
    display: flex;
    align-items: center;
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
    width: 50px;
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

const AgreementCheckboxContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const Agreement = styled.label`
    font-family: Lato, sans-serif;
    font-size: 1.5rem;
`;

const AgreementCaption = styled.span`
    padding-left: 1.5rem;
    font-family: Lato, sans-serif;
`;

const AgreementError = styled.p`
    padding: 0 1.5rem;
    margin-bottom: 1rem;
    font-family: Lato, sans-serif;
    font-size: 1.5rem;
    color: red;
`;

const Checkbox = styled.input`
    vertical-align: middle;
`;

const SubmitButtonContainer = styled.div`
    margin-top: 20px;
    text-align: end;
`;

const SubmitButton = styled.button`
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

    ${smallPhone({padding: "10px 20px", borderWidth: "2px"})}
`;


const CheckoutDetails = () => {
    const user = useSelector(state => state.user.currentUser);
    const cart = useSelector(state => state.cart);
    const navigate = useNavigate();
    const [defaultAddress, setDefaultAddress] = useState([]);
    const [agreement, setAgreement] = useState(false); 
    const [agreementError, setAgreementError] = useState(false); 
    const [loading, setLoading] = useState(true);
    const reArrangedCart = mergeSimilarProductAccToID(cart.products);

    const subtotal = reArrangedCart[1].reduce((prev, current) => {
        const returns = prev + current;

        return returns;
    }, 0);

    const convertedSubTotal = numberWithCommas(subtotal);
    // const [detail, setDetail] = useState({state: ""});

    // const handleChange = e => {
    //     setDetail({...detail, [e.target.name]: e.target.value})
    // }

    useEffect(() => {
        if(cart.products.length === 0){
            navigate("/shop");
        }
    }, [cart]);

    useEffect(() => {
        const getDefaultAddress = async () => {
            try{
                setLoading(true);
                const res = await publicRequest.get(`/address/default/${user._id}`);
                setDefaultAddress(res.data);
                setLoading(false);
            }catch(error){
                toast.error("Unable to get default address");
            }
        };

        getDefaultAddress();
    }, []);

    const defaultAddressDetails = defaultAddress[0];

    const config = {
        public_key: 'FLWPUBK_TEST-962d9f9f8166b1bcb65f44b9651877fb-X',
        tx_ref: Date.now(),
        amount: subtotal,
        currency: 'NGN',
        payment_options: 'card,mobilemoney,ussd',
        customer: {
          email: user.email,
          phonenumber: user.phoneno,
          name: `${user.firstname} ${user.lastname}`,
        },
        customizations: {
          title: 'E-NATURALS',
          description: 'Payment for items in cart',
          logo: 'https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg',
        },
    };

    const handleFlutterPayment = useFlutterwave(config);

    const handlePayment = () => {
        if(agreement === false){
            setAgreementError(true);
            return;
        }else if(defaultAddress.length === 0){
            toast.error("No default address detected. Please create an address.");
        }else{
            setAgreementError(false);
            const orderList = matchProductsToSchema(reArrangedCart[0]);

            handleFlutterPayment({
                callback: (response) => {
                    console.log(response);
                    if(response.status === "successful"){
                        closePaymentModal() // CLOSE MODAL PROGRAMATICALLY
                        addOrder({userID: user._id, username: user.username, products: orderList, amount: subtotal});
                        navigate("/success");
                    }else{
                        closePaymentModal() // CLOSE MODAL PROGRAMATICALLY
                        navigate("/failure");
                    }
                },
                onClose: () => {
                    
                }
            });
        }
    };

    const handleCheckbox = (e) => {
        setAgreement(e.target.checked);
        setAgreementError(!e.target.checked);
    }

    return(
        <PaymentContainer>
            <PaymentWrapper>
                {/* <PaymentMainForm>
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
                </PaymentMainForm> */}
                <DefaultAddressContainer>
                    <DefaultAddressTitle>
                        default address
                    </DefaultAddressTitle>
                    {
                        (loading)?
                        <ProgressWrapper>
                            <CircularProgress size="8rem" />
                        </ProgressWrapper>
                        :
                        (defaultAddress.length === 0)?
                        <NoDefaultAddressError>
                            No default address yet
                            <AddAddressContainer>
                                <Link to="/customer/address/create" className="checkoutDetailsLink">
                                    Add Address
                                </Link>
                            </AddAddressContainer>
                        </NoDefaultAddressError>
                        :
                        <DefaultAddressContent>
                            <RecipientDetails>
                                <RecipientName>{`${defaultAddressDetails.lastName} ${defaultAddressDetails.firstName}`}</RecipientName>
                                <Address>{defaultAddressDetails.address}</Address>
                                {(defaultAddressDetails.additionalInfo !== "") && <AdditionalInfo>{defaultAddressDetails.additionalInfo}</AdditionalInfo>}
                                <AddressLocation>
                                    <City>{defaultAddressDetails.city}</City>, <State>{defaultAddressDetails.region}</State>
                                </AddressLocation>
                                <AddressNumber>{`${defaultAddressDetails.phoneNo} / ${(defaultAddressDetails.addPhoneNo === "")? "" : defaultAddressDetails.addPhoneNo}`}</AddressNumber>
                            </RecipientDetails>
                            <ChangeDefaultAddressContainer>
                                <Link to="/customer/address" className="checkoutDetailsLink">
                                    change default address
                                </Link>
                            </ChangeDefaultAddressContainer>
                        </DefaultAddressContent>
                    }
                </DefaultAddressContainer>
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
                                {/* CHECKOUT CART ITEMS COMPONENT HERE */}
                                {
                                    reArrangedCart[0].map(reArrangedCartItem => (
                                        <CheckoutCartItems
                                            key={reArrangedCartItem[0]._id}
                                            productName={reArrangedCartItem[0].productName}
                                            quantity={reArrangedCartItem.length}
                                            productPrice={reArrangedCartItem[0].price}
                                        />
                                    ))
                                }
                                <TableRow>
                                    <Subtotal>
                                        Subtotal
                                    </Subtotal>
                                    <SubtotalPrice>
                                        ₦{convertedSubTotal}
                                    </SubtotalPrice>
                                </TableRow>
                                <TableRow>
                                    <Total>
                                        Total
                                    </Total>
                                    <TotalPrice>
                                        ₦{convertedSubTotal}
                                    </TotalPrice>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </YourOrderContainer>
                <PaymentOptionContainer>
                    <PaymentOption>
                        <RadioInput type="radio" disabled checked /> 
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
                    <AgreementCheckboxContainer>
                        <Agreement htmlFor="agreement">
                            <Checkbox type="checkbox" id="agreement" checked={agreement} onChange={handleCheckbox} />
                            <AgreementCaption>
                                By using this form, you agree with the storage and usage of data by this website.
                            </AgreementCaption>
                        </Agreement>
                        {agreementError && <AgreementError>Agree with the terms above</AgreementError>}
                    </AgreementCheckboxContainer>
                    <SubmitButtonContainer>
                        <SubmitButton onClick={handlePayment}>
                            Place Order
                        </SubmitButton>
                    </SubmitButtonContainer>
                </PlaceOrderBox>
            </PaymentWrapper>
        </PaymentContainer>
    );
};


export default CheckoutDetails;