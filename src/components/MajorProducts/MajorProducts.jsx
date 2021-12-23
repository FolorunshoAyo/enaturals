import React from 'react';
import styled from 'styled-components';
import MajorProduct from './MajorProduct';
import { popularProducts } from '../../data';


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
    padding: 5rem 0 0;
`;

const ButtonContainer = styled.div`
    text-align: center;
`;

const Button = styled.button`
    width: 160px;
    height: 40px;
    padding: 10px;
    background-color: transparent;
    border: 2px solid #516348;
    text-transform: uppercase;
    color: #516348;
    border-radius: 10px;
    font-weight: 700;
    cursor: pointer;
    transition: all .3s;

    &:hover{
        background-color: #516348;
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
                        productDetails={popularProduct.productDetails}
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