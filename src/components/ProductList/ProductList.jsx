import React, {useState} from 'react';
import styled from 'styled-components';
import Slider from '@mui/material/Slider';
import CloseIcon from '@mui/icons-material/Close';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import Product from './Product';
import Pagination from '../Pagination/Pagination';
import {allProducts} from '../../data';

const Container =styled.div`
    line-height: initial; 
    margin: 4rem 0;
    padding: 4rem 7rem;
`;

const ProductWrapper = styled.div`
    display: flex;
`;

const ToolsSection = styled.div`
    flex: 0 0 30%;
    padding: 0 1rem;
`;

const CartPreview = styled.div`
    background-color: #f2eeec;
`;

const CartItemsContainer = styled.div`
    padding: 4rem 2rem; 
`;

const CartItem = styled.div`
    display: flex;
    height: 65px;

    &:not(:last-child){
        margin-bottom: 20px;
    }
`;

const ItemImgContainer = styled.div`
    flex: 0 0 25%;
    margin-right: 10px;
`;

const ItemImg = styled.img`
    width: 100%;
    height: 100%;
`;

const ItemDescription = styled.div`
    align-self: flex-start;
    font-size: 1.5rem;
`;

const ItemName = styled.h4`
    color: #4B5354;
    font-size: 1.3rem;
    text-transform: capitalize;
    margin-bottom: 5px;
    font-family: Lato, sans-serif;
    cursor: pointer;
    font-weight: 400;
    transition: all .3s;

    &:hover{
        color: #ACBFA3;
    }
`;

const ItemPrice = styled.p`
    font-size: 1.5rem;
    font-family: Lato, sans-serif;
    color: #4B5354;
    font-weight: 400;
`;

const Close = styled.div`
    align-self: flex-start;
    margin-left: auto;
`;

const BillingContainer = styled.div`
    margin-top: 50px;
`; 

const SubTotal = styled.div`
    border-top: 2px solid #cabbb2;
    border-bottom: 2px solid #cabbb2;
    text-align: end;
    padding: 2rem 0;
    font-weight: 400;
    font-size: 1.5rem;
`;

const SubTotalTitle = styled.span`
    font-weight: 600;
    text-transform: uppercase;
    color: #7E8485;
`;


const OrderButtonContainer = styled.div`
    padding: 2rem 0 0;
    text-align: end;
`;

const CheckoutButton = styled.button`
    text-transform: uppercase;
    color: #ACBFA3;
    width: 35%;
    margin-right: 20px;
    border: none;
    cursor: pointer;
    background: transparent;
    letter-spacing: 1px;
`;

const ViewCartButton = styled.button`
    text-transform: uppercase;
    color: #B8A398;
    width: 40%;
    padding: 11px 12px;
    letter-spacing: 1px;
    background-color: transparent;
    border: 2px solid #B8A398;
    font-weight: 700;
    cursor: pointer;
    transition: all .3s ease-in;

   &:hover{
       background-color: #B8A398;
       color: #fff;
    }
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
`;

const RangeContainer = styled.div`
    padding: 2rem 4rem;
`;

const CategoriesContainer = styled.div`
    background-color: #f2eeec;
    margin-top: 3.5rem;
`;

const CategoryItem = styled.div`
    font-size: 2rem;

    &:not(:last-child){
        margin-bottom: 5px;
    }

    &::before{
        content: "> ";
        color: #9AAF8F;
    }
`;

const ProductsContainer = styled.div`
    padding: 0 1.5rem;
    flex: 1;
`;
const Categories = styled.div`
    padding: 4rem 2rem 2rem;
`;
const FilterProductsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;
const ViewsContainer = styled.div`
    display: flex;
`;
const Icon = styled.div`
    color: ${props => props.active? "#9AAF8F": "#28272e"};
    transition: all .5s;
    cursor: pointer;

    &:hover{
        color: #9AAF8F
    }
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;

const FilterSelect = styled.select`
    font: inherit;
    font-size: 1.5rem;
    border: none;
    border-bottom: 2px solid #9AAF8F;
    padding: 1rem 2rem 1rem 0;

    &:focus{
        outline: none;
        border-bottom: 2px solid #B9C799;
    }
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
    padding-bottom: 1rem;
`;

const PriceTitle = styled.span`
    color: grey;
    text-transform: uppercase;
`;

const FilterButton = styled.button`
    width: 160px;
    height: 40px;
    padding: 1rem 2rem;
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

    const changeToGrid = () => {
        setView("grid");
    };

    const changeToList = () => {
        setView("list");
    }

    return (
        <Container>
            <ProductWrapper>
                <ToolsSection>
                    <CartPreview>
                        <Title>
                            My Cart
                        </Title>
                        <CartItemsContainer>
                            <CartItem>
                                <ItemImgContainer>
                                    <ItemImg src="../enaturals/enaturals12.jpg"/>
                                </ItemImgContainer>
                                <ItemDescription>
                                    <ItemName>Face cream with olive oil</ItemName>
                                    <ItemPrice> 2 x ₦1000</ItemPrice>
                                </ItemDescription>
                                <Close>
                                    <CloseIcon style={{backgroundColor: "#fff"}}/>
                                </Close>
                            </CartItem>
                            <BillingContainer>
                                <SubTotal>
                                    <SubTotalTitle>Subtotal:</SubTotalTitle> ₦2000
                                </SubTotal>
                                <OrderButtonContainer>
                                    <CheckoutButton>
                                        Checkout
                                    </CheckoutButton>
                                    <ViewCartButton>
                                        View Cart
                                    </ViewCartButton>
                                </OrderButtonContainer>
                            </BillingContainer>
                        </CartItemsContainer>
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
                                <ViewListIcon style={{fontSize: "30"}}/>
                            </Icon>
                            <Icon onClick={changeToGrid} active={currView === "grid"? true : false}>
                                <ViewModuleIcon style={{fontSize: "30"}}/>
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
                                data={allProducts}
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
        </Container>
    );
};


export default ProductList;