import React from 'react';
import styled from 'styled-components';
import {relatedProducts} from '../../data';
import RelatedProduct from './RelatedProduct';

const Container = styled.div`
    margin-top: 5rem;
`;

const Title = styled.h2`
    font-size: 3.5rem;
    font-weight: 300;
    color: #4B5354;
    text-align: center;
    margin-bottom: 5rem;
    text-transform: uppercase;
`;

const RelatedProductsContainer = styled.div`
    padding: 0 5rem; 
    display: flex;
    justify-content: center;
`;

const RelatedProducts = () => {
    return (
        <Container>
            <Title>Related Products</Title>
            <RelatedProductsContainer>
                {relatedProducts.map(product => (
                    <RelatedProduct 
                    key={product.id}
                    name={product.name}
                    productImg={product.img}
                    price={product.price}
                    />
                ))}
            </RelatedProductsContainer>
        </Container>
    );
};

export default RelatedProducts;