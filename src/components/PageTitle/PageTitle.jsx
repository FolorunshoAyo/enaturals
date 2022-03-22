import React from "react";
import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
import { splitLink, splitAndSpace  } from "../../usefulFunc";

const Wrapper = styled.div`
  height: 300px;
  position: relative;
  background-image: url(../enaturals/enaturals13.jpg);
  background-size: cover;
  background-position: center;
`;

const Ellipses = styled.span`
  font-family: Lato, sans-srif;

  &:after{
    content: "|";
    margin: 0px 13px;
  }
`;

const TitleContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: #28272e;
  width: 80%;
`;

const Title = styled.h1`
  font-size: 4rem;
  text-transform: uppercase;
  font-weight: 300;
  padding: 2rem 0;
`;

const Location = styled.div`
  font-size: 1.5rem;
  font-family: Lato, sans-serif;
`;

const PaginationItem = styled.span`
  text-transform: capitalize;
  color: #28272e;
  font-family: Lato, sans-serif;
`;

const PageTitle = ({ title, pageLocation, params}) => {
  const { pathname } = useLocation();

  const separateIndividualLinks = (pageLocation, pagePath) => {
    let result;
    let links = splitLink(pageLocation, " | ");

    switch (pagePath) {
      case "/shop":
        result = (
          <>
            <Link to="/" className="paginationLink">
              {links[0]}
            </Link>
            {links[1]}
          </>
        );
        break;
      case "/aboutus":
        result = (
          <>
            <Link to="/" className="paginationLink">
              {links[0]}
            </Link>
            {links[1]}
          </>
        );
        break;
      case "/blog":
        result = (
          <>
            <Link to="/" className="paginationLink">
              {links[0]}
            </Link>
            {links[1]}
          </>
        );
        break;
      case "/gallery":
        result = (
          <>
            <Link to="/" className="paginationLink">
              {links[0]}
            </Link>
            {links[1]}
          </>
        );
        break;
      case "/cart":
        result = (
          <>
            <Link to="/" className="paginationLink">
              {links[0]}
            </Link>
            <Link to="/shop" className="paginationLink">
              {links[1]}
            </Link>
            {links[0]}
          </>
        );
        case `/product/${params}`:
          const product = splitAndSpace(links[3], "-");
            result = (
                <>
                  <Link to="/" className="paginationLink">
                    {links[0]}
                  </Link>
                  <Link to="/shop" className="paginationLink">
                    {links[1]}
                  </Link>
                  <Ellipses>
                    {links[2]}
                  </Ellipses>
                  <PaginationItem>
                    {product}
                  </PaginationItem>
                </>
            ); 
        break;
        case `/blog/${params}`:
          const title = splitAndSpace(links[3], "-");

          result = (
            <>
              <Link to="/" className="paginationLink">
                {links[0]}
              </Link>
              <Link to="/blog" className="paginationLink">
                {links[1]}
              </Link>
              <Ellipses>
                {links[2]}
              </Ellipses>
              <PaginationItem>
                {title}
              </PaginationItem>
            </>
        ); 
        break;
        case `/aboutus/${params}`:
          const name = splitAndSpace(links[2], "-");
          result = (
            <>
              <Link to="/" className="paginationLink">
                {links[0]}
              </Link>
              <Link to="/aboutus" className="paginationLink">
                {links[1]}
              </Link>
              <PaginationItem>
                {name}
              </PaginationItem>
            </>
        ); 
        break;
        case `/checkout`:
          result = (
            <>
              <Link to="/" className="paginationLink">
                {links[0]}
              </Link>
              <Link to="/shop" className="paginationLink">
                {links[1]}
              </Link>
              <PaginationItem>
                {links[2]}
              </PaginationItem>
            </>
        ); 
        break;
        case `/product-tag/${params}`:
          result = (
            <>
              <Link to="/" className="paginationLink">
                {links[0]}
              </Link>
              <Link to="/shop" className="paginationLink">
                {links[1]}
              </Link>
              <PaginationItem>
                {links[2]}
              </PaginationItem>
            </>
        ); 
        break;
      default:
        console.log("This path does not exit");
        break;
    }

    return result;
  };
  return (
    <Wrapper>
      <TitleContainer>
        <Title>{title}</Title>
        <Location>{separateIndividualLinks(pageLocation, pathname)}</Location>
      </TitleContainer>
    </Wrapper>
  );
};

export default PageTitle;
