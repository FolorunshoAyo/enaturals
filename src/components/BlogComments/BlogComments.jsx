import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import { publicRequest } from "../../requestMethod";
import BlogComment from "./BlogComment";

const Comments = styled.div`
    font-family: Lato, sans-serif;
    font-size: 2rem;
    display: ${props => props.empty? "flex" : "block"};
    justify-content: center;
`;

const BlogComments = ({postID}) => {
    const [comments, setComments] = useState([]);

    useEffect(() => {
        const getComments = async () => {
            try{
                const res = await publicRequest.get(`/comment/${postID}`);
                setComments(res.data);
            }catch(error){
                toast.error("Unable to get comments (501)");
            }
        };

        getComments();
    }, [postID]);

    return (
        <Comments empty={comments.length === 0? true : false}>
            {
                (comments.length === 0)?
                "No comments yet"
                :
                comments.map(comment => (
                    <BlogComment 
                    key={comment._id}
                    commentID={comment.id}
                    name={comment.name}
                    comment={comment.comment}
                    status={comment.status}
                    createdAt={comment.createdAt}
                    />
                ))
            }
        </Comments>
    );
};



export default BlogComments;