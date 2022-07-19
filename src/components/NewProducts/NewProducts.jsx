import React, { useState } from 'react';
import styled from 'styled-components';
import NewProduct from './NewProduct';
// import { newProducts } from '../../data';
import {smallPhone, medPhone, res700, res1023, tabLand, medDesktop, bigDesktop} from '../../responsive';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
import { publicRequest } from '../../requestMethod';
import { CircularProgress } from '@mui/material';

const Container = styled.section`
    padding: 4rem 3rem 0;
`;

const Header = styled.div`
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

const NoNewProductErr = styled.div`
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
    padding: 5rem 8rem;

    ${bigDesktop({height: "600px", width: "1200px", padding: "8rem 0rem", margin: "0 auto 8rem"})}
    ${medDesktop({width: "1200px", padding: "8rem 0rem", margin: "0 auto 8rem"})}
    ${tabLand({height: "auto", width: "85%", margin: "0 auto", padding: "4rem 0 0"})}
    ${res1023({width: "85%", margin: "0 auto", padding: "4rem 0 0"})}
    ${res700({width: "75%", flexWrap: "wrap", height: "auto"})}
    ${medPhone({width: "90%"})}
    ${smallPhone({flexDirection: "column", flexWrap: "nowrap"})}
`;

const NewProducts = () => {
    const [newProducts, setNewProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getNewProducts = async () => {
            try{
                setLoading(true);
                const res = await publicRequest.get("/products/?new=true");
                setNewProducts(res.data);
                setLoading(false);            
            }catch(error){
                toast.error("Unable to get new products (501)");
            }
        };

        getNewProducts();
    }, []);

    return (
        <Container>
            <Header>New Products</Header>
            {
                loading?
                <ProgressWrapper>
                    <CircularProgress size="8rem"/>
                </ProgressWrapper>
                :
                (newProducts.length === 0)?
                <NoNewProductErr>
                    No new products to display
                </NoNewProductErr>
                :
                <ProductsContainer>
                    {
                        newProducts.map(newProduct => ( 
                        <NewProduct 
                            key={newProduct._id}
                            productInfo={newProduct}
                            productID={newProduct._id}
                            productImage={newProduct.img}
                            price={newProduct.price}
                            description={newProduct.desc}
                            productName={newProduct.productName}
                            size={newProduct.size}
                            inStock={newProduct.inStock}
                            discounted={newProduct.discount}
                            discountPrice={newProduct.discountPrice}
                            productTags={newProduct.categories}
                        />
                        ))
                    }
                </ProductsContainer>
            }
        </Container>
    );
};


export default NewProducts;