import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import { res860 } from '../../responsive';
import { publicRequest } from '../../requestMethod';
import { convertToDefaultProductName, sortSimilarProduct } from '../../usefulFunc';
import { CircularProgress } from '@mui/material';
import SingleProductDetails from '../SingleProductDetails/SingleProductDetails';

const Container = styled.div`
    padding: 5rem 8rem;
    display: ${props => props.loading === "isLoading"? "flex" : "block"};
    height: ${props => (props.loading === "isLoading")? "300px" : "auto"};
    justify-content: center;
    align-items; center;

    ${res860({padding: "5rem 2rem"})}
`;

const ProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

const NoProductError = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Lato, sans-serif;
    font-size: 2.5rem;
    height: 300px;
`;


const SingleProduct = ({ productName }) => {
    const [product, setProduct]= useState([]);
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(false);
    // The line of code helps to convert hyphenated text to a spaced out text for database reading.
    const convertedProductName = convertToDefaultProductName(productName);

    useEffect(() => {
        const getProduct = async () => {
            try{
                setLoading(true);
                const result = await publicRequest.get(`/products/find/${convertedProductName}`);
                
                setProduct(result.data);
                setLoading(false);
            }catch(err){
                console.log(err);
                setLoading(false);
            }
        };

        getProduct();

    }, [productName, convertedProductName]);


    const reOrderedProduct = sortSimilarProduct(product);
    
    return (
        <Container loading={loading? "isLoading" : "isNotLoading"}>
            {
                loading ? 
                <ProgressWrapper>
                    <CircularProgress size="8rem"/>
                </ProgressWrapper>
                :
                (product.length === 0)?
                <NoProductError>
                    No product to display
                </NoProductError>
                :
                <SingleProductDetails productName={convertedProductName} productDetails={reOrderedProduct} />
            }
        </Container>
    );
};


export default SingleProduct;