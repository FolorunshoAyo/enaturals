import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore';
import {smallPhone, medPhone ,res860} from '../../responsive';

const Container = styled.div`
`;

const ProductsContainer = styled.div`
    display: ${props => props.view === "list"? "block" : "flex"};
    flex-flow: ${props => props.view === "list"? "none" : "row wrap"};
`;

const PaginationNav = styled.div`
    display: flex;
    margin: 0 auto;
    width: 50%;
    justify-content: space-between;

    ${res860({width: "60%"})}
    ${medPhone({width: "70%"})}
    ${smallPhone({width: "80%"})}
`;

const PrevBtn = styled.button`
    background: transparent;
    display: ${(props) => props.display? 'none' : 'block'};
    padding: 2rem;
    font-size: 1.3rem;
    border: none;
    cursor: pointer;

    &:hover{
        background-color: grey;
    }
`;

const NextBtn = styled.button`
    background: transparent;
    display: ${(props) => props.display? 'none' : 'block'};
    padding: 2rem;
    font-size: 1.3rem;
    border: none;
    cursor: pointer;

    &:hover{
        background-color: grey;
    }
`;

const PageNumbers = styled.button`
    background-color: ${props => props.status === "active"? "#ACBFA3" : "transparent"};
    color: ${props => props.status === "active"? "#fff" : "#000"};
    font-size: 1.5rem;
    padding: 2rem;
    border: none;
    cursor: pointer;
    transition: all .5s ease;

    &:hover{
        background-color: ${props => props.status === "active"? "#ACBFA3" : "#b8a398"};
        color: #fff;
        cursor: ${props => props.status === "active"? "default" : "pointer"}
    }
`;

const Pagination = ({data, RenderComponent, pageLimit, dataLimit, view})=>{
    const [pages] = useState(Math.round(data.length / dataLimit));
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        window.scrollTo({ behaviour: "smooth", top: '0px' });
    }, [currentPage]);

    function goToNextPage(){
        setCurrentPage((page) => page + 1);
    }

    function goToPreviousPage(){
        setCurrentPage((page) => page - 1);
    }

    function changePage(event){
        const pageNumber = Number(event.target.textContent);
        setCurrentPage(pageNumber);
    }

    const getPaginatedData = () => {
        const startIndex = currentPage * dataLimit - dataLimit;
        const endIndex = startIndex + dataLimit;

        return data.slice(startIndex, endIndex);
    }

    const getPaginatedGroup = () => {
        let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
        return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
    }

    return (
        <Container>
            <ProductsContainer view={view}>
                {getPaginatedData().map((product) => (
                    <RenderComponent 
                    key={product.id}
                    productImage={product.img}
                    price={product.priceRange}
                    description={product.description}
                    productName={product.productName}
                    view={view}
                    />
                ))}
            </ProductsContainer>
            <PaginationNav>
                <PrevBtn onClick={goToPreviousPage} display={currentPage === 1 ? true : false}>
                    <NavigateBeforeIcon style={{fontSize: 20}}/>
                </PrevBtn>
                {getPaginatedGroup().map((item, index) => (
                    <PageNumbers
                    key={index}
                    onClick={changePage}
                    status={`${currentPage === item ? 'active' : null}`}
                    >
                        {item}
                    </PageNumbers>    
                ))}
                <NextBtn onClick={goToNextPage} display={currentPage === pages ? true : false}>
                    <NavigateNextIcon style={{fontSize: 20}}/>
                </NextBtn>
            </PaginationNav>
        </Container>
    );
};


export default Pagination;