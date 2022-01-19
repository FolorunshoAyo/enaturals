import React from 'react';
import styled from 'styled-components';
import NewProduct from './NewProduct';
import { newProducts } from '../../data';
import {smallPhone, medPhone, res700, res1023, tabLand, medDesktop, bigDesktop} from '../../responsive';

const Container = styled.section`
    padding: 6rem 3rem;
`;

const Header = styled.div`
    font-size: 3rem;
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
    color: #7e8485; 

    ${medPhone({fontSize: "2.5rem"})}
`;

const ProductsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5rem 8rem;
    height: 550px;

    ${bigDesktop({width: "1200px", padding: "8rem 0rem", margin: "0 auto"})}
    ${medDesktop({width: "1200px", padding: "8rem 0rem", margin: "0 auto"})}
    ${tabLand({width: "85%", margin: "0 auto", padding: "4rem 0 0"})}
    ${res1023({width: "85%", margin: "0 auto", padding: "4rem 0 0"})}
    ${res700({width: "75%", flexWrap: "wrap", height: "auto"})}
    ${medPhone({width: "90%"})}
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