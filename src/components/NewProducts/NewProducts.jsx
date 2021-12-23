import React from 'react';
import styled from 'styled-components';
import NewProduct from './NewProduct';
import { newProducts } from '../../data';


const Container = styled.div`
    padding: 3rem 3rem;
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