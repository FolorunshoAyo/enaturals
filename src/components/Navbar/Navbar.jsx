import React, {useState, useCallback, useEffect} from 'react';
import logo from './logo.jpg';
import strippedLogo from './stripped-logo.png';
import styled from 'styled-components';
import PhoneIcon from '@mui/icons-material/Phone';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountBoxOutlinedIcon from '@mui/icons-material/AccountBoxOutlined';
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
// import SearchIcon from '@mui/icons-material/Search';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import {smallPhone, res480, medPhone, tabPort, res1023, tabLand, medDesktop, bigDesktop, res860} from '../../responsive';
import Cart from '../Cart/Cart';
import {NavLink, Link, useLocation} from 'react-router-dom';
import "react-datepicker/dist/react-datepicker.css";
import 'react-phone-number-input/style.css';
import './Navbar.css';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import LoginForm from '../LoginForm/LoginForm';
import { useDispatch, useSelector } from "react-redux";
import { HowToRegOutlined, Logout, Person } from '@mui/icons-material';
// import { display } from '@mui/system';
import { Badge, Button, Menu, MenuItem } from '@mui/material';
import { logout } from '../../redux/apiCalls';
import { closeModal, switchTab, toggleModal } from "../../redux/login-register-modalRedux";

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

    ${res1023({width: "60%"})}
    ${tabPort({width: "70%"})}
    ${medPhone({width: "80%"})}
    ${smallPhone({width: "90%"})}
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

const RegisterBody = styled.div`
    display: ${props => props.active? "block" : "none"};
    height: 100%;
`;

const LoginBodyContainer = styled.div`
    padding: 4rem 2rem 2rem;
`;

const RegisterBodyContainer = styled.div`
    padding: 4rem 2rem 2rem;
`;

const Wrapper = styled.div`
    position: fixed;
    width: 100%;
    top: 30px;
    left: 0px;
    z-index: 300;
    transition: all .8s ease-out;

    transform: ${props => props.minimize? "translateY(-300%)" : "translateY(0px)"};
`;

const RowContainer = styled.div`
    background-color: #fff; 
`;

const Row = styled.div`
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px;

    ${bigDesktop({width: "1100px"})}
    ${medDesktop({width: "1100px"})}
    ${tabLand({width: "85%"})}
    ${smallPhone({width: "95%"})}
`;

// make sure the flex basis of the below element is increased to accomodate menu listing default: 0 0 15%, flex-end;
const CartAndLogin = styled.div`
    flex: ${props => props.isLoggedIn? "0 0 17%" : "0 0 15%"};
    display: flex;
    align-items: center;
    justify-content: ${props => props.isLoggedIn? "flex-start" : "flex-end"};

    ${res1023({flex: "0 0 20%"})}
    ${res860({flex: "0 0 150px"})}
    ${smallPhone({flex: "0 0 115px"})}
`;

const Wrap = styled.div`
    color: #7E8485;
    text-transform: uppercase;
    display: flex;
    align-items: center;
    font-size: 2rem;
    position: relative;

    &:hover{
        color: #9AAF8F;
    }
`;

const MenuItemContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: Lato, sans-serif;
    font-size: 1.5rem;    
`;

const VerifiedPersonContainer= styled.div`
    flex: 1;
`;

const VerifiedPersonIcon = styled.div`
    flex: 0 0 20px;
`;

const VerifiedPersonMsg = styled.div`  
    flex: 1;
    font-size: 1.1rem;
`;

const IconContainer = styled.div`
    margin-right: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const ContactContainer = styled.div`
    color: #7E8485;
    display: flex;
    align-items: center;
    cursor: pointer;

    &:hover ${IconContainer}{
        color: #ACBFA3; 
    }
`;

const PhoneNo = styled.a`
    font-size: 1.5rem;
    font-weight: 700;
    text-decoration: none;
    color: inherit;
`;

const LogoContainer = styled.div`
    flex: 0 0 20%;
    height: 100%;
    overflow: hidden;

    ${tabPort({display: "none"})}
`;

const LogoImg = styled.img`
    height: 100%;
    width: 100%;
`;

const NavigationContainer = styled.div`
    display: flex;
    height: 80px;
    justify-content: center;
    align-items: center;
    background-color: #9AAF8F;
    color: rgba(255, 255, 255, .8);

    ${tabPort({padding: "1rem 4rem", justifyContent: "space-between"})}
`;

const NavLogoContainer = styled.div`
    flex: 0 0 20%;
    height: 100%;
    overflow: hidden;
    display: none;

    ${tabPort({display: "block"})}
    ${medPhone({flex: "0 0 30%"})}
    ${smallPhone({flex: "0 0 110px"})}
`;

const NavMenu = styled.div`
    width: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    ${bigDesktop({width: "1000px"})}
    ${medDesktop({width: "60%"})}
    ${tabPort({display: "none"})}
`;

const NavItem = styled.div`
    padding: 0 1rem;
    font-size: 1.5rem;
    text-transform: uppercase;
`;

const MenuBarContainer = styled.div`
    flex: 0 0 10%;
    display: none;

    ${tabPort({display: "flex", alignItems: "center", justifyContent: "center"})}
`; 


const MenuIconContainer = styled.div`
    cursor: pointer;
    color: #fff;
    transition: all .2s ease-in;

    &:hover{
        color: #BFABA0;
    }

    ${tabPort({display: "flex", alignItems: "center"})}
`;


const MobileMenuOverlay = styled.div`
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    z-index: 1000;
    transition: all .5s linear;

    transform: ${props => props.status === "closed"? "translateY(-200%)" : "translateY(0)"};
`;

const MobileMenuWrapper = styled.div`
    width: 100%;
    height: 100%;
    padding-top: 2rem; 
    background-color: #383b44;
    color: #cdced1;
`;

const MobileMenuCloseContainer = styled.div`
    display: flex;
    justify-content: flex-end;
    padding-right: 2rem;
`;

const MobileMenuClose = styled.div`
    cursor: pointer;

    &:hover{
        color: #ACBFA3;
    }
`;


const MobileMenuLogoContainer = styled.div`
    text-align: center;
    height: 60px;
`;

const MobileMenuLogo = styled.img`
    height: 100%;
`;

const MobileMenuNav = styled.nav`
    margin-top: 4rem;

    display: flex;
    justify-content: center;
`;

const MobileMenuLinks = styled.ul`
    flex: 0 0 40%;
    list-style-type: none;
    font-size: 2.5rem;
    text-transform: uppercase;
`;

const MobileMenuItem = styled.li`
    padding: 1rem 0;
    cursor: pointer;
    text-align: center;

    &:hover{
        color: #ACBFA3;
    }

    ${smallPhone({padding: "1.5rem 0"})}
`;

const MobileMenuLink = styled.span`

`;

// const SearchInputContainer = styled.div`
//     display: flex;
//     justify-content: center;
// `; 

// const SearchButton = styled.button`
//     flex: 1;
//     background: transparent;
//     display: flex;
//     border: none;
//     justify-content: center;
//     align-items: center;
//     color: #fff;
// `;

// const SearchInputWrapper = styled.div`
//     flex: 0 0 40%;
//     display: flex;
//     border-bottom: 3px solid #fff;
//     margin-top: 3rem;

//     ${smallPhone({flex: "0 0 60%"})}
// `;

// const Search = styled.input`
//     flex: 0 0 85%;
//     font: inherit;
//     font-size: 2rem;
//     background: transparent;
//     padding: 2rem 0;
//     border: none;
//     color: #ACBFA3;

//     &:focus{
//         outline: none;
//     }

//     &:focus ${SearchInputWrapper}{
//         border-color: #acbfa3;
//     }

//     &:focus ${SearchButton}{
//         color: #acbfa3;
//     }
// `;


// const SearchInputForm = styled.form`
//     flex: 1;
//     display: flex;
// `;


const MobileMenuSocials = styled.div`
    width: 200px;
    padding-top: 2rem;
    text-align: center;
    margin: 6rem auto 1rem;
    border-top: 3px solid #fff;
`;

const MobileMenuSocialContainer = styled.div`
    display: inline-block;
    cursor: pointer;
    
    &:not(:last-child){
        margin-right: 10px;
    }
`;

const CartItemsDropDown = styled.div`
    background-color: #f5f5f5;
    position: absolute;
    top: 50px;
    width: 300px;
    left: -200px;
    display: ${props => props.status? "block" : "none"};
    transition: all .5s ease-in;

    ${res480({width: "250px", top: "48px", left: "-190px"})}
`;

const DropDownClose = styled.div`
    width: 10%;
    padding-right: 5px;
    padding-top: 10px; 
    margin-left: auto;
    text-align: center;

    &:hover{
        color: red;
    }
`;

const Navbar = () =>{
    const { pathname, key } = useLocation();
    const { active, tabNo } = useSelector(state => state.loginRegisterModal);
    const [menuState, setMenuState] = useState("closed");
    const [dropDownState, setDropDown] = useState(false);
    const [y, setY] = useState(document.scrollingElement.scrollHeight);
    const [minimizeHeader, setMinimizeHeader] = useState(false);
    const quantity = useSelector(state => state.cart.quantity);
    const user = useSelector(state => state.user.currentUser);
    const [anchorEl, setAnchorEl] = useState(null);
    const dispatch = useDispatch();

    const handleClose = (action) => {
        if(action === "logout"){
            logout(dispatch)
        }
        setAnchorEl(null);
    };
    
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };


    useEffect(() => {
        setMinimizeHeader(false);
    }, [pathname, key]);

    useEffect(() => {
        if(user !== null){
            dispatch(closeModal());
        }
    },[user]);

    const changeTab = (selectedTabNo) =>{
        dispatch(switchTab({tabNo: selectedTabNo}));
    };

    const switchModal = () => {
        dispatch(toggleModal({active: !active}));
    };

    const toggleMobileMenu = (currState) => {
        setMenuState(currState);
    }

    const toggleDropDown = (currState) => {
        setDropDown(!currState);
    };

    
      const handleNavigation = useCallback(() => {
          if(window.scrollY > 150){
            if (y > window.scrollY) {
                //upscroll code
                setMinimizeHeader(false);
            } else if (y < window.scrollY) {
                setMinimizeHeader(true);
            }
            setY(window.scrollY)
          }
      }, [y]);
    
      useEffect(() => {
    
        window.addEventListener("scroll", handleNavigation);
    
        return () => {
          window.removeEventListener("scroll", handleNavigation);
        };
      }, [handleNavigation]);

    return (
        <>
            <MobileMenuOverlay status={menuState}>
                <MobileMenuWrapper>
                    <MobileMenuCloseContainer onClick={() => toggleMobileMenu("closed")}>
                        <MobileMenuClose>
                            <CloseIcon style={{fontSize: 20}} />
                        </MobileMenuClose>
                    </MobileMenuCloseContainer>
                    <MobileMenuLogoContainer>
                        <MobileMenuLogo src={strippedLogo}/>
                    </MobileMenuLogoContainer>
                    <MobileMenuNav>
                        <MobileMenuLinks>
                            <MobileMenuItem>
                                <MobileMenuLink onClick={() => toggleMobileMenu("closed")}>
                                    <NavLink 
                                    to="/"
                                    className="navbar-item"
                                    >
                                        Home
                                    </NavLink>
                                </MobileMenuLink>
                            </MobileMenuItem>
                            <MobileMenuItem>
                                <MobileMenuLink onClick={() => toggleMobileMenu("closed")}>
                                    <NavLink
                                    to="/aboutus"
                                    className="navbar-item"
                                    >
                                        About us
                                    </NavLink>
                                </MobileMenuLink>
                            </MobileMenuItem>
                            <MobileMenuItem>
                                <MobileMenuLink onClick={() => toggleMobileMenu("closed")}>
                                    <NavLink
                                    to="/shop"
                                    className="navbar-item"
                                    >
                                        Shop
                                    </NavLink>
                                </MobileMenuLink>
                            </MobileMenuItem>
                            <MobileMenuItem>
                                <MobileMenuLink onClick={() => toggleMobileMenu("closed")}>
                                    <NavLink
                                    to="/blog"
                                    className="navbar-item"
                                    >
                                        Blog
                                    </NavLink>
                                </MobileMenuLink>
                            </MobileMenuItem>
                            <MobileMenuItem>
                                <MobileMenuLink onClick={() => toggleMobileMenu("closed")}>
                                    <NavLink
                                    to="/gallery"
                                    className="navbar-item"
                                    >
                                        Gallery
                                    </NavLink>
                                </MobileMenuLink>
                            </MobileMenuItem>
                            <MobileMenuItem>
                            <MobileMenuLink onClick={() => toggleMobileMenu("closed")}>
                                    <NavLink
                                    to="/reviews"
                                    className="navbar-item"
                                    >
                                        Reviews
                                    </NavLink>
                                </MobileMenuLink>
                            </MobileMenuItem>
                        </MobileMenuLinks>
                    </MobileMenuNav>
                    {/* <SearchInputContainer>
                        <SearchInputWrapper>
                            <SearchInputForm>
                                <Search placeholder="SEARCH"/>
                                <SearchButton>
                                    <SearchIcon style={{fontSize: 25}}/>
                                </SearchButton>
                            </SearchInputForm>
                        </SearchInputWrapper>
                    </SearchInputContainer> */}
                    <MobileMenuSocials>
                        <MobileMenuSocialContainer>
                            <FacebookIcon style={{fontSize: 30}}/>
                        </MobileMenuSocialContainer>
                        <MobileMenuSocialContainer>
                            <TwitterIcon style={{fontSize: 30}}/>
                        </MobileMenuSocialContainer>
                        <MobileMenuSocialContainer>
                            <WhatsAppIcon style={{fontSize: 30}}/>
                        </MobileMenuSocialContainer>
                        <MobileMenuSocialContainer>
                            <InstagramIcon style={{fontSize: 30}}/>
                        </MobileMenuSocialContainer>
                    </MobileMenuSocials>
                </MobileMenuWrapper>
            </MobileMenuOverlay>
            <ModalBackdrop openModal={active} onClick={switchModal}></ModalBackdrop>
            <Modal openModal={active}>
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
                                <LoginForm />
                            </LoginBodyContainer>
                        </LoginBody>
                        <RegisterBody active={tabNo === 2? true : false}>
                            <RegisterBodyContainer>
                                <RegistrationForm />
                            </RegisterBodyContainer>
                        </RegisterBody>
                    </ModalBody>
                </ModalContainer>
            </Modal>
            <Wrapper minimize={minimizeHeader}>
                <RowContainer>
                    <Row>
                        <ContactContainer>
                            <IconContainer>
                                <PhoneIcon style={{fontSize: "2rem"}}/> 
                            </IconContainer>
                            <PhoneNo href="tel:09023687932">+234 90 236 879 32 </PhoneNo> 
                        </ContactContainer>
                        <LogoContainer>
                            <Link to="/">
                                <LogoImg src={logo} alt="Logo" />
                            </Link>
                        </LogoContainer>
                        <CartAndLogin isLoggedIn={user === null? false : true}>
                            <Wrap>
                                <Badge badgeContent={quantity} color="success" className="cartBadge">
                                    <ShoppingCartOutlinedIcon style={{fontSize: "2.5rem", color: "#7E8485"}} className="navIcon" onClick={() => toggleDropDown(dropDownState)}/> 
                                </Badge>

                                <CartItemsDropDown status={dropDownState}>
                                    <DropDownClose onClick={() => toggleDropDown(dropDownState)}>
                                        <CloseIcon style={{fontSize: 15}}/>
                                    </DropDownClose>
                                    <Cart dropdown isNav/>
                                </CartItemsDropDown>
                            </Wrap>
                            { 
                            (user === null)?
                                <Wrap>
                                    <AccountBoxOutlinedIcon style={{fontSize: "2.5rem", marginLeft: 15}} className="navIcon" onClick={switchModal}/>
                                </Wrap>
                                :
                                <VerifiedPersonContainer>
                                    <Button
                                    className="menuBtn"
                                    aria-controls="simple-menu"
                                    aria-haspopup="true"
                                    onClick={handleClick}>
                                        <VerifiedPersonIcon>
                                            <HowToRegOutlined className="verifiedIcon"/>
                                        </VerifiedPersonIcon>
                                        <VerifiedPersonMsg>
                                            Hi, {user.username}
                                        </VerifiedPersonMsg> 
                                    </Button>
                                    <Menu
                                        keepMounted
                                        anchorEl={anchorEl}
                                        onClose={handleClose}
                                        open={Boolean(anchorEl)}
                                    >
                                        <MenuItem onClick={() => handleClose("")}>
                                            <Link to="/customer/account" className="menuLink">
                                                <Person style={{marginRight: "10px"}}/>
                                                My Account
                                            </Link>
                                        </MenuItem>
                                        <MenuItem onClick={() => handleClose("logout")}>
                                            <MenuItemContainer>
                                                <Logout style={{marginRight: "10px"}}/>
                                                Logout
                                            </MenuItemContainer>
                                        </MenuItem>
                                    </Menu>
                                </VerifiedPersonContainer>
                            }
                        </CartAndLogin>
                    </Row>
                </RowContainer>
                <NavigationContainer>
                    <NavLogoContainer>
                        <Link to="/">
                            <LogoImg src={strippedLogo} alt="Logo" />
                        </Link>
                    </NavLogoContainer>
                    <NavMenu>
                        <NavItem>
                            <NavLink to="/" 
                            className="navbar-item"
                            >
                                Home
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/aboutus" 
                            className="navbar-item"
                            >
                                About us
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink to="/shop" 
                            className="navbar-item"
                            >
                                Shop
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                            to="/blog" 
                            className="navbar-item"
                            >
                                Blog
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                            to="/gallery" 
                            className="navbar-item"
                            >
                                Gallery
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink 
                            to="/reviews"
                            className="navbar-item"
                            >
                                Reviews
                            </NavLink>
                        </NavItem>
                    </NavMenu>
                    <MenuBarContainer>
                        <MenuIconContainer onClick={() => toggleMobileMenu("open")}>
                            <MenuIcon style={{fontSize: 30}}/>
                        </MenuIconContainer>
                    </MenuBarContainer>
                </NavigationContainer>
            </Wrapper>
        </>
    );
};

export default Navbar;