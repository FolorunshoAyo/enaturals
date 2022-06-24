import React from "react";
import styled from "styled-components";
import {smallPhone, res480} from "../../responsive";
import { formatDate } from "../../usefulFunc";
import { Comment } from "@mui/icons-material";

const Replies = styled.div` 
    display: ${props => props.status !== "published"? "none" : "block"};
    margin-left: 30px;
`;

const CommentContainer = styled.div`
  display: flex;

  &:not(:last-child){
    margin-bottom: 40px
  }
`;

const UserComment = styled.p`
  color: #7E8485;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: Lato, sans-serif;
`;

const ReplierImgContainer = styled.div`
  flex: 0 0 50px;
  height: 50px;
  align-self: flex-start;
  margin-right: 20px;
`;

const ReplyImg = styled.img`
  width: 100%;
  height: 100%;

  ${smallPhone({width: "78px", height: "78px"})}
`;

const ReplyDetails = styled.div`
  flex: 1;
`;

const ReplyInformation = styled.div`
  margin-bottom: 5px;
  color: #ABB0B2;
  font-weight: 300;
  font-style: italic;
`;

const ReplyAuthor = styled.h6`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 300;
  font-family: Lato, sans-serif;

  ${res480({display: "block", marginBottom: "5px"})}
`;

const ReplyDate = styled.div`
  display: inline-block;
  font-size: 1.5rem;
  font-family: Lato, sans-serif;

  &::before{
    content: "|";
    font-style: normal;
    margin: 0 40px;

    ${res480({display: "none"})}
  }

  ${res480({display: "block"})}
`;


const BlogReply = ({name, reply, status, createdAt}) => {
    return (
        <Replies status={status}>
            <CommentContainer>
                <ReplierImgContainer>
                    <ReplyImg src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                </ReplierImgContainer>
                <ReplyDetails>
                    <ReplyInformation>
                        <ReplyAuthor>{name}</ReplyAuthor>
                        <ReplyDate> 
                        <Comment style={{verticalAlign: "middle", fontSize: 15, marginRight: "5px", color: "#b8a398"}} />
                           {formatDate(createdAt)}
                        </ReplyDate>
                    </ReplyInformation>
                    <UserComment>
                        {reply} 
                    </UserComment>
                </ReplyDetails>
            </CommentContainer>
      </Replies>
    );
};


export default BlogReply;