import React from 'react';
import styled from 'styled-components';
import CartItems from '../CartItems/CartItems';

const CartItemsContainer = styled.div`
    padding: ${props => props.isNav? "1rem 2rem" : "4rem 2rem"}; 
`;

const Cart = ({ dropdown, isNav}) => {
    return (
        <CartItemsContainer isNav={dropdown}>
            <CartItems isNav={isNav}/>
        </CartItemsContainer>
    );
};



export default Cart;