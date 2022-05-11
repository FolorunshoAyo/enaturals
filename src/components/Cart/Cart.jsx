import React from 'react';
import styled from 'styled-components';
import CartItems from '../CartItems/CartItems';

const CartItemsContainer = styled.div`
    padding: ${props => props.isNav? "1rem 2rem" : "4rem 2rem"}; 
`;

const Cart = ({ dropdown }) => {
    return (
        <CartItemsContainer isNav={dropdown}>
            <CartItems />
        </CartItemsContainer>
    );
};



export default Cart;