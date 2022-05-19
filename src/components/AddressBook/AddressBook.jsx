import React from "react";
import styled from "styled-components";
import AddressCard from "../AddressCard/AddressCard";


const AddressBookContainer = styled.div`
`;

const Addresses = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
`; 

const RecipientName = styled.p`
    color: #282828;
    font-size: 1.5rem;
    padding-bottom: 1rem;
    font-family: Lato, sans-serif;
`;

const Address = styled.p`
    color: #75757A;
    font-size: 1.2rem;
    font-family: Lato, sans-serif;
`;

const AddressLocation = styled.p`
    color: #75757A;
    font-size: 1.2rem;
    font-family: Lato, sans-serif;
`;

const City = styled.span`
`;

const State = styled.span``;


const Default = styled.div`
    margin-top: 1.5rem;
    font-family: Lato, sans-serif;
    color: #478118;
`;

const AddressBook = () => {
    return (
        <AddressBookContainer>
            <Addresses>
                <AddressCard isDefault={true} to="/customer/address/edit/123456">
                    <RecipientName>Shodiya Folorunsho</RecipientName>
                    <Address>Babcock University</Address>
                    <AddressLocation>
                        <City>Ilishan Rem-babcock</City>, <State>Ogun</State>
                    </AddressLocation>
                    <Default>Default Address</Default>
                </AddressCard>
                <AddressCard isDefault={false} to="/customer/address/edit/123456">
                    <RecipientName>Shodiya Folorunsho</RecipientName>
                    <Address>Babcock University</Address>
                    <AddressLocation>
                        <City>Ilishan Rem-babcock</City>, 
                        <State>Ogun</State>
                    </AddressLocation>
                </AddressCard>
            </Addresses>
        </AddressBookContainer>
    );
};



export default AddressBook;