import React from 'react';
import styled from 'styled-components';
import MajorProduct from './MajorProduct';
import { popularProducts } from '../../data';
import {smallPhone, medPhone, res700, res1023, tabLand, medDesktop, bigDesktop} from '../../responsive';

const Container = styled.div`
    padding: 2rem 3rem 0;
`;

const Header = styled.h2`
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
    padding: 5rem 8rem 2rem;
    height: 550px;

    ${bigDesktop({height: "600px", width: "1200px", padding: "5rem 0rem", margin: "0 auto 8rem"})}
    ${medDesktop({width: "1200px", padding: "5rem 5rem", margin: "0 auto 8rem"})}
    ${tabLand({width: "85%", margin: "0 auto", padding: "4rem 0 0"})}
    ${res1023({width: "85%", margin: "0 auto", padding: "4rem 0 0"})}
    ${res700({width: "75%", flexWrap: "wrap", height: "auto"})}
    ${medPhone({width: "90%"})}
    ${smallPhone({flexDirection: "column", flexWrap: "nowrap"})}
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
                        productTag={popularProduct.categories}
                    />
                    ))
                }
            </ProductsContainer>
        </Container>
    );
};


export default MajorProducts;