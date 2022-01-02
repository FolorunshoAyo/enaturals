import React from 'react';
import styled from 'styled-components';
import {relatedProducts} from '../../data';
import RelatedProduct from './RelatedProduct';
import {res700} from '../../responsive';

const Container = styled.div`
    margin-top: 5rem;
`;

const Title = styled.h2`
    font-size: 3.5rem;
    font-weight: 300;
    color: #4B5354;
    text-align: center;
    letter-spacing: 0.54px;
    margin-bottom: 5rem;
    text-transform: uppercase;

    ${res700({fontSize: "2.5rem", marginBottom: "3rem", letterSpacing: "0.46px"})}
`;

const RelatedProductsContainer = styled.div` 
    display: flex;
    justify-content: space-between;

    ${res700({flexDirection: "column"})}
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