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
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/apiCalls";

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
    transition: all .3s ease-in;
    cursor: pointer;

    &:hover{
        color: #fff;
        background-color: #acbfa3;
    }
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
    const addressLength = useSelector(state => state.addresses.addresses.length);
    const dispatch = useDispatch();

    const getActiveLink = (pathname, params="") => {
        let path = "";
        switch(pathname){
            case "/customer/account":
                path = "my-account";
            break; 
            case "/customer/order":
                path = "my-orders";
            break;
            case "/customer/account/edit":
                path = "details";
            break;
            case "/customer/address":
                path = "address-book";
            break;
            case "/customer/account/changepass":
                path = "change-password";
            break;
            case `/customer/address/edit/${params}`:
                path = "address-book";
            break;
            case `/customer/address/create`:
                path =  "address-book";
            break;
            default:
                console.log("all possible conditions have not been met");
        }
        return path;
    }

    const getAccountHeaders = (pathname) => {
        let rendered = "";
        switch(pathname){
            case "/customer/account":
                rendered =  <>
                                <AccountOverviewHeader>
                                    Account Overview
                                </AccountOverviewHeader>
                            </>
            break; 
            case "/customer/order":
                rendered =  <>
                                <AccountOverviewHeader>
                                    Orders
                                </AccountOverviewHeader>
                            </>
            break;
            case "/customer/account/edit":
                rendered =  <>
                                <AccountOverviewHeader>
                                    Details
                                </AccountOverviewHeader>
                            </>
            break;
            case "/customer/address":
                rendered =  <>
                                <AddressContainer>
                                    <Address>Address ({addressLength})</Address>
                                    <AddNewAddressBtnContainer>
                                        <Link to="/customer/address/create" style={{color: "initial", display: "block"}}>
                                            <AddNewAddressBtn>
                                                Add New Address
                                            </AddNewAddressBtn>
                                        </Link>
                                    </AddNewAddressBtnContainer>
                                </AddressContainer>
                            </>
            break;
            case "/customer/account/changepass":
                rendered =  <>
                                <AccountOverviewHeader>
                                    Change Password
                                </AccountOverviewHeader>
                            </>
            break;
            case `/customer/address/edit/${params}`:
                rendered = <>
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
            break;
            case `/customer/address/create`:
                rendered = <>
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
            break;
            default:
                console.log("all possible conditions have not been met");
        }

        return rendered;
    } 

    const generateActiveComponent = pathname => {
        let rendered = "";
        switch(pathname){
            case "/customer/account":
                rendered =  <>
                                <AccountOverview />
                            </>
            break; 
            case "/customer/order":
                rendered =  <>
                                <CustomerOrders />
                            </>
            break;
            case "/customer/account/edit":
                rendered =  <>
                                <CustomerDetailsEdit />
                            </>
            break;
            case "/customer/address":
                rendered =  <>
                                <AddressBook />
                            </>
            break;
            case `/customer/address/edit/${params}`:
                rendered =  <>
                                <CustomerAddressEdit />
                            </>
            break;
            case `/customer/address/create`:
                rendered =  <>
                                <CustomerAddressEdit createNew />
                            </>
            break;
            case "/customer/account/changepass":
                rendered =  <>
                                <ChangePassword />
                            </>
            break;
            default:
                console.log("all possible conditions have not been met");
        }

        return rendered;
    };

    const logUserOut = () => {
        logout(dispatch);
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
                    <LogoutContainer onClick={logUserOut}>
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