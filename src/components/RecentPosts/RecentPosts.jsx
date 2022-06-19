import React, { useState } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import { publicRequest } from "../../requestMethod";
import RecentPost from "./RecentPost";

const RecentPostContainer = styled.div`
    padding: 10px 0;
`;

const NoRecentPostsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-family: Lato, sans-serif;
    color: #7E8485;
`;

const RecentPosts = ({blogID}) => {
    const [recentPosts, setRecentPosts] = useState([]);

    useEffect(() => {
        const getRecentPosts = async () => {
            try{
                const res = await publicRequest.get(`/blogs/newBlogPosts`);
                setRecentPosts(res.data);
            }catch(erorr){
                toast.error("Unable to get recent posts");
            }
        };

        getRecentPosts();
    }, [blogID]);

    return (
        <RecentPostContainer>
            {
                (recentPosts.length === 0)?
                <NoRecentPostsContainer>
                    There are no recent posts
                </NoRecentPostsContainer>
                :
                recentPosts.map(recentPost => (
                    <RecentPost 
                        key={recentPost._id}
                        photo={recentPost.photo}
                        title={recentPost.title}
                        author={recentPost.authorName}
                        createdAt={recentPost.createdAt}
                    />
                )) 
            }
        </RecentPostContainer>
    );
};


export default RecentPosts;