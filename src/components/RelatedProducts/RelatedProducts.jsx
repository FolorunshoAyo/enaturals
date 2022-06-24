import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import {relatedProducts} from '../../data';
import RelatedProduct from './RelatedProduct';
import {res700} from '../../responsive';
import { Skeleton } from '@mui/material';
import { mergeSimilarProductAccToName } from '../../usefulFunc';
import { publicRequest } from '../../requestMethod';

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

    ${res700({fontSize: "3rem", marginBottom: "3rem", letterSpacing: "0.46px"})}
`;

const RelatedProductsContainer = styled.div` 
    display: flex;
    justify-content: ${props => props.centerContent? "center" : "space-between"};

    ${res700({flexDirection: "column"})}
`;

const NoRelatedProductMessage = styled.p`
    text-align: center;
    font-size: 2.5rem;
    font-weight: 300;
    font-family: Lato, sans-serif;
`;

const RelatedProducts = ({productName, categories}) => {
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const formCategoryTags = categories => {
        let queries = "";

        categories.forEach((category, i) => {
            if(categories.length === (i + 1)){
                queries += `tag${i+1}=${category}`    
            }else{
                queries += `tag${i+1}=${category}&`;
            }
        });
        
        return queries;
    };

    useEffect(() => {

        const getRelatedProduct = async () => {
            setLoading(true);

            const result = await publicRequest.get(`/products/category/${productName}?${formCategoryTags(categories)}`);

            setRelatedProducts(result.data);
            setLoading(false);
        };

        getRelatedProduct();

    }, [productName, categories]);

    const reOrderedRelatedProducts = mergeSimilarProductAccToName(relatedProducts);

    return (
        <Container>
            <Title>Related Products</Title>
            <RelatedProductsContainer centerContent={reOrderedRelatedProducts.length === 0 || reOrderedRelatedProducts.length === 1}>
                { 
                    (loading)?
                    <>
                        <Skeleton variant="rectangular" animation="wave" width="100%"/>
                    </>
                    :
                    (reOrderedRelatedProducts.length === 0)?
                    <NoRelatedProductMessage> No related products to display</NoRelatedProductMessage>
                    :
                    reOrderedRelatedProducts.map(product => (
                        (product.length === 1)?
                        <RelatedProduct 
                            key={product[0]._id}
                            name={product[0].productName}
                            productImg={product[0].img}
                            price={`₦${product[0].price}`}
                            categories={product[0].categories}
                            size={product[0].size}
                        />
                        :
                        <RelatedProduct 
                            key={product[0]._id}
                            name={product[0].productName}
                            productImg={product[0].img}
                            price={`₦${product[0].price} - ₦${product[product.length - 1].price}`}
                            categories={product[0].categories}
                            size={product[0].size}
                        />
                    ))
                }
            </RelatedProductsContainer>
        </Container>
    );
};

export default RelatedProducts;