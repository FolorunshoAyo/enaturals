import React, { useState } from "react";
import styled from "styled-components";
import RecentComments from "../RecentComments/RecentComments";
import RecentPosts from "../RecentPosts/RecentPosts";
import { Search } from "@mui/icons-material";
import { res700, res1023 } from "../../responsive"; 
import { useEffect } from "react";
import { publicRequest } from "../../requestMethod";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";

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
  color: #fff;

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
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

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

  const handleSearchInput = (event) => {
    console.log(event.target.value);
    setSearchQuery(event.target.value);
  };

  const searchBlogs = (event) => {
    event.preventDefault();
    navigate(`/blog/search?q=${searchQuery}`);
  };

  return (
        <Sidebar>
          {/* Search Widget */}
          <SearchWidget>
            <SearchWidgetTitle>Search</SearchWidgetTitle>
            <SearchInputForm>
              <SearchInput type="text" value={searchQuery} placeholder="Search ..." onChange={handleSearchInput}/>
              <SearchBtn onClick={searchBlogs}>
                <Search style={{fontSize: 20}}/>
              </SearchBtn>
            </SearchInputForm>
          </SearchWidget>

          <Widget>
              {/* Category Widget */}
            <WidgetTitle>Categories</WidgetTitle>
            <Categories>
              {
               categoryNumbers["natural soap"] !== undefined &&
                (<CategoryItem>
                    <Link to="/blog/category/natural-soap" className="blogCategoryLink">
                      Natural Soap ({categoryNumbers["natural soap"] === undefined? 0 : categoryNumbers["natural soap"]})
                    </Link>
                  </CategoryItem>
                )
              }
              {
                categoryNumbers["oils"] !== undefined &&
              (<CategoryItem>
                <Link to="/blog/category/oils" className="blogCategoryLink">
                  Oils ({categoryNumbers["oils"] === undefined? 0 : categoryNumbers["oils"]})
                </Link>
              </CategoryItem>)
              }
              {
                categoryNumbers["research"] !== undefined && 
              (<CategoryItem>
                <Link to="/blog/category/research" className="blogCategoryLink">
                  Research ({categoryNumbers["research"] === undefined? 0 : categoryNumbers["research"]})
                </Link>
              </CategoryItem>)
              }
              {
                categoryNumbers["skin care"] !== undefined &&
              (<CategoryItem>
                <Link to="/blog/category/skin-care" className="blogCategoryLink">
                  Skin Care ({categoryNumbers["skin care"] === undefined? 0 : categoryNumbers["skin care"]})
                </Link>
              </CategoryItem>)
              }
              {
                categoryNumbers["soap making"] !== undefined &&
              (<CategoryItem>
                <Link to="/blog/category/soap-making" className="blogCategoryLink">
                  Soap Making ({categoryNumbers["soap making"] === undefined? 0 : categoryNumbers["soap making"]})
                </Link>
              </CategoryItem>)
              }
              {
                categoryNumbers["spa procedures"] !== undefined &&
              (<CategoryItem>
                <Link to="/blog/category/spa-procedures" className="blogCategoryLink">
                  Spa Procedures ({categoryNumbers["spa procedures"] === undefined? 0 : categoryNumbers["spa procedures"]})
                </Link>
              </CategoryItem>)
              }
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