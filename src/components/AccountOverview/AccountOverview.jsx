import React from "react";
import styled from "styled-components";
import { res750 } from "../../responsive";
import CardHeaderTop from "../CardHeaderTop/CardHeaderTop";


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
`;

const UserEmail = styled.p`
    color: #75757A;
    font-size: 1.4rem;
`;

const ChangePasswordContainer = styled.div`
    text-transform: uppercase;
    letter-spacing: 0.5px;
    color: #ACBFA3;
    margin-top: 1.5rem
`;

const Paragraph = styled.p`
    font-size: 1.5rem;
    margin-bottom: 1rem;
`;

const UserDefaultAddress = styled.div`
    font-size: 1.4rem;
    color: #75757A;
`;

const AccountOverview = () => {
    return(
        <AccountOverviewContainer>
            <CardContainer>
                <CardHeaderTop header="Account Details" to="/customer/account/edit">
                    <UserFullName>Shodiya Folorunsho</UserFullName>
                    <UserEmail>folushoayomide11@gmail.com</UserEmail>
                    <ChangePasswordContainer>
                        Change Password
                    </ChangePasswordContainer>
                </CardHeaderTop>
            </CardContainer>
            <CardContainer>
                <CardHeaderTop header="Address book" to="/customer/address">
                        <Paragraph>Your default shipping address:</Paragraph>
                        <UserDefaultAddress>
                            Shodiya Folorunsho<br/>
                            Babcock university ilishan remo Ogun state<br/>
                            Ilishan Remo-babcock, Ogun<br/>
                            +234 7087857141
                        </UserDefaultAddress>
                </CardHeaderTop>
            </CardContainer>
        </AccountOverviewContainer>
    );
};



export default AccountOverview;