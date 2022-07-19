import React, { useState } from 'react';
import styled from 'styled-components';
// import { popularProducts } from '../../data';
import {smallPhone, medPhone, res700, res1023, tabLand, medDesktop, bigDesktop} from '../../responsive';
import { useEffect } from 'react';
import { publicRequest } from '../../requestMethod';
import { CircularProgress } from '@mui/material';
import RearrangeMajorProducts from './RearrangeMajorProducts';
import { mergeSimilarProductAccToName } from '../../usefulFunc';
import toast from 'react-hot-toast';

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

const ProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;


const NoMajorProductErr = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Lato, sans-serif;
    font-size: 2.5rem;
    height: 300px;
`;

const ProductsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 5rem 8rem 2rem;

    ${bigDesktop({height: "600px", width: "1200px", padding: "5rem 0rem", margin: "0 auto 8rem"})}
    ${medDesktop({width: "1200px", padding: "5rem 5rem", margin: "0 auto 8rem"})}
    ${tabLand({height: "auto", width: "85%", margin: "0 auto", padding: "4rem 0 0"})}
    ${res1023({width: "85%", margin: "0 auto", padding: "4rem 0 0"})}
    ${res700({width: "75%", flexWrap: "wrap", height: "auto"})}
    ${medPhone({width: "90%"})}
    ${smallPhone({flexDirection: "column", flexWrap: "nowrap"})}
`;

const MajorProducts = () => {
    const [majorProducts, setMajorProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getMajorProducts = async () => {
            try{
                setLoading(true);
                const res = await publicRequest.get("/products/majorProducts");
                setMajorProducts((res.data.length !== 0)? mergeSimilarProductAccToName(res.data) : []);
                setLoading(false);
            }catch(error){
                toast.error("Unable to fetch major products (501)");
            }
        };

        getMajorProducts();
    }, []);

    return (
        <Container>
            <Header>Lets's get one thing clear - your skin</Header>
            {
                loading?
                <ProgressWrapper>
                    <CircularProgress size="8rem" />
                </ProgressWrapper>
                :
                (majorProducts.length === 0)?
                <NoMajorProductErr>
                    No major products to display
                </NoMajorProductErr>
                :
                <ProductsContainer>
                    {
                        <RearrangeMajorProducts 
                            rearrangedProducts={majorProducts}
                        />
                    }
                </ProductsContainer>
            }
        </Container>
    );
};


export default MajorProducts;