import React, { useEffect } from "react";
import toast from "react-hot-toast";
import styled from "styled-components";
import { publicRequest } from "../../requestMethod";
import BlogReply from "./BlogReply";

const BlogReplies = ({commentID}) => {
    const [replies, setReplies] = useState([]);

    useEffect(() => {
        const getReplies = async () => {
            try{
                const res = publicRequest.get(`/reply/${commentID}`);
                setReplies(res.data);   
            }catch(error){
                toast.error("Unable to get replies");
            }
        };

        getReplies();
    }, [commentID]);
    return (
        <>
        {
            replies.map(reply => {
                <BlogReply 
                key={reply._id}
                name={reply.name}
                reply={reply.reply}
                status={reply.status}
                createdAt={reply.createdAt}
                />
            })
        }
        </>
    );
};



export default BlogReplies;