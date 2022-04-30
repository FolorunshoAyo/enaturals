import React, { useState, useEffect } from "react";
import styled from "styled-components";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import { smallPhone, medPhone, res860 } from "../../responsive";
import { ContactSupportOutlined, DataArray } from "@mui/icons-material";
import { findMax, findMin } from "../../usefulFunc";

const Container = styled.div``;

const ProductsContainer = styled.div`
  display: ${(props) => (props.view === "list" ? "block" : "flex")};
  flex-flow: ${(props) => (props.view === "list" ? "none" : "row wrap")};
`;

const NoProductMessage = styled.h1`
  text-align: center;
  font-family: Lato, sans-serif;
  font-size: 3rem;
  font-weight: 300;
  margin: 100px 0;
`;

const PaginationNav = styled.div`
  display: flex;
  margin: 0 auto;
  width: 50%;
  justify-content: space-between;

  ${res860({ width: "60%" })}
  ${medPhone({ width: "70%" })}
    ${smallPhone({ width: "80%" })}
`;

const PrevBtn = styled.button`
  background: transparent;
  display: ${(props) => (props.display ? "none" : "block")};
  padding: 2rem;
  font-size: 1.3rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: grey;
  }
`;

const NextBtn = styled.button`
  background: transparent;
  display: ${(props) => (props.display ? "none" : "block")};
  padding: 2rem;
  font-size: 1.3rem;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: grey;
  }
`;

const PageNumbers = styled.button`
  background-color: ${(props) =>
    props.status === "active" ? "#ACBFA3" : "transparent"};
  color: ${(props) => (props.status === "active" ? "#fff" : "#000")};
  font-size: 1.5rem;
  padding: 2rem;
  border: none;
  cursor: pointer;
  transition: all 0.5s ease;

  &:hover {
    background-color: ${(props) =>
      props.status === "active" ? "#ACBFA3" : "#b8a398"};
    color: #fff;
    cursor: ${(props) => (props.status === "active" ? "default" : "pointer")};
  }
`;

const Pagination = ({ data, RenderComponent, pageLimit, dataLimit, view, pageType}) => {
  const [pages] = useState(Math.round(data.length / dataLimit));
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    window.scrollTo({ behaviour: "smooth", top: "0px" });
  }, [currentPage]);

  function goToNextPage() {
    setCurrentPage((page) => page + 1);
  }

  function goToPreviousPage() {
    setCurrentPage((page) => page - 1);
  }

  function changePage(event) {
    const pageNumber = Number(event.target.textContent);
    setCurrentPage(pageNumber);
  }

  const getPaginatedData = () => {
    const startIndex = currentPage * dataLimit - dataLimit;
    const endIndex = startIndex + dataLimit;

    if(data.length === 0){
      return data;
    }else{
      return data.slice(startIndex, endIndex);
    }
  };

  const getPaginatedGroup = () => {
    let start = Math.floor((currentPage - 1) / pageLimit) * pageLimit;
    return new Array(pageLimit).fill().map((_, idx) => start + idx + 1);
  };

  return (
    <Container>
      <ProductsContainer view={view}>
        {
          (getPaginatedData().length !== 0) ?

          getPaginatedData().map((groupOfSimilarProducts) => {
            if (groupOfSimilarProducts.length === 1) {
              const product = groupOfSimilarProducts[0];

              return (
                <RenderComponent
                  key={product._id}
                  productImage={product.img}
                  price={`₦${product.price}`}
                  description={product.desc}
                  productName={product.productName}
                  size={product.size}
                  productTags={product.categories}
                  view={view}
                />
              );
            } else {
              const productSizes = groupOfSimilarProducts.map(
                (product) => product.size
              );
              const productPrices = groupOfSimilarProducts.map(
                (product) => product.price
              );
              const similarProducts = groupOfSimilarProducts;

              const maxAndMinPrice = [
                findMin(productPrices),
                findMax(productPrices),
              ];

              return (
                <RenderComponent
                  key={similarProducts[0]._id}
                  productImage={similarProducts[0].img}
                  price={`₦${maxAndMinPrice[0]} - ₦${maxAndMinPrice[1]}`}
                  description={similarProducts[0].desc}
                  productName={similarProducts[0].productName}
                  size={productSizes}
                  productTags={similarProducts[0].categories}
                  view={view}
                />
              );
            }
          }) 
          :        
          (pageType === "productTagPage") ? <NoProductMessage> No product matches your selection</NoProductMessage> : <NoProductMessage> No Products Available </NoProductMessage>
        }
      </ProductsContainer>
      <PaginationNav>
        <PrevBtn
          onClick={goToPreviousPage}
          display={currentPage === 1 ? true : false}
        >
          <NavigateBeforeIcon style={{ fontSize: 20 }} />
        </PrevBtn>
        {getPaginatedGroup().map((item, index) => (
          <PageNumbers
            key={index}
            onClick={changePage}
            status={`${currentPage === item ? "active" : null}`}
          >
            {item}
          </PageNumbers>
        ))}
        <NextBtn
          onClick={goToNextPage}
          display={currentPage === pages ? true : false}
        >
          <NavigateNextIcon style={{ fontSize: 20 }} />
        </NextBtn>
      </PaginationNav>
    </Container>
  );
};

export default Pagination;
