import React from "react";
import styled from "styled-components";
import { ChatBubbleOutline } from "@mui/icons-material";

const CommentItem = styled.li`
  display: flex;
  height: 50px;
  margin-bottom: 38px;
`;

const CommentInfo = styled.div`
  display: flex;
  flex-direction: column;
  font-family: Lato, sans-serif;
  font-size: 13px;
`;

const Commenter = styled.span`
  margin-bottom: 10px;
  color: #4b5354;
`;

const CommentedIn = styled.span`
  color: #7E8485;
`;


const RecentComment = ({commentID, name, title}) => {
    console.log(commentID);
    return (
        <CommentItem>
            <ChatBubbleOutline style={{fontSize: 25, color: "#b8a398", marginRight: "10px", alignSelf: "flex-start"}}/>
            <CommentInfo>
                <Commenter>{name}</Commenter> on
                <CommentedIn>
                    {title}
                </CommentedIn>
            </CommentInfo>
        </CommentItem>
    );
}


export default RecentComment;