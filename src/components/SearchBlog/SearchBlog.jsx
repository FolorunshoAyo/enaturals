import React from "react";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import { publicRequest } from "../../requestMethod";
import SearchBlogResult from "./SearchBlogResult";
import { CircularProgress } from "@mui/material";
import {res1023, tabPort, res700, medPhone, bigDesktop} from "../../responsive";
import BlogSidebar from "../BlogSidebar/BlogSidebar";

const BlogContentWrapper = styled.section`
  padding: 5rem 0;
`;

const BlogContentContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;

  ${res1023({width: "70%", flexDirection: "column"})}
  ${tabPort({width: "90%"})}
  ${res700({width: "75%"})}
  ${medPhone({width: "90%"})}
  ${bigDesktop({width: "1440px"})}
`;

const FilteredBlogCategoryContainer = styled.article`
  flex: 2;
  margin-right: 40px;
  display: ${props => props.loading === "active"? "flex" : "block"};
  justify-content: center;

  ${res1023({flex: "initial", marginRight: "0px", marginBottom: "50px"})}
`;

const ProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

const NoBlogPost = styled.div`
    height: 300px;
    font-family: Lato, sans-serif;
    font-size: 2rem;
    text-align: center;
`;

const SearchBlog = ({searchQuery}) => {
    const [searchBlogResults, setSearchBlogResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getSearchResults = async () => {
            try{
                setLoading(true);
                const res = await publicRequest.get(`/blogs/search?q=${searchQuery}`);
                setSearchBlogResults(res.data);
                setLoading(false);
            }catch(error){
                toast.error("Unable to fetch blog search results (501)");
            }
        };

        getSearchResults();
    }, [searchQuery]);

    return (
        <BlogContentWrapper>
            <BlogContentContainer>
                <FilteredBlogCategoryContainer loading={loading? "active" : "not-active"}>
                    {
                        loading?
                        <ProgressWrapper>
                            <CircularProgress size="8rem" />
                        </ProgressWrapper>
                        :
                        (searchBlogResults.length === 0)?
                        <NoBlogPost>
                            No blog post matches query
                        </NoBlogPost>
                        :
                        searchBlogResults.map(searchBlogResult=> (
                            <SearchBlogResult
                            key={searchBlogResult._id} 
                            photo={searchBlogResult.photo}
                            title={searchBlogResult.title}
                            dateOfCreation={searchBlogResult.createdAt}
                            content={searchBlogResult.content}
                            />
                        ))
                    }
                </FilteredBlogCategoryContainer>
                {/* SIDEBAR COMPONENT HERE*/}
                <BlogSidebar />
            </BlogContentContainer>
        </BlogContentWrapper>
    );
};


export default SearchBlog;