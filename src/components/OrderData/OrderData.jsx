import React from 'react';
import styled from 'styled-components';
import NotificationsIcon from '@mui/icons-material/Notifications';
import CloseIcon from '@mui/icons-material/Close';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import TableBody from '@mui/material/TableBody';
import TableFooter from '@mui/material/TableFooter';
import {medPhone ,res700, res860} from '../../responsive';

const Container = styled.div`
    padding: 5rem 8rem;

    ${res700({padding: "5rem"})}
    ${medPhone({padding: "5rem 0"})}
`;

const TableWrapper = styled.div`
    padding-bottom: 5rem;
`;

const TableHeader = styled.div`
    font-size: 1.5rem;
    text-align: center;
`;

const Close = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Product = styled.div`
    display: flex;
    justify-content: space-between;
    height: 40px;

    ${res700({justifyContent: "flex-start"})}
`;

const ProductImageContainer = styled.div`
    flex: 0 0 25%;

    ${res700({display: "none"})}
`;

const ProductImg = styled.img`
    width: 100%;
    height: 100%;
`;

const ProductName = styled.div`
    flex: 0 0 70%;
    align-self: center;
    font-size: 1.5rem;
    text-transform: capitalize;

    ${res700({flex: "1", fontSize: "1.2rem"})}
`;

const Price = styled.div`   
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
`;

const Quantity = styled.div`
    display: flex;
    height: 40px;
    width: 70px;
    margin: 0 auto;
    border-bottom: 2px solid #BDBC91;
`;

const InputContainer = styled.div`
    flex: 1;
    text-align: end;
`;

const QuantityInput = styled.input`
    background: transparent;
    font: inherit;
    border: none;
    width: 50px;
    height: 100%;
    font-size: 15px;
    font-weight: 600;

    &:focus{
        outline: none;
    }
`;

const QuantityButtonContainer = styled.div`
    flex: 0 0 10%;
`;

const IncreaseButton = styled.button`
    background-color: #fff;
    display: block;
    border: none;
    width: 100%;
    height: 50%;
`;

const DecreaseButton = styled.button`
    background-color: #fff;
    display: block;
    border: none;
    width: 100%;
    height: 50%;
`;

const SubTotal = styled.div`
    text-align: center;
    font-size: 1.5rem;
    font-weight: 600;
`;

const EmptyCart = styled.div`
    display: flex;
    flex-direction: column;
`;

const NotificationContainer = styled.div`
    padding: 2rem 0 2rem 2rem; 
    display: flex;
    border-top: 5px solid #B9C799;
    background-color: #BDBC91;
`; 

const IconContainer = styled.div`
    flex: 0 0 5%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

const Notification = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const NotificationText = styled.div`
    font-size: 1.8rem;
`;

const ButtonContainer = styled.div`
    padding: 4rem 0;
`;

const Button = styled.button`
    display: block;
    width: 80%;
    margin: 0 auto;
    padding: 1rem 2rem;
    background-color: transparent;
    border: 2px solid #BDBC91;
    text-transform: uppercase;
    color: #BDBC91;
    font-weight: 700;
    cursor: pointer;
    transition: all .3s ease-in;

   &:hover{
       background-color: #BDBC91;
       color: #fff;
    }
    ${res700({width: "90%"})}
`;

const CartTotalContainer = styled.div`
    display: flex;
    justify-content: flex-end;
`;

const CartTotal = styled.div`
    flex: 0 0 35%;

    ${res860({flex: "0 0 50%"})}
    ${medPhone({flex: "0 0 60%"})}
`;

const Title = styled.h3`
    font-size: 2rem;
    margin-bottom: 1.5rem;
    text-transform: uppercase;
    font-weight: 600;
`;

const TotalInfoContainer = styled.div`

`;

const FinalTotal = styled.div`
    display: flex;
    background-color: #BDBC91;
    border-bottom: 2px solid #EFFCE8;
`;

const Label = styled.div`
    flex: 0 0 35%;
    background-color: #9AAF8F;  
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 1px;
    text-transform: uppercase;
    padding: 2rem 0 2rem 1rem;
`;    

const TotalPrice = styled.div`
    flex: 1;
    font-size: 1.5rem;
    font-weight: 400;
    padding: 2rem 0 2rem 1rem;
`;

const CheckoutButton = styled.button`
    display: block;
    width: 100%;
    margin-top: 2rem;
    padding: 1rem 2rem;
    background-color: transparent;
    border: 2px solid #BDBC91;
    text-transform: uppercase;
    color: #BDBC91;
    font-weight: 700;
    cursor: pointer;
    transition: all .3s ease-in;

   &:hover{
       background-color: #BDBC91;
       color: #fff;
    }
`;

const OrderData = () => {
    const emptyCart = <EmptyCart>
            <NotificationContainer>
                <IconContainer>
                    <NotificationsIcon style={{fontSize: 20}}/>
                </IconContainer>
                <Notification>
                    <NotificationText>Your cart is currently empty</NotificationText>
                </Notification>
            </NotificationContainer>
            <ButtonContainer>
                <Button>Return To Shop</Button>
            </ButtonContainer>
    </EmptyCart>
    return (
        <Container>
            <TableWrapper>
                <Table stickyHeader>
                    <TableHead classes={{backgroundColor: "#BDBC91"}}>
                        <TableRow>
                            <TableCell>
                                
                            </TableCell>
                            <TableCell>
                                <TableHeader>
                                    PRODUCT
                                </TableHeader>
                            </TableCell>
                            <TableCell>
                                <TableHeader>
                                    PRICE
                                </TableHeader>
                            </TableCell>
                            <TableCell>
                                <TableHeader>
                                    QUANTITY
                                </TableHeader>
                            </TableCell>
                            <TableCell>
                                <TableHeader>
                                    SUBTOTAL
                                </TableHeader>
                            </TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>
                                <Close>
                                    <CloseIcon />
                                </Close>
                            </TableCell>
                            <TableCell>
                                <Product>
                                    <ProductImageContainer>
                                        <ProductImg src="../enaturals/enaturals12.jpg"/>
                                    </ProductImageContainer>
                                    <ProductName>
                                        face cream with olive oil
                                    </ProductName>
                                </Product>
                            </TableCell>
                            <TableCell>
                                <Price>
                                    ₦1000
                                </Price>
                            </TableCell>
                            <TableCell>
                                <Quantity>
                                    <InputContainer>
                                        <QuantityInput value="1"/>
                                    </InputContainer>
                                    <QuantityButtonContainer>
                                        <IncreaseButton>
                                            <KeyboardArrowUpIcon style={{fontSize: 20}}/>
                                        </IncreaseButton>
                                        <DecreaseButton>
                                            <KeyboardArrowDownIcon style={{fontSize: 20}}/>
                                        </DecreaseButton>
                                    </QuantityButtonContainer>
                                </Quantity>
                            </TableCell>
                            <TableCell>
                                <SubTotal>
                                    ₦1000
                                </SubTotal>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell></TableCell>
                            <TableCell>
                                <Button>
                                    Update Cart
                                </Button>
                            </TableCell>
                        </TableRow>
                    </TableFooter>
                </Table>
            </TableWrapper>
            <CartTotalContainer>
                <CartTotal>
                    <Title> Cart Totals </Title>
                    <TotalInfoContainer>
                        <FinalTotal>
                            <Label>
                                Subtotal    
                            </Label> 
                            <TotalPrice>
                                    ₦1000 
                            </TotalPrice>
                        </FinalTotal>
                        <FinalTotal>
                            <Label>
                                Total   
                            </Label> 
                            <TotalPrice>
                                    ₦1000 
                            </TotalPrice>
                        </FinalTotal>
                        <CheckoutButton>Proceed To Checkout</CheckoutButton>
                    </TotalInfoContainer>
                </CartTotal>
            </CartTotalContainer>
        </Container>
    );
};


export default OrderData;