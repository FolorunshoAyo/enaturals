import React from "react";
import { useSelector } from "react-redux";
import styled from "styled-components";
import AddressCard from "../AddressCard/AddressCard";


const AddressBookContainer = styled.div`
`;

const EmptyAddressContainer = styled.div`
    text-align: center;
    font-family: Lato, sans-serif;
    font-size: 1.5rem;
    padding: 2rem 0;
`;

const Addresses = styled.div`
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    max-height: 380px;
    overflow-y: auto;
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

const AdditionalInfo = styled(Address)``;

const AddressNumber = styled(Address)``;

const AddressLocation = styled.p`
    color: #75757A;
    font-size: 1.2rem;
    font-family: Lato, sans-serif;
`;

const City = styled.span`
    font-family: inherit;
`;

const State = styled.span`
    font-family: inherit;
`;


// const Default = styled.div`
//     margin-top: 1.5rem;
//     font-family: Lato, sans-serif;
//     color: #478118;
// `;

const AddressBook = () => {
    const addresses = useSelector(state => state.addresses.addresses);
    
    // FIND DEFAULT ADDRESS
    const defaultAddress = addresses.find(address => address.isDefault === true);
    let remainingAddress = [];
    if(addresses.length > 1){
        // GET REMAINING ADDRESSES
        remainingAddress = addresses.filter(address => address.isDefault !== true);
    }

    return (
        <AddressBookContainer>
            {
                (addresses.length === 0)?
                <EmptyAddressContainer>
                    No address yet, click the <b>add new address</b> button to create a new address. 
                </EmptyAddressContainer>
                :
                <Addresses>
                    <AddressCard isDefault={defaultAddress.isDefault} addressID={defaultAddress._id} to={`/customer/address/edit/${defaultAddress._id}`}>
                        <RecipientName>{`${defaultAddress.lastName} ${defaultAddress.firstName}`}</RecipientName>
                        <Address>{defaultAddress.address}</Address>
                        {(defaultAddress.additionalInfo !== "") && <AdditionalInfo>{defaultAddress.additionalInfo}</AdditionalInfo>}
                        <AddressLocation>
                            <City>{defaultAddress.city}</City>, <State>{defaultAddress.region}</State>
                        </AddressLocation>
                        <AddressNumber>{`${defaultAddress.phoneNo} / ${(defaultAddress.addPhoneNo === "")? "" : defaultAddress.addPhoneNo}`}</AddressNumber>
                    </AddressCard>
                    {
                        remainingAddress.map(remainingAddress => (
                            <AddressCard key={remainingAddress._id} isDefault={remainingAddress.isDefault} addressID={remainingAddress._id} to={`/customer/address/edit/${remainingAddress._id}`}>
                                <RecipientName>{`${remainingAddress.lastName} ${remainingAddress.firstName}`}</RecipientName>
                                <Address>{remainingAddress.address}</Address>
                                {(remainingAddress.additionalInfo !== "") && <AdditionalInfo>{remainingAddress.additionalInfo}</AdditionalInfo>}
                                <AddressLocation>
                                    <City>{remainingAddress.city}</City>, <State>{remainingAddress.region}</State>
                                </AddressLocation>
                                <AddressNumber>{`${remainingAddress.phoneNo} / ${(remainingAddress.addPhoneNo === "")? "" : remainingAddress.addPhoneNo}`}</AddressNumber>
                            </AddressCard>
                        ))
                    }
                </Addresses>
            }
        </AddressBookContainer>
    );
};



export default AddressBook;