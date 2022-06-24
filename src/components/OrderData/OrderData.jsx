import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import NotificationsIcon from '@mui/icons-material/Notifications';
// import CloseIcon from '@mui/icons-material/Close';
// import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
// import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import {smallPhone, medPhone ,res700, res860, res480} from '../../responsive';
import { mergeSimilarProductAccToID, numberWithCommas } from '../../usefulFunc';
import CartTableRows from '../CartTableRows/CartTableRows';
import { Link, useNavigate } from 'react-router-dom';
import { notLoggedIn } from '../../redux/login-register-modalRedux';

const Table = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: rgba(242,238,236,.4);
`;

const TableHead = styled.thead`
    text-align: center;
    background-color: #b8a398;
    height: 50px;
    font-size: 1.5rem;
    font-weight: 700;
    color: #fff;
`;

const TableHeader = styled.th`
    width: ${props => props.blankHead? "10%" : "auto"};
    paddidng: 12px;
`;

const TableBody = styled.tbody`
    padding: 10px 0;
    height: auto;
`;

const TableRow = styled.tr`
    height: 80px;
    border-bottom: 1px solid #b8a398; 
`;

// const TableCell = styled.td`
// `;

// const TableFooter = styled.tfoot``;

const Container = styled.div`
    padding: 5rem 8rem;

    ${res700({padding: "5rem"})}
    ${medPhone({padding: "5rem 2rem"})}
`;

const TableWrapper = styled.div`
    padding-bottom: 5rem;
`;

// const TableHeader = styled.div`
//     font-size: 1.5rem;
//     text-align: center;
// `;

// const Close = styled.div`
//     display: flex;
//     align-items: center;
//     justify-content: center;
// `;

// const Product = styled.div`
//     display: flex;
//     justify-content: space-between;
//     height: 60px;

//     ${res700({justifyContent: "flex-start"})}
// `;

// const ProductImageContainer = styled.div`
//     flex: 0 0 20%;

//     ${res700({display: "none"})}
// `;

// const ProductImg = styled.img`
//     width: 100%;
//     height: 100%;
// `;

// const ProductName = styled.div`
//     flex: 0 0 75%;
//     align-self: center;
//     font-size: 1.5rem;
//     text-transform: capitalize;

//     ${res700({flex: "1", fontSize: "1.2rem"})}
// `;

// const Price = styled.div`   
//     text-align: center;
//     font-size: 1.5rem;
//     font-weight: 600;
// `;

// const Quantity = styled.div`
//     display: flex;
//     height: 40px;
//     font-size: 2rem;
//     align-items: center;
//     justify-content: center;

//     ${smallPhone({width: "40px"})}
// `;

// const InputContainer = styled.div`
//     flex: 1;
// `;

// const QuantityInput = styled.input`
//     background: transparent;
//     font: inherit;
//     border: none;
//     width: 100%;
//     height: 100%;
//     font-size: 15px;
//     font-weight: 600;

//     &:focus{
//         outline: none;
//     }
// `;

// const QuantityButtonContainer = styled.div`
//     flex: 0 0 10%;
// `;

// const IncreaseButton = styled.button`
//     background-color: #fff;
//     display: block;
//     border: none;
//     width: 100%;
//     height: 50%;
// `;

// const DecreaseButton = styled.button`
//     background-color: #fff;
//     display: block;
//     border: none;
//     width: 100%;
//     height: 50%;
// `;

// const SubTotal = styled.div`
//     text-align: center;
//     font-size: 1.5rem;
//     font-weight: 600;
// `;

const EmptyCart = styled.div`
    display: flex;
    flex-direction: column;
`;

const NotificationContainer = styled.div`
    padding: 2rem 0 2rem 2rem; 
    display: flex;
    align-items: center;
    border-top: 3px solid #4b5354;
    background-color: #F2EEEC;
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
    color: #4b5354;
    font-family: Lato, sans-serif;
`;

const ButtonContainer = styled.div`
    padding: 4rem 0;
`;

const Button = styled.button`
    padding: 1.5rem 0;
    font-size: 13px;
    background-color: transparent;
    border: 2px solid #b8a398;
    text-transform: uppercase;
    color: #b8a398;
    font-weight: 700;
    cursor: pointer;
    transition: all .3s ease-in;

    ${res480({fontSize: "10px"})}
    ${smallPhone({fontSize: "8px"})}
`;

const CartTotalContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    ${medPhone({justifyContent: "flex-start"})}
`;

const CartTotal = styled.div`
    flex: 0 0 40%;

    ${res860({flex: "0 0 50%"})}
    ${medPhone({flex: "0 0 100%"})}
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
    background-color: rgba(242,238,236,.4);
    border-bottom: 1px solid #b8a398;
`;

const Label = styled.div`
    flex: 0 0 35%;
    font-size: 1.5rem;
    font-weight: 500;
    letter-spacing: 1px;
    background-color: #b8a398;
    text-transform: uppercase;
    padding: 12px;
    color: #fff;
    font-weight: 700;
`;    

const TotalPrice = styled.div`
    flex: 0 0 65%;
    font-size: 13px;
    font-weight: 400;
    padding: 2rem 0 2rem 1rem;
    font-family: Lato, sans-serif;
    color: #4B5354;
    font-weight: ${props => props.final? "700" : "400"}
`;

const CheckoutButton = styled.button`
    display: block;
    padding: 1.5rem 3rem;
    color: #b8a398;
    transition: all .3s ease;
    width: 100%;
    margin-top: 2rem;
    background-color: transparent;
    border: 2px solid #b8a398;
    text-transform: uppercase;
    font-weight: 700;
    cursor: pointer;

    &:hover{
        background-color: #b8a398;
        color: #fff;
    }

    ${smallPhone({fontSize: "10px"})}
`;

const OrderData = () => {
    const user = useSelector(state => state.user.currentUser);
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const reArrangedCart = mergeSimilarProductAccToID(cart.products);

    const subtotal = reArrangedCart[1].reduce((prev, current) => {
        const returns = prev + current;

        return returns;
    }, 0);

    const convertedSubTotal = numberWithCommas(subtotal);

    const emptyCart = <EmptyCart>
            <NotificationContainer>
                <IconContainer>
                    <NotificationsIcon style={{fontSize: 20, color: "#4b5354"}}/>
                </IconContainer>
                <Notification>
                    <NotificationText>Your cart is currently empty</NotificationText>
                </Notification>
            </NotificationContainer>
            <ButtonContainer>
                <Button>
                    <Link to="/shop" className="returnToShopLink">
                        Return To Shop
                    </Link>
                </Button>
            </ButtonContainer>
    </EmptyCart>

    const handleCheckout = () => {
        if(user === null){
            dispatch(notLoggedIn());
        }else{
            navigate("/checkout")
        }
    };

    return (
        <Container>
            {
                (cart.products.length === 0)?
                emptyCart
                :
                <>
                    <TableWrapper>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableHeader blankHead>
                                        
                                    </TableHeader>
                                    <TableHeader>
                                        PRODUCT
                                    </TableHeader>
                                    <TableHeader>
                                        PRICE
                                    </TableHeader>
                                    <TableHeader>
                                        QUANTITY
                                    </TableHeader>
                                    <TableHeader>
                                        SUBTOTAL
                                    </TableHeader>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {/* CART TABLE ROWS HERE */}
                                {
                                    reArrangedCart[0].map(reArrangedCartItem => (
                                        <CartTableRows 
                                            key={reArrangedCartItem[0]._id}
                                            productID={reArrangedCartItem[0]._id}
                                            productImg={reArrangedCartItem[0].img}
                                            productName={reArrangedCartItem[0].productName}
                                            priceOfProduct={reArrangedCartItem[0].price}
                                            quantity={reArrangedCartItem.length}
                                            totalPrice={reArrangedCartItem[0].price * reArrangedCartItem.length}
                                        />
                                    ))
                                }
                            </TableBody>
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
                                            ₦{convertedSubTotal}
                                    </TotalPrice>
                                </FinalTotal>
                                <FinalTotal>
                                    <Label>
                                        Total   
                                    </Label> 
                                    <TotalPrice final>
                                            ₦{convertedSubTotal}
                                    </TotalPrice>
                                </FinalTotal>
                                <CheckoutButton onClick={handleCheckout}>
                                    Proceed To Checkout
                                </CheckoutButton>
                            </TotalInfoContainer>
                        </CartTotal>
                    </CartTotalContainer>
                </>
            }
        </Container>
    );
};


export default OrderData;