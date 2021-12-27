import React, {useState} from 'react';
import logo from './logo.jpg';
import styled from 'styled-components';
import Badge from '@mui/material/Badge';
import PhoneIcon from '@mui/icons-material/Phone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import CloseIcon from '@mui/icons-material/Close';

const ModalBackdrop = styled.div`
    display: ${props => props.openModal? "block" : "none"};
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 100%;
    background-color: rgba(0, 0, 0, .2);
    z-index: 500;
`;

const Modal = styled.div`
    position: absolute;
    top: 0px;
    left: 0px;
    right: 0px;
    height: 100%;
    display: ${props => props.openModal? "flex" : "none"};
    align-items: center;
    justify-content: center;
`;

const ModalContainer = styled.div`
    width: 50%;
    position: fixed;
    height: auto;
    background-color: #f2eeec;
    border: 1px solid #BFABA0;
    overflow: hidden;
    z-index: 1000;
`;

const ModalBody = styled.div`
    height: auto;
`;

const ModalTabs = styled.div`
    display: flex;
    height: 50px;
`;

const AuthTab = styled.div`
    flex: 0 0 45%;
    display: flex;
    cursor: pointer;
    border-right: ${props => props.selected? "none" : "0.5px solid rgba(172, 176, 178)"};
    border-left: ${props => props.selected? "none" : "0.5px solid rgba(172, 176, 178)"};
    border-bottom: ${props => props.selected? "none" : "0.5px solid rgba(172, 176, 178)"};
    border-top: ${props => props.selected? "3px solid black" : "0.5px solid rgba(172, 176, 178)"};
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    text-transform: uppercase;
    color: ${props => props.selected? "black" : "#7E8485"};
`;

const Close = styled.div`
    flex: 0 0 10%;
    display: flex;
    cursor: pointer;
    align-items: center;
    justify-content: center;
    border-bottom: 0.5px solid #7E8485;
    border-left: 0.5px solid #7E8485;
`;

const LoginBody = styled.div`
    display: ${props => props.active? "block" : "none"};
    height: 100%;
`;

const LoginBodyContainer = styled.div`
    padding: 4rem 2rem 2rem;
`; 

const LoginForm = styled.form`
`;

const LoginFormGroup = styled.div`
    padding: 0 2rem;

    &:not(:last-child){
        margin-bottom: 3rem;
    }
`;

const Label = styled.label`
    display: block;
    font-size: 1.5rem;
    color: #7E8485;
`;

const Required = styled.span`
    color: red;
`;

const Input = styled.input`
    padding: 1.5rem 0rem 1rem 1rem;
    width: 100%;
    background-color: transparent;
    border: none;
    border-bottom: 2px solid #7E8485;

    &:focus{
        border-bottom: 2px solid #000;
        outline: none;
    }
`;

const ForgotContainer = styled.div`
    padding-left: 2rem;
    margin: 1.5rem 0;
    font-size: 1.5rem;
    font-weight: 400;
    letter-spacing: 1px;
    text-transform: uppercase;
`;

const ForgotPassword = styled.a`
    display: block;
    cursor: pointer
    align-items: center;
    color: black;
    text-decoration: none;
`;

const CreateNewAccount = styled.a`
    display: block;
    cursor: pointer
    align-items: center;
    color: black;
    margin-top: 10px;
    text-decoration: none;
`;

const RegisterBody = styled.div`
    display: ${props => props.active? "block" : "none"};
    height: 100%;
`;

const RegisterBodyContainer = styled.div`
    padding: 4rem 2rem 2rem;
`;

const RegisterForm = styled.div`

`;

const RegisterFormGroup = styled.div`
    padding: 0 2rem;
    display: flex;
    justify-content: space-between;

    &:not(:last-child){
        margin-bottom: 3rem;
    }
`;

const InputContainer = styled.div`
    flex: 0 0 48%;
`;

const SubmitButton = styled.button`
    padding: 1.5rem 2.5rem;
    margin-left: ${props => props.scope === 'login'? 'none' : '2rem'};
    background-color: transparent;
    border: 2px solid #B8A398;
    text-transform: uppercase;
    color: #B8A398;
    font-weight: 700;
    cursor: pointer;
    transition: all .3s ease-in;

   &:hover{
       background-color: #B8A398;
       color: #fff;
    }
`;

const Wrapper = styled.div`
    position: sticky;
    top: 0px;
    left: 0px;
    z-index: 100;
`;

const RowContainer = styled.div`
    background-color: #fff; 
`;

const Row = styled.div`
    width: 75%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;
`;

const CartAndLogin = styled.div`
    flex: 0 0 15%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

const Text = styled.div`
    color: ${props => props.active? '#9AAF8F' : '#7E8485'};
    cursor: pointer;
    text-transform: uppercase;
    display: flex;
    align-items: center;

    &:hover{
        color: #9AAF8F;
    }
`;

const ContactContainer = styled.div`
    display: flex;
    align-items: center;
`;

const IconContainer = styled.div`
    margin-right: 5px;
`;

const PhoneNo = styled.div`
    font-size: 1.5rem;
    font-weight: 600;
`;

const LogoContainer = styled.div`
    flex: 0 0 20%;
    height: 100%;
    overflow: hidden;
`;

const LogoImg = styled.img`
    height: 100%;
    width: 100%;
`;

const NavigationContainer = styled.div`
    display: flex;
    height: 70px;
    justify-content: center;
    align-items: center;
    background-color: #9AAF8F;
    color: rgba(255, 255, 255, .8);
`;
const NavMenu = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const NavItem = styled.div`
    padding: 0 1rem;
    font-size: 1.5rem;
    cursor: pointer;

    &:hover{
        color: #fff;
    }
`;

const NavLink = styled.p `
    text-transform: uppercase;
`;



const Navbar = () =>{
    const [tabNo, setTabNo] = useState(1);
    const [modal, setModal] = useState(false);
    let isProfileClicked = false;

    const changeTab = (selectedTabNo) =>{
        setTabNo(selectedTabNo);
    };

    const switchModal = () => {
        setModal(!modal);
        isProfileClicked = !isProfileClicked;
    };

    return (
        <>
            <ModalBackdrop openModal={modal} onClick={switchModal}></ModalBackdrop>
            <Modal openModal={modal}>
                <ModalContainer>
                    <ModalTabs>
                        <AuthTab onClick={() => changeTab(1)} selected={tabNo === 1? true : false}>
                            Login
                        </AuthTab>
                        <AuthTab onClick={() => changeTab(2)} selected={tabNo === 2? true : false}>
                            Register
                        </AuthTab>
                        <Close onClick={switchModal}>
                            <CloseIcon style={{fontSize: 20}}/>
                        </Close>
                    </ModalTabs>
                    <ModalBody>
                        <LoginBody active={tabNo === 1? true : false}>
                            <LoginBodyContainer>
                                <LoginForm>
                                    <LoginFormGroup>
                                        <Label for="username">Username <Required>*</Required></Label>
                                        <Input type="text" placeholder="Userame" id="username"/>
                                    </LoginFormGroup>
                                    <LoginFormGroup>
                                        <Label for="pwd">Password <Required>*</Required></Label>
                                        <Input type="password" placeholder="Password" id="pwd"/>
                                    </LoginFormGroup>
                                    <ForgotContainer>
                                        <ForgotPassword href="#">Forgot Password?</ForgotPassword>
                                        <CreateNewAccount href="#">Create A New Account</CreateNewAccount>
                                    </ForgotContainer>
                                    <LoginFormGroup>
                                        <SubmitButton scope="login">
                                            Login
                                        </SubmitButton>
                                    </LoginFormGroup>
                                </LoginForm>
                            </LoginBodyContainer>
                        </LoginBody>
                        <RegisterBody active={tabNo === 2? true : false}>
                            <RegisterBodyContainer>
                                <RegisterForm>
                                    <RegisterFormGroup>
                                        <InputContainer>
                                            <Label for="name">Name <Required>*</Required></Label>
                                            <Input type="text" placeholder="e.g vivian" id="name"/>
                                        </InputContainer>
                                        <InputContainer>
                                            <Label for="lastname">Last Name <Required>*</Required></Label>
                                            <Input type="text" placeholder="e.g smith" id="lastname"/>
                                        </InputContainer>
                                    </RegisterFormGroup>
                                    <RegisterFormGroup>
                                        <InputContainer>
                                            <Label for="username">Username <Required>*</Required></Label>
                                            <Input type="text" placeholder="e.g trixx" id="username"/>
                                        </InputContainer>
                                        <InputContainer>
                                            <Label for="email">Email <Required>*</Required></Label>
                                            <Input type="email" placeholder="e.g host@server.com" id="email"/>
                                        </InputContainer>
                                    </RegisterFormGroup>
                                    <RegisterFormGroup>
                                        <InputContainer>
                                            <Label for="pwd">Password <Required>*</Required></Label>
                                            <Input type="password" id="pwd"/>
                                        </InputContainer>
                                        <InputContainer>
                                            <Label for="cpwd">Confirm Password<Required>*</Required></Label>
                                            <Input type="password" id="cpwd"/>
                                        </InputContainer>
                                    </RegisterFormGroup>
                                    <SubmitButton scope="register">
                                        Register
                                    </SubmitButton>
                                </RegisterForm>
                            </RegisterBodyContainer>
                        </RegisterBody>
                    </ModalBody>
                </ModalContainer>
            </Modal>
            <Wrapper>
                <RowContainer>
                    <Row>
                        <ContactContainer>
                            <IconContainer>
                                <PhoneIcon style={{fontSize: 15}}/> 
                            </IconContainer>
                            <PhoneNo>+234 90 236 879 32 </PhoneNo> 
                        </ContactContainer>
                        <LogoContainer>
                            <LogoImg src={logo} alt="Logo" className="logo-image"/>
                        </LogoContainer>
                        <CartAndLogin>
                            <Text>
                                <Badge badgeContent={4} color="success">
                                    <ShoppingCartOutlinedIcon style={{fontSize: 25, color: "#7E8485"}}/> 
                                </Badge>
                            </Text>
                            <Text onClick={switchModal} active={isProfileClicked? true : false}>
                                <AccountBoxOutlinedIcon style={{fontSize: 25, marginLeft: 20}}/>
                            </Text>
                        </CartAndLogin>
                    </Row>
                </RowContainer>
                <NavigationContainer>
                    <NavMenu>
                        <NavItem>
                            <NavLink>Home</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>About us</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Shop</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Blog</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Gallery</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink>Reviews</NavLink>
                        </NavItem>
                    </NavMenu>
                </NavigationContainer>
            </Wrapper>
        </>
    );
};

export default Navbar;