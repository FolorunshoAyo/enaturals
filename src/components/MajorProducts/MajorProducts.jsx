import React from 'react';
import styled from 'styled-components';
import MajorProduct from './MajorProduct';
import { popularProducts } from '../../data';
import {tabPort, res1023} from '../../responsive';

const Container = styled.div`
    padding: 6rem 3rem;
`;

const Header = styled.div`
    font-size: 3rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
    color: #7e8485; 
`;

const ProductsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5rem 0;

    ${res1023({width: "85%", margin: "0 auto", padding: "4rem 0 0"})}
`;

const ButtonContainer = styled.div`
    text-align: center;
    margin-top: 4rem;

    ${res1023({margin: "0"})}
`;

const Button = styled.button`
    padding: 16px 32.5px;
    background-color: transparent;
    border: 2px solid #B8A398;
    text-transform: uppercase;
    color: #B8A398;
    font-weight: 700;
    cursor: pointer;
    transition: all .3s ease;

    &:hover{
        background-color: #B8A398;
        color: #fff;
    }
`;

const MajorProducts = () => {
    return (
        <Container>
            <Header>Lets's get one thing clear - your skin</Header>
            <ProductsContainer>
                {
                    popularProducts.map(popularProduct => ( 
                    <MajorProduct 
                        key={popularProduct.id} 
                        productImg={popularProduct.img}
                        productName={popularProduct.productName}
                        priceRange={popularProduct.priceRange}
                        productTag={popularProduct.productTag}
                    />
                    ))
                }
            </ProductsContainer>
            <ButtonContainer>
                <Button>Shop Products →</Button>
            </ButtonContainer>
        </Container>
    );
};


export default MajorProducts;