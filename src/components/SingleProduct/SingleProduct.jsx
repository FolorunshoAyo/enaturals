import React, {useEffect, useState} from 'react';
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
    const [loading, setLoading] = useState(true);
    const [product, setProduct]= useState([]);

    const convertedProductName = convertToDefaultProductName(productName);

    useEffect(() => {

        const getProduct = async () => {
            setLoading(true);

            const result = await publicRequest.get(`products/find/${convertedProductName}`);

            setProduct(result.data);
            setLoading(false);
        };

        getProduct();

    }, [productName]);

    const reOrderedProduct = sortSimilarProduct(product);

    return (
        <Container loading={loading}>
            {
                loading ? 
                <CircularProgress size="8rem"/>
                :
                <SingleProductDetails productName={convertedProductName} productDetails={reOrderedProduct}/>
            }
        </Container>
    );
};


export default SingleProduct;