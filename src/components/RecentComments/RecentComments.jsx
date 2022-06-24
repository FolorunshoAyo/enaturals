import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import { publicRequest } from "../../requestMethod";
import RecentComment from "./RecentComment";


const NoRecentCommentsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 2rem;
    font-family: Lato, sans-serif;
    color: #7E8485;
`;

const RecentCommentsList = styled.ul`
  list-style-type: none;
  width: 80%;
  margin: 0 auto;
`;

const RecentComments = () => {
    const [recentComments, setRecentComments] = useState([]);

    useEffect(() => {
        const getRecentComments = async () => {
            try{
                const res = await publicRequest.get("/comment/new/comments");
                const filteredRecentComments = res.data.filter(recentComment => recentComment.status !== "pending");
                setRecentComments(filteredRecentComments);
            }catch(error){
                toast.error("Unable to get recent comments");
            }
        };

        getRecentComments();
    }, []);

    return (
        <>
        {
            (recentComments.length === 0)? 
            <NoRecentCommentsContainer>
                No Recent Comments
            </NoRecentCommentsContainer>
            :
            <RecentCommentsList>
                {
                    recentComments.map(recentComment => (
                        <RecentComment 
                        key={recentComment._id}
                        commentID={recentComment._id}
                        name={recentComment.name}
                        postTitle={recentComment.postTitle}
                        />
                    ))
                }
            </RecentCommentsList>
        }
        </>
    )
};


export default RecentComments;