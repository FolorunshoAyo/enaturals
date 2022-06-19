import React, { useState } from "react";
import styled from "styled-components";
import RecentComments from "../RecentComments/RecentComments";
import RecentPosts from "../RecentPosts/RecentPosts";
import { Search } from "@mui/icons-material";
import { res700, res1023 } from "../../responsive"; 
import { useEffect } from "react";
import { publicRequest } from "../../requestMethod";
import toast from "react-hot-toast";

const Sidebar = styled.div`
  flex: 1;

  ${res1023({display: "flex", flexFlow: "row wrap", justifyContent: "space-between"})}
  ${res700({flexFlow: "column nowrap", justifyContent: "flex-start"})}
`;


const SearchWidget = styled.aside`
  background-color: #b8a398;
  padding-bottom: 4.5rem;

  ${res1023({flex: "0 0 48%", alignSelf: "flex-start"})}
  ${res700({flex: "initial", marginBottom: "20px", alignSelf: "initial"})}
`;

const SearchWidgetTitle = styled.h3`
  color: #fff;
  font-size: 2rem;
  font-weight: 300;
  padding: 65px 39px 39px;
  text-transform: uppercase;
`;

const SearchBtn = styled.button`
  flex: 0 0 20%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  color: #fff;
  transition: all .5s ease;
`;

const SearchInputForm = styled.form`
  display: flex;
  width: 80%;
  margin: 0 auto;
  border-bottom: 2px solid #f4f5f5;

  &:hover ${SearchBtn}{
    color: #acbfa3;
  }
`;

const SearchInput = styled.input`
  font-family: Lato, sans-serif;
  flex: 0 0 80%;
  font-size: 1.5rem;
  padding: 8px 10px 10px 2px;
  border: none;
  background-color: transparent;

  &:focus{
    outline: none;
  }
`;

const Widget = styled.div`
  background-color: #f2eeec;
  margin-top: 2.5rem;
  padding-bottom: 4.5rem;

  ${res1023({flex: "0 0 48%", marginTop: "0", marginBottom: "20px", alignSelf: "flex-start"})}
  ${res700({flex: "initial", marginBottom: "20px", alignSelf: "initial"})}
`;

const WidgetTitle = styled.h5`
  padding: 39px;
  background-color: #acbfa3;
  margin-bottom: 4rem; 
  color: #fff;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 300;
`;


const Categories = styled.ul`
  width: 80%;
  margin: 0 auto;
  list-style-type: none;
`;

const CategoryItem = styled.li`
  color: #4b5354;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 400;
  font-family: Lato,sans-serif;

  &::before{
    content: ">";
    margin-right: 12px;
  }

  &:not(:last-child){
    margin-bottom: 13px;
  }
`;


const BlogSidebar = () => {
  const [categoryNumbers, setCategoryNumbers] = useState("");

  useEffect(() => {
    const getCategoryNumbers = async () => {
      try{
        const res = await publicRequest.get("/blogs/countCategories");
        setCategoryNumbers(res.data);
      }catch(error){
        toast.error("Unable to get category numbers");
      }
    };

    getCategoryNumbers();
  }, []);

  return (
        <Sidebar>
          {/* Search Widget */}
          <SearchWidget>
            <SearchWidgetTitle>Search</SearchWidgetTitle>
            <SearchInputForm>
              <SearchInput type="text" placeholder="Search ..."/>
              <SearchBtn>
                <Search style={{fontSize: 20}}/>
              </SearchBtn>
            </SearchInputForm>
          </SearchWidget>

          <Widget>
              {/* Category Widget */}
            <WidgetTitle>Categories</WidgetTitle>
            <Categories>
              <CategoryItem>Natural Soap ({categoryNumbers["natural soap"] === undefined? 0 : categoryNumbers["natural soap"]})</CategoryItem>
              <CategoryItem>Oils ({categoryNumbers["oils"] === undefined? 0 : categoryNumbers["oils"]})</CategoryItem>
              <CategoryItem>Research ({categoryNumbers["research"] === undefined? 0 : categoryNumbers["research"]})</CategoryItem>
              <CategoryItem>Skin Care ({categoryNumbers["skin care"] === undefined? 0 : categoryNumbers["skin care"]})</CategoryItem>
              <CategoryItem>Soap Making ({categoryNumbers["soap making"] === undefined? 0 : categoryNumbers["soap making"]})</CategoryItem>
              <CategoryItem>Spa Procedures ({categoryNumbers["spa procedures"] === undefined? 0 : categoryNumbers["spa procedures"]})</CategoryItem>
            </Categories>
          </Widget>

          <Widget>
            {/* Recent Post Widget */}
            <WidgetTitle>Recent Posts</WidgetTitle>
              
            {/* RECENT POST COMPONENT HERE*/}
            <RecentPosts />
          </Widget>

          <Widget>
            <WidgetTitle>Comments</WidgetTitle>
            {/* RECENT COMMENTS HERE*/}
            <RecentComments />
          </Widget>
      </Sidebar>
  );
};



export default BlogSidebar;