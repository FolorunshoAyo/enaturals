import React from 'react';
import styled from 'styled-components';
import NewProduct from './NewProduct';
import { newProducts } from '../../data';
import {smallPhone, res700, tabPort, res1023} from '../../responsive';

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
    padding: 5rem 8rem;

    ${res1023({width: "85%", margin: "0 auto", padding: "4rem 0 0"})}
    ${res700({width: "75%", flexWrap: "wrap"})}
    ${smallPhone({flexDirection: "column", flexWrap: "nowrap"})}
`;

const NewProducts = () => {
    return (
        <Container>
            <Header>New Products</Header>
            <ProductsContainer>
                {
                    newProducts.map(popularProduct => ( 
                    <NewProduct 
                        key={popularProduct.id} 
                        productImg={popularProduct.img}
                        productName={popularProduct.productName}
                        priceRange={popularProduct.priceRange}
                        productDetails={popularProduct.productDetails}
                    />
                    ))
                }
            </ProductsContainer>
        </Container>
    );
};


export default NewProducts;