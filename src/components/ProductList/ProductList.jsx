import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Slider from '@mui/material/Slider';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import Product from './Product';
import Pagination from '../Pagination/Pagination';
// import {allProducts} from '../../data';
import {res480, medPhone, res700, res860 ,res1023, bigDesktop} from '../../responsive';
import Cart from '../Cart/Cart';
import { convertToDefaultProductTag, mergeSimilarProductAccToName } from '../../usefulFunc';
import "./ProductList.css";
import { Link } from 'react-router-dom';
import { CircularProgress } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts, getProductsByRange } from '../../redux/apiCalls';


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
    margin-top: 3.5rem;

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

const RangeContainer = styled.div`
    padding: 2rem 4rem;
`;

const CategoriesContainer = styled.div`
    background-color: #f2eeec;

    ${res1023({flex: "0 0 48%"})}
`;

const Categories = styled.ul`
    padding: 2rem;
    list-style-type: none;
`;

const CategoryItem = styled.li`
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
        color: #b8a398;
    }
`;

const ProductsContainer = styled.div`
    padding: 0 1.5rem;
    flex: 1;
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
    display: ${props => props.loader? "flex" : "block"};
    height: ${props => props.loader? "200px" : "auto"};
    justify-content: center;
    align-items: center;
`;

const NoProductsError = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Lato, sans-serif;
    font-size: 2.5rem;
    height: 300px;
`;

const ProductList = ({productTag}) => {
    // const [products, setProducts] = useState([]);
    const { products, isFetching } = useSelector(state => state.products);
    const [currView, setView] = useState("list");
    const [sliderValue, setSliderValue] = useState([0, 50]);
    // const [isLoading, setLoading] = useState(true);
    const [sort, setSort] = useState("newest");
    const dispatch = useDispatch();

    // HANDLE ENDPOINTS FOR SORTING
    const endPointGen = sortType => {
        let path = "";
        switch (sortType){
            case "newest":
                path = `/products/`
            break;
            case "asc":
                path = `/products/?sortby=asc`;
            break;
            case "desc":
                path = `/products/?sortby=desc`;
            break;
            default:
                console.log("No other sort type.");

        }

        return path;
    };

   // FETCH ALL PRODUCTS BASED ON FILTER SELECT
    useEffect(() => {
        getAllProducts(endPointGen(sort), dispatch);
    }, [sort, productTag]);

    // FETCH ALL PRODUCTS BASED ON RANGED PRICING
    const handleFilteredProductGeneration = () => {
        getProductsByRange((sliderValue[0] * 1000)/2, (sliderValue[1] * 1000)/2, dispatch);
    };

    // FOR SLIDER
    const handleSliderChange = (event, newValue) => {
        setSliderValue(newValue);
    };

    // FOR FILTER SELECT 
    const handleChange = (e) => {
        setSort(e.target.value);
        getAllProducts(endPointGen(e.target.value), dispatch);
    }

    const mergeAndFilterProducts = (products) => {
        //MERGE SIMILAR PRODUCTS 
        const reArrangedProducts = mergeSimilarProductAccToName(products);

        // FILTER PRODUCTS BY TAG
        const filteredProductsByProductTag = [];

        if(productTag && products){
            const modProductTag = convertToDefaultProductTag(productTag);

            reArrangedProducts.forEach((reArrangedProduct) => {
                const noOfSimilarProduct = reArrangedProduct.length;

                if(noOfSimilarProduct === 4){
                    if(reArrangedProduct[0].categories.includes(modProductTag) || reArrangedProduct[1].categories.includes(modProductTag) || reArrangedProduct[2].categories.includes(modProductTag) || reArrangedProduct[3].categories.includes(modProductTag)){
                        filteredProductsByProductTag.push(reArrangedProduct);
                    } 
                }else if(noOfSimilarProduct === 3){
                    if(reArrangedProduct[0].categories.includes(modProductTag) || reArrangedProduct[1].categories.includes(modProductTag) || reArrangedProduct[2].categories.includes(modProductTag)){
                        filteredProductsByProductTag.push(reArrangedProduct);
                    } 
                }else if(noOfSimilarProduct === 2){
                    if(reArrangedProduct[0].categories.includes(modProductTag) || reArrangedProduct[1].categories.includes(modProductTag)){
                        filteredProductsByProductTag.push(reArrangedProduct);
                    }
                }else if (noOfSimilarProduct === 1){
                    if(reArrangedProduct[0].categories.includes(modProductTag)){
                        filteredProductsByProductTag.push(reArrangedProduct);
                    }
                }
            });
        }

        return [reArrangedProducts, filteredProductsByProductTag];
    };


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
                        <CategoriesContainer>
                            <Title>
                                Categories
                            </Title>
                            <Categories>
                                <CategoryItem>
                                    <Link to="/product-category/kit" className="categoryLink">
                                       Kit
                                    </Link>
                                </CategoryItem>
                                <CategoryItem>
                                    <Link to="/product-category/moisturising" className="categoryLink">
                                        Moisturising
                                    </Link>
                                </CategoryItem>
                                <CategoryItem>
                                    <Link to="/product-category/rejuvenating" className="categoryLink">
                                        Rejuvenating
                                    </Link>
                                </CategoryItem>
                                <CategoryItem>
                                    <Link to="/product-category/glowing" className="categoryLink">
                                        Glowing
                                    </Link>
                                </CategoryItem>
                                <CategoryItem>
                                    <Link to="/product-category/lightening" className="categoryLink">
                                        Lightening
                                    </Link>
                                </CategoryItem>
                                <CategoryItem>
                                    <Link to="/product-category/body-exfoliant" className="categoryLink">
                                        Body Exfoliant
                                    </Link>
                                </CategoryItem>
                                <CategoryItem>
                                    <Link to="/product-category/softening" className="categoryLink">
                                        Softening
                                    </Link>
                                </CategoryItem>
                                <CategoryItem>
                                    <Link to="/product-category/brightening" className="categoryLink">
                                        Brightening
                                    </Link>
                                </CategoryItem>
                                <CategoryItem>
                                    <Link to="/product-category/repairing" className="categoryLink">
                                        Repairing
                                    </Link>
                                </CategoryItem>
                                <CategoryItem>
                                    <Link to="/product-category/hydrating" className="categoryLink">
                                        Hydrating
                                    </Link>
                                </CategoryItem>
                                <CategoryItem>
                                    <Link to="/product-category/strenghtening" className="categoryLink">
                                        Strengthening
                                    </Link>
                                </CategoryItem>
                                <CategoryItem>
                                    <Link to="/product-category/soothing" className="categoryLink">
                                        Soothing
                                    </Link>
                                </CategoryItem>
                                <CategoryItem>
                                    <Link to="/product-category/nourishing" className="categoryLink">
                                        Nourishing
                                    </Link>
                                </CategoryItem>
                                <CategoryItem>
                                    <Link to="/product-category/toning" className="categoryLink">
                                        Toning
                                    </Link>
                                </CategoryItem>
                                <CategoryItem>
                                    <Link to="/product-category/purifying" className="categoryLink">
                                        Purifying
                                    </Link>
                                </CategoryItem>
                                <CategoryItem>
                                    <Link to="/product-category/detoxifying" className="categoryLink">
                                        Detoxifying
                                    </Link>
                                </CategoryItem>
                                <CategoryItem>
                                    <Link to="/product-category/pimples-treatment" className="categoryLink">
                                        Pimples Treatment
                                    </Link>
                                </CategoryItem>
                                <CategoryItem>
                                    <Link to="/product-category/uncategorized" className="categoryLink">
                                        Uncategorized
                                    </Link>
                                </CategoryItem>
                            </Categories>
                        </CategoriesContainer>
                        <CartPreview>
                            <Title>
                                My Cart
                            </Title>
                            <Cart />
                        </CartPreview>
                        <PriceRangeContainer>
                            <Title>
                                Filter By Price
                            </Title>
                            <RangeContainer>
                                <Slider 
                                    onChange={handleSliderChange}
                                    value={sliderValue}
                                    disableSwap
                                />
                                <FilterPriceContainer>
                                    <PriceRange>
                                        <PriceTitle>Price</PriceTitle>: ₦{(sliderValue[0] * 1000)/2} - ₦{(sliderValue[1] * 1000) / 2}
                                    </PriceRange>
                                    <FilterButton onClick={handleFilteredProductGeneration}>Filter</FilterButton>
                                </FilterPriceContainer>
                            </RangeContainer>
                        </PriceRangeContainer>
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
                                <FilterSelect name="sort" onChange={handleChange}>
                                    <FilterOption value="newest">Sort by latest</FilterOption>
                                    <FilterOption value="asc">Sort by price: low to high</FilterOption>
                                    <FilterOption value="desc">Sort by price: high to low</FilterOption>
                                </FilterSelect>
                            </FilterContainer>                     
                        </FilterProductsContainer>
                        <Products>
                            <PaginationContainer loader={isFetching}>
                                {
                                    isFetching ?
                                    (<CircularProgress size="8rem" />)
                                    :
                                    (products.length === 0)?
                                    <NoProductsError>
                                        No products to display
                                    </NoProductsError>
                                    :
                                    (<Pagination 
                                        data={productTag? mergeAndFilterProducts(products)[1] : mergeAndFilterProducts(products)[0]}
                                        pageType={productTag? "productTagPage" : "productsPage"}
                                        RenderComponent={Product}
                                        pageLimit={3}
                                        dataLimit={4}
                                        view={currView}
                                    />)
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