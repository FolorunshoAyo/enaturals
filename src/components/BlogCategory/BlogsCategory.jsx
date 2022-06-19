import React, {useState} from "react";
import styled from "styled-components";
import BlogSidebar from "../BlogSidebar/BlogSidebar";
import {res1023, tabPort, res700, medPhone, bigDesktop} from "../../responsive";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import BlogCategory from "./BlogCategory";
import { publicRequest } from "../../requestMethod";
import { convertToDefaultCategory } from "../../usefulFunc";
import toast from "react-hot-toast";

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

const NoBlogPost = styled.div`
    height: 300px;
    font-family: Lato, sans-serif;
    font-size: 2rem;
    text-align: center;
`;

const BlogsCategory = ({category}) => {
    const [allBlogsInCategory, setAllBlogsInCategory] = useState([]);
    const [loading, setLoading] = useState(true);

    const modCategory = convertToDefaultCategory(category);

    useEffect(() => {
        const getProductBasedOnCategories = async () => {
            try{
                setLoading(true);
                const res = await publicRequest.get(`/blogs/category/${modCategory}`);
                setAllBlogsInCategory(res.data);
                setLoading(false);
            }catch(error){
                toast.error("Unable to get categorised blogs");
            }
        };

        getProductBasedOnCategories();
    }, []);

    return (
        <BlogContentWrapper>
            <BlogContentContainer>
                <FilteredBlogCategoryContainer>
                    {
                        loading?
                        <CircularProgress size="8rem" />
                        :
                        (allBlogsInCategory.length === 0)?
                        <NoBlogPost>
                            No blog post matches your selection
                        </NoBlogPost>
                        :
                        allBlogsInCategory.map(blogInCategory => (
                            <BlogCategory
                            key={blogInCategory._id} 
                            photo={blogInCategory.photo}
                            title={blogInCategory.title}
                            dateOfCreation={blogInCategory.createdAt}
                            content={blogInCategory.content}
                            />
                        ))
                    }
                </FilteredBlogCategoryContainer>
                {/* SIDEBAR HERE */}
                <BlogSidebar />
            </BlogContentContainer>
        </BlogContentWrapper>
    );
};


export default BlogsCategory;