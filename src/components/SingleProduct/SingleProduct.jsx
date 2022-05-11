import React, { useState, useEffect} from 'react';
import styled from 'styled-components';
import { res860 } from '../../responsive';
import { publicRequest } from '../../requestMethod';
import { convertToDefaultProductName, sortSimilarProduct } from '../../usefulFunc';
import { CircularProgress } from '@mui/material';
import SingleProductDetails from '../SingleProductDetails/SingleProductDetails';

const Container = styled.div`
    padding: 5rem 8rem;
    display: ${props => props.loading? "flex" : "block"};
    height: ${props => props.loading? "300px" : "auto"};
    justify-content: center;
    align-items; center;

    ${res860({padding: "5rem 2rem"})}
`;


const SingleProduct = ({productName}) => {
    const [product, setProduct]= useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    // The line of code helps to convert hyphenated text to a spaced out text for database reading.
    const convertedProductName = convertToDefaultProductName(productName);

    useEffect(() => {
        let isSuscribed = true;

        const getProduct = async () => {
            try{
                const result = isSuscribed? await publicRequest.get(`products/find/${convertedProductName}`, {timeout: 10000}) : null;

                setProduct(result.data);
                setLoading(false);
            }catch(err){
                console.log(err);
                setLoading(false);
            }
        };

        getProduct();

        return () => { isSuscribed = false }

    }, [productName]);


    console.log(product, loading);
    const reOrderedProduct = sortSimilarProduct(product);

    return (
        <Container loading={loading}>
            {
                loading ? 
                <CircularProgress size="8rem"/>
                :
                <SingleProductDetails productName={convertedProductName} productDetails={reOrderedProduct} errorMsg={error}/>
            }
        </Container>
    );
};


export default SingleProduct;