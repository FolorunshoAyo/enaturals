import React, { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import { publicRequest } from "../../requestMethod";
import RelatedBlogPost from "./RelatedBlogPost";
import { res700 } from "../../responsive";

const RelatedBlogPostsContainer = styled.div`
  display: flex;
  justify-content: ${props => props.empty? "center" : "space-between"};
  font-size: ${props => props.empty? "2rem" : "initial"};
  font-family: Lato, sans-serif;
  ${res700({flexDirection: "column", justifyContent: "flex-start"})}
`;

const RelatedBlogPosts = ({blogTitle, categories}) => {
    const [relatedBlogPosts, setRelatedBlogPosts] = useState([]);

    const formCategoryTags = categories => {
        let queries = "";

        categories.forEach((category, i) => {
            if(categories.length === (i + 1)){
                queries += `tag${i+1}=${category}`    
            }else{
                queries += `tag${i+1}=${category}&`;
            }
        });
        
        return queries;
    };

    useEffect(() => {
        const getRecentBlogPosts = async () => {
            try{
                const res = await publicRequest.get(`/blogs/relatedPosts/${blogTitle}?${formCategoryTags(categories)}`);
                setRelatedBlogPosts(res.data);
            }catch(erorr){
                toast.error("Unable to fetch related blog posts");
            }
        };

        getRecentBlogPosts();
    }, []);

    return (
        <RelatedBlogPostsContainer empty={relatedBlogPosts.length === 0? true : false}>
            {
                (relatedBlogPosts.length === 0)?
                "No Related Blogs to display"
                :
                relatedBlogPosts.map(relatedBlogPost => (
                    <RelatedBlogPost 
                    key={relatedBlogPost._id}
                    photo={relatedBlogPost.photo}
                    title={relatedBlogPost.title}
                    createdAt={relatedBlogPost.createdAt}
                    />
                ))
            }
        </RelatedBlogPostsContainer>
    );
}


export default RelatedBlogPosts;