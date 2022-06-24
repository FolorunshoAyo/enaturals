import React, { useState, useEffect } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import { publicRequest } from "../../requestMethod";
import BlogReplies from "../BlogReplies/BlogReplies";
import BlogComment from "./BlogComment";

const Wrapper = styled.div`
    &:not(:last-child){
        margin-bottom: 20px;
    }
`;

const Comments = styled.div`
    font-family: Lato, sans-serif;
    font-size: 2rem;
    display: ${props => props.empty? "flex" : "block"};
    justify-content: center;
`;

const BlogComments = ({postID}) => {
    const [blogComments, setBlogComments] = useState([]);

    useEffect(() => {
        const getComments = async () => {
            try{
                const res = await publicRequest.get(`/comment/${postID}`);
                const filteredComments = res.data.filter(comment => comment.status !== "pending");
                setBlogComments(filteredComments);
            }catch(error){
                toast.error("Unable to get comments (501)");
            }
        };

        getComments();
    }, [postID]);

    return (
        <Comments empty={blogComments.length === 0? true : false}>
            {
                (blogComments.length === 0)?
                "No comments yet"
                :
                blogComments.map(comment => (
                    <Wrapper key={comment._id}>
                        <BlogComment
                            commentID={comment._id}
                            name={comment.name}
                            comment={comment.comment}
                            status={comment.status}
                            createdAt={comment.createdAt}
                        />
                        <BlogReplies 
                        commentID={comment._id}
                        />
                    </Wrapper>
                ))
            }
        </Comments>
    );
};



export default BlogComments;