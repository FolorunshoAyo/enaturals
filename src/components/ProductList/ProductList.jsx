import React, { useState } from 'react';
import styled from 'styled-components';
import Slider from '@mui/material/Slider';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import Product from './Product';
import Pagination from '../Pagination/Pagination';
import {allProducts} from '../../data';
import {res480, medPhone, res700, res860 ,res1023, bigDesktop} from '../../responsive';
import CartItems from '../CartItems/CartItems';


const Container = styled.section`
    line-height: initial; 
    margin: 4rem 0;
    padding: 4rem 8rem;

    ${bigDesktop({width: "1750px", margin: "0 auto"})}
    ${res1023({padding: "4rem 15rem"})}
    ${res860({padding: "4rem 5rem"})}
    ${res700({padding: "4rem 3rem"})}
    ${res480({padding: "4rem 1rem", margin: "0 0 4rem"})}
`;

const ProductOuterWrapper = styled.div`
    padding: 0 2rem;

    ${res700({width: "520px", margin: "0 auto", padding: "0"})}
    ${medPhone({width: "90%"})}
    ${res480({width: "100%", margin: "0"})}
`;

const ProductWrapper = styled.div`
    display: flex;

    ${res1023({flexDirection: "column"})}
`;

const ToolsSection = styled.div`
    flex: 0 0 35%;
    padding: 0 1rem;


    ${res1023({order: "1", display: "flex", flexWrap: "wrap", justifyContent: "space-between", marginTop: "5rem"})}
    ${res700({flexDirection: "column"})}
`;

const CartPreview = styled.div`
    background-color: #f2eeec;

    ${res1023({flex: "0 0 48%"})}
    ${res700({marginBottom: "3rem"})}
`;

const Title = styled.div`
    padding: 4rem;
    background-color: #ACB5A3;
    font-size: 2rem;
    letter-spacing: 1px;
    font-weight: 300;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 1.5rem;
`;


const PriceRangeContainer = styled.div`
    background-color: #f2eeec;
    min-height: 200px;
    margin-top: 3.5rem;

    ${res1023({flex: "0 0 48%", marginTop: "0", alignSelf: "flex-start"})}
    ${res700({marginBottom: "3rem", alignSelf: "stretch"})}
`;

const RangeContainer = styled.form`
    padding: 2rem 4rem;
`;

const CategoriesContainer = styled.div`
    background-color: #f2eeec;
    margin-top: 3.5rem;

    ${res1023({flex: "0 0 48%"})}
`;

const CategoryItem = styled.div`
    font-size: 1.3rem;
    font-family: Lato, sans-serif;
    transition: all .3s ease-in;
    cursor: pointer;

    &:not(:last-child){
        margin-bottom: 5px;
    }

    &::before{
        content: "> ";
        margin-right: 12px;
        color: #9AAF8F;
    }

    &:hover{
        color: #ACBFA3;
    }
`;

const ProductsContainer = styled.div`
    padding: 0 1.5rem;
    flex: 1;
`;
const Categories = styled.div`
    padding: 2rem;
`;
const FilterProductsContainer = styled.div`
    display: flex;
    justify-content: space-between;

    ${medPhone({flexDirection: "column", })}
`;
const ViewsContainer = styled.div`
    display: flex;
`;

const Icon = styled.div`
    color: ${props => props.active? "#ACBFA3": "#28272e"};
    transition: all .5s;
    cursor: pointer;

    &:hover{
        color: ${props => props.active? "#ACBFA3": "#b8a398"};;
    }

    ${medPhone({marginBottom: "3rem"})}
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    ${medPhone({justifyContent: "flex-start"})}
`;

const FilterSelect = styled.select`
    font-family: Lato, sans-serif;
    font-size: 1.5rem;
    border: none;
    color: #7E8485;
    background-color: transparent;
    border-bottom: 2px solid #7E8485;
    padding: 0rem 4rem 2rem 1rem;
    transition: all .5s ease;
    
    &:hover{
        cursor: pointer;
        border-bottom: 2px solid #B8A398;
    }

    &:focus{
        outline: none;
    }

    ${medPhone({flex: "1"})}
`;
const FilterOption = styled.option`
    font: inherit;
`;

const FilterPriceContainer = styled.div`
    padding: 1rem 0;
    text-align: end;
`;

const PriceRange = styled.div`
    font-size: 1.5rem;
    font-family: Lato, sans-serif;
    padding-bottom: 1rem;
`;

const PriceTitle = styled.span`
    color: #7E8485;
    text-transform: uppercase;
`;

const FilterButton = styled.button`
    height: 40px;
    padding: 12px 24px;
    background-color: transparent;
    border: 2px solid #B8A398;
    text-transform: uppercase;
    color: #B8A398;
    font-weight: 700;
    cursor: pointer;
    transition: all .3s ease-in;

   &:hover{
       background-color: #B8A398;
       color: #fff;
    }
`;

const Products = styled.div`
    padding: 2rem 0;
`;

const PaginationContainer= styled.div`
`;

const ProductList = () => {
    const [currView, setView] = useState("list");

    // MERGING SIMILAR PPRODUCTS BY NAME
    const productNames = [];
    const reArrangedProducts = [];

    allProducts.forEach(product => {
        if(productNames.includes(product.productName)){

        }else{
            productNames.push(product.productName);
        } 
    });

    productNames.forEach(name => {
        reArrangedProducts.push(allProducts.filter(product => product.productName === name));
    });

    const changeToGrid = () => {
        setView("grid");
    };

    const changeToList = () => {
        setView("list");
    }

    return (
        <Container>
            <ProductOuterWrapper>
                <ProductWrapper>
                    <ToolsSection>
                        <CartPreview>
                            <Title>
                                My Cart
                            </Title>
                            <CartItems />
                        </CartPreview>
                        <PriceRangeContainer>
                            <Title>
                                Filter By Price
                            </Title>
                            <RangeContainer>
                                <Slider 
                                    getArialLabel={() => 'Minimum price'}
                                    value={[0, 20]}
                                    valueLabel="auto"
                                    disableSwap
                                />
                                <FilterPriceContainer>
                                    <PriceRange>
                                        <PriceTitle>Price</PriceTitle>: ₦1000 - ₦20000
                                    </PriceRange>
                                    <FilterButton>Filter</FilterButton>
                                </FilterPriceContainer>
                            </RangeContainer>
                        </PriceRangeContainer>
                        <CategoriesContainer>
                            <Title>
                                Categories
                            </Title>
                            <Categories>
                                <CategoryItem>Curative</CategoryItem>
                                <CategoryItem>For Kids</CategoryItem>
                                <CategoryItem>Gift Card</CategoryItem>
                                <CategoryItem>Refreshing</CategoryItem>
                            </Categories>
                        </CategoriesContainer>
                    </ToolsSection>
                    <ProductsContainer>
                        <FilterProductsContainer>
                            <ViewsContainer>
                                <Icon onClick={changeToList} active={currView === "list"? true : false}>
                                    <ViewListIcon style={{fontSize: "40"}}/>
                                </Icon>
                                <Icon onClick={changeToGrid} active={currView === "grid"? true : false}>
                                    <ViewModuleIcon style={{fontSize: "40"}}/>
                                </Icon>
                            </ViewsContainer>   
                            <FilterContainer>
                                <FilterSelect>
                                    <FilterOption>Sort by latest</FilterOption>
                                    <FilterOption>Sort by price: low to high</FilterOption>
                                    <FilterOption>Sort by price: high to low</FilterOption>
                                </FilterSelect>
                            </FilterContainer>                     
                        </FilterProductsContainer>
                        <Products>
                            <PaginationContainer>
                                {allProducts.length > 0 ? 
                                <Pagination 
                                    data={reArrangedProducts}
                                    RenderComponent={Product}
                                    pageLimit={5}
                                    dataLimit={4}
                                    view={currView}
                                /> 
                                :
                                <h1>No products to display</h1> 
                                }
                            </PaginationContainer>
                        </Products>
                    </ProductsContainer>    
                </ProductWrapper>
            </ProductOuterWrapper>
        </Container>
    );
};


export default ProductList;