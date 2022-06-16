import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { getAddress } from "../../redux/apiCalls";
import { res750 } from "../../responsive";
import CardHeaderTop from "../CardHeaderTop/CardHeaderTop";
import { Link } from "react-router-dom";

const AccountOverviewContainer = styled.div`
    display: flex;
    justify-content: space-between;

    ${res750({flexDirection: "column"})}
`;

const CardContainer = styled.div`
    flex: 0 0 48%;

    ${res750({flex: "initial", marginBottom: "1.5rem"})}
`;

const UserFullName = styled.p`
    color: #282828;
    font-size: 1.5rem;
    text-transform: capitalize;
    font-family: Lato, sans-serif;
`;

const UserEmail = styled.p`
    color: #75757A;
    font-size: 1.4rem;
    font-family: Lato, sans-serif;
`;

const ChangePasswordContainer = styled.div`
    margin-top: 1.5rem
`;

const EmptyDefaultAddress = styled.div`
    font-size: 1.5rem;
    font-family: Lato, sans-serif;
`;

const Paragraph = styled.p`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

const UserDefaultAddress = styled.div`
    font-size: 1.4rem;
    color: #75757A;
    font-family: Lato, sans-serif;
`;

const AccountOverview = () => {
    const user = useSelector(state => state.user.currentUser);
    const addresses = useSelector(state => state.addresses.addresses);
    const dispatch = useDispatch();

    useEffect(() => {
       getAddress(user._id, dispatch);
    }, [dispatch]);

    const defaultAddress = (addresses.length === 0)? "" : addresses.find(address => address.isDefault === true);

    return(
        <AccountOverviewContainer>
            <CardContainer>
                <CardHeaderTop header="Account Details" to="/customer/account/edit">
                    <UserFullName>{`${user.lastname} ${user.firstname}`}</UserFullName>
                    <UserEmail>{user.email}</UserEmail>
                    <ChangePasswordContainer>
                        <Link to="/customer/account/changepass" className="changePasswordLink">
                            Change Password
                        </Link>
                    </ChangePasswordContainer>
                </CardHeaderTop>
            </CardContainer>
            <CardContainer>
                <CardHeaderTop header="Address book" to="/customer/address">
                    {
                        (addresses.length === 0)?
                        <EmptyDefaultAddress>
                            No address added. <br/> <br/>Click the pen icon to create a new address.
                        </EmptyDefaultAddress>
                        :
                        <>
                            <Paragraph>Your default shipping address:</Paragraph>
                            <UserDefaultAddress>
                                {`${defaultAddress.lastName} ${defaultAddress.firstName}`}<br/>
                                {defaultAddress.address}<br/>
                                {defaultAddress.city}, {defaultAddress.region}<br/>
                                {defaultAddress.phoneNo} / {(defaultAddress.addPhoneNo !== "")? defaultAddress.addPhoneNo : ""}
                            </UserDefaultAddress>
                        </>
                    }
                </CardHeaderTop>
            </CardContainer>
        </AccountOverviewContainer>
    );
};



export default AccountOverview;