import React from "react";
import styled from "styled-components";
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import Inventory2OutlinedIcon from '@mui/icons-material/Inventory2Outlined';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AccountOverview from "../AccountOverview/AccountOverview";
import { Link } from "react-router-dom";
import CustomerOrders from "../CustomerOrders/CustomerOrders";
import CustomerDetailsEdit from "../CustomerDetailsEdit/CustomerDetailsEdit";
import AddressBook from "../AddressBook/AddressBook";
import ChangePassword from "../ChangePassword/ChangePassword";
import { bigDesktop, medPhone, res860 } from "../../responsive";
import CustomerAddressEdit from "../CustomerAddressEdit/CustomerAddressEdit";

const CustomerContainer = styled.section`
    padding: 4rem 4rem;
`;

const CustomerInfoContainer = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;

    ${res860({width: "100%", margin: "0"})}
    ${medPhone({flexDirection: "column"})}
    ${bigDesktop({width: "1500px"})}
`;

const AccountMenuContainer = styled.div`
    flex: 0 0 30%;
    border-radius: 5px;
    overflow: hidden;
    background-color: #fff;
    align-self: flex-start;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;

    ${medPhone({flex: "initial", marginBottom: "3rem", alignSelf: "stretch"})}
`;

const AccountMenu = styled.div`
    border-bottom: 1px solid rgb(237, 237, 237);
`;

const AccountMenuList = styled.ul`
    list-style-type: none;
`;

const AccountListItem = styled.li`
    display: flex;
    align-items: center;
    padding: 10px 12px;
    font-size: 1.5rem;
    font-family: Lato, sans-serif;
    padding: 2rem;
    background-color: ${props => props.active? "#ededed" : "transparent"};
`;

const AccountMenuIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
`;

const DetailsContainer = styled.div`

`;

const DetailsMenuList = styled.ol`
    list-style-type: none;
`;

const DetailsMenuListItem = styled.li`
    list-style-type: none;
    font-family: Lato, sans-serif;
    font-size: 1.5rem;
    padding: 2rem;
    background-color: ${props => props.active? "#ededed" : "transparent"};
`;

const LogoutContainer = styled.div`
    text-align: center;
    color: #ACBFA3;
    text-transform: uppercase;
    font-size: 1.5rem;
    font-family: Lato, sans-serif;
    padding: 2rem 0;
`;


const AccountDetailsContainer = styled.div`
    flex: 0 0 65%;
    border-radius: 5px;
    overflow: hidden;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;

const AccountDetails = styled.div`
    height: 100%;
`;

const AccountHeader = styled.div`
    border-bottom: 2px solid rgb(237, 237, 237);
`;

const AccountDetail = styled.div`
    padding: 2rem;
    max-height: 100%;
`;

const AccountOverviewHeader = styled.h1`
    padding: 1rem 2rem;
    font-family: Lato, sans-serif;
    font-size: 1.5rem;
`;
const AddressContainer = styled.div`
    padding: 1rem 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Address = styled.h2`
    font-family: Lato, sans-serif;
`;

const AddNewAddressBtnContainer = styled.div`
    flex: 0 0 50%;
    display: flex;
    justify-content: flex-end;
`;

const EditAddressContainer = styled.div`
    padding: 1rem 2rem;
    display: flex;
`;

const EditAddresstitle = styled.h1`
    font-family: Lato, sans-serif;
`;

const BackArrowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 15px;
`;

const AddNewAddressBtn = styled.button`
    background-color: #ACBFA3;
    color: #fff;
    border-radius: 5px;
    border: none;
    font-size: 1rem;
    padding: 1rem 1.5rem;
    cursor: pointer;
    text-transform: uppercase;
    box-shadow: 0 4px 8px 0 rgb(0 0 0 / 20%);
    transition: all .3s ease-in;

    &:hover{
        background-color: #b8afa3;
    }
`;

const CustomerInfo = ({pathname, params}) => {

    // if(params === ""){
    //     // Redirect back to home page showing a worning.
    // }

    const getActiveLink = (pathname, params="") => {
        switch(pathname){
            case "/customer/account":
                return "my-account";
            break; 
            case "/customer/order":
                return "my-orders";
            break;
            case "/customer/account/edit":
                return "details";
            break;
            case "/customer/address":
                return "address-book";
            break;
            case "/customer/account/changepass":
                return "change-password";
            break;
            case `/customer/address/edit/${params}`:
                return "address-book";
            break;
            case `/customer/address/create`:
                return "address-book";
            break;
            default:
                console.log("all possible conditions have not been met");
        }
    }

    const getAccountHeaders = (pathname) => {
        switch(pathname){
            case "/customer/account":
                return (
                    <>
                        <AccountOverviewHeader>
                            Account Overview
                        </AccountOverviewHeader>
                    </>
                );
            break; 
            case "/customer/order":
                return (
                    <>
                        <AccountOverviewHeader>
                           Orders
                        </AccountOverviewHeader>
                    </>
                );
            break;
            case "/customer/account/edit":
                return (
                    <>
                        <AccountOverviewHeader>
                           Details
                        </AccountOverviewHeader>
                    </>
                );
            break;
            case "/customer/address":
                return (
                    <>
                        <AddressContainer>
                            <Address>Address (2)</Address>
                            <AddNewAddressBtnContainer>
                                <Link to="/customer/address/create" style={{color: "initial", display: "block"}}>
                                    <AddNewAddressBtn>
                                            Add New Address
                                    </AddNewAddressBtn>
                                </Link>
                            </AddNewAddressBtnContainer>
                        </AddressContainer>
                    </>
                );;
            break;
            case "/customer/account/changepass":
                return (
                    <>
                        <AccountOverviewHeader>
                            Change Password
                        </AccountOverviewHeader>
                    </>
                );
            break;
            case `/customer/address/edit/${params}`:
                return (
                    <>
                        <EditAddressContainer>
                            <BackArrowContainer>
                                <Link to="/customer/address" style={{color: "initial"}}>
                                    <ArrowBackIcon style={{fontSize: "2.5rem"}}/>
                                </Link>
                            </BackArrowContainer>
                            <EditAddresstitle>
                                Edit Address
                            </EditAddresstitle>
                        </EditAddressContainer>
                    </>
                );
            break;
            case `/customer/address/create`:
                return (
                    <>
                        <EditAddressContainer>
                            <BackArrowContainer>
                                <Link to="/customer/address" style={{color: "initial"}}>
                                    <ArrowBackIcon style={{fontSize: "2.5rem"}}/>
                                </Link>
                            </BackArrowContainer>
                            <EditAddresstitle>
                               Add a New Address
                            </EditAddresstitle>
                        </EditAddressContainer>
                    </>
                );
            break;
            default:
                console.log("all possible conditions have not been met");
        }
    } 

    const generateActiveComponent = pathname => {
        switch(pathname){
            case "/customer/account":
                return (
                    <>
                        <AccountOverview />
                    </>
                );
            break; 
            case "/customer/order":
                return (
                    <>
                        <CustomerOrders />
                    </>
                );
            break;
            case "/customer/account/edit":
                return (
                    <>
                        <CustomerDetailsEdit />
                    </>
                );
            break;
            case "/customer/address":
                return (
                    <>
                        <AddressBook />
                    </>
                );;
            break;
            case `/customer/address/edit/${params}`:
                return (
                    <>
                        <CustomerAddressEdit />
                    </>
                );
            break;
            case `/customer/address/create`:
                return (
                    <>
                        <CustomerAddressEdit createNew/>
                    </>
                );
            break;
            case "/customer/account/changepass":
                return (
                    <>
                        <ChangePassword />
                    </>
                );
            break;
            default:
                console.log("all possible conditions have not been met");
        }
    };

    const currActiveLink = getActiveLink(pathname, params);

    return (
        <CustomerContainer>
            <CustomerInfoContainer>
                <AccountMenuContainer>
                    <AccountMenu>
                        <AccountMenuList>
                            <Link to="/customer/account" className="customerAccountLink">
                                <AccountListItem active={currActiveLink === "my-account"}>
                                    <AccountMenuIcon>
                                        <PermIdentityIcon style={{fontSize: "1.5em"}}/>
                                    </AccountMenuIcon>
                                    My Account
                                </AccountListItem>
                            </Link>
                        </AccountMenuList>
                        <AccountMenuList>
                            <Link to="/customer/order" className="customerAccountLink">
                                <AccountListItem active={currActiveLink === "my-orders"}>
                                    <AccountMenuIcon>
                                        <Inventory2OutlinedIcon style={{fontSize: "1.5rem"}}/>
                                    </AccountMenuIcon>
                                    My Orders
                                </AccountListItem>
                            </Link>
                        </AccountMenuList>
                    </AccountMenu>
                    <DetailsContainer>
                        <DetailsMenuList>
                            <Link to="/customer/account/edit" className="customerAccountLink">
                                <DetailsMenuListItem active={currActiveLink === "details"}>
                                    Details
                                </DetailsMenuListItem>
                            </Link>
                            <Link to="/customer/address" className="customerAccountLink">
                                <DetailsMenuListItem active={currActiveLink === "address-book"}>
                                    Address Book
                                </DetailsMenuListItem>
                            </Link>
                            <Link to="/customer/account/changepass" className="customerAccountLink">
                                <DetailsMenuListItem active={currActiveLink === "change-password"}>
                                    Change Password
                                </DetailsMenuListItem>
                            </Link>
                        </DetailsMenuList>
                    </DetailsContainer>
                    <LogoutContainer>
                        Logout
                    </LogoutContainer>
                </AccountMenuContainer>
                <AccountDetailsContainer>
                    <AccountDetails>
                        <AccountHeader>
                            {getAccountHeaders(pathname)}
                        </AccountHeader>
                        <AccountDetail>
                            {/* This would contain all the fetched info for each item selected from account menu*/}
                            {/* <AccountOverview /> */}
                            {/* <CustomerOrders /> */}
                            {/* <CustomerDetailsEdit /> */}
                            {/* <AddressBook /> */}
                            {/* <ChangePassword /> */}
                            {generateActiveComponent(pathname)}
                        </AccountDetail>
                    </AccountDetails>
                </AccountDetailsContainer>
            </CustomerInfoContainer>
        </CustomerContainer>
    );
};



export default CustomerInfo;