import React, {useState} from "react";
import styled from "styled-components";
import { Comment, Close } from "@mui/icons-material";
import { smallPhone, res480 } from "../../responsive";

const CommentContainer = styled.div`
  display: ${props => props.status !== "published"? "none" : "flex"};

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

const CommenterImgContainer = styled.div`
  flex: 0 0 78px;
  height: 78px;
  align-self: flex-start;
  margin-right: 20px;
`;

const CommenterImg = styled.img`
  width: 100%;
  height: 100%;

  ${smallPhone({width: "78px", height: "78px"})}
`;

const CommentDetails = styled.div`
  flex: 1;
`;

const CommentInformation = styled.div`
  margin-bottom: 5px;
  color: #ABB0B2;
  font-weight: 300;
  font-style: italic;

  ${res480({display: "flex", flexDirection: "column", })}
`;

const CommentAuthor = styled.h6`
  display: inline-block;
  font-size: 1.5rem;
  font-weight: 300;
  font-family: Lato, sans-serif;

  ${res480({display: "block", marginBottom: "5px"})}
`;

const CommentDate = styled.div`
  display: inline-block;
  font-size: 1.5rem;
  font-family: Lato, sans-serif;

  &::before{
    content: "|";
    font-style: normal;
    margin: 0 40px;

    ${res480({display: "none"})}
  }

  ${smallPhone({display: "block"})}
`;

const ReplyFormWrap = styled.div`
  display: ${props => props.display? "block" : "none"};
  margin: 3rem 0;
`;

const ReplyForm = styled.form`
`;

const ReplyTitle = styled.h4`
  margin-bottom: 3rem;
  color: #4B5354;
  font-weight: 300;
  text-transform: uppercase;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.5rem;

  ${res480({fontSize: "2rem"})}
`;

const CloseIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all .3s;

  &:hover{
    color: #acbfa3;
  }
`;

const ReplyContainer = styled.div``;

const ReplyInputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;

  ${smallPhone({flexDirection: "column"})}
`;

const ReplyInput = styled.input`
  flex: 0 0 45%; 
  padding: 2rem 2.6rem;
  font-family: Lato, sans-serif;
  color: #4b5354;
  font-size: 1.5rem;
  border: none;
  border-bottom: 2px solid #bdc0c0;

  &:focus{
    outline: none;
    border-color: #b8a398;
  }

  &:not(:last-child){
    ${smallPhone({marginBottom: "15px"})}
  }
`;

const ReplyTextArea = styled.textarea`
  height: 200px;
  font-family: Lato, sans-serif;
  color: #4b5354;
  font-size: 1.5rem;
  padding: 2rem 2.6rem;
  resize: none;
  border none;
  border-bottom: 2px solid #bdc0c0;
  width: 100%;
  margin-bottom: 30px;

  &:focus{
    outline: none;
    border-color: #b8a398;
  }
`;

const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  line-height: 1.4;
  color: #7E8485;
  font-family: Lato,sans-serif;
`;

const CheckBox = styled.input`
  margin-right: 10px;
`;

const CommentBtnContainer = styled.div`
  padding: 2rem 0;
  text-align: end;

  ${res480({textAlign: "left"})}
`;

const CommentBtn = styled.button`
  padding: 1.5rem 3rem;
  background-color: transparent;
  border: 2px solid #b8a398;
  text-transform: uppercase;
  font-size: 1.5rem; 
  cursor: pointer;
  color: #b8a398;
  transition: all .5s ease;

  ${res480({width: "100%"})}
  &:hover{
    background-color: #b8a398;
    color: #fff;
  }
`;

const ReplyButton = styled.button`
  border: none;
  background-color: transparent;
  text-transform: uppercase;
  font-size: 1.2rem;
  color: #4b5354;
  font-weight: 700;
  margin-top: 10px;
  cursor: pointer;
  transition: all .3s;

  &:focus{
    color: #b8a398;
  }
`;

const BlogComment = ({name, commentID, comment, status, createdAt}) => {
    const [showReplyForm, setShowReplyForm] = useState(false);

    const handleReplyClick = (e) => {
        if(e.target.innerHTML === "Reply"){
          setShowReplyForm(true);
        }else{
          setShowReplyForm(false);
        }
    };

    return (
        <>
            <CommentContainer id={commentID} status={status}>
                <CommenterImgContainer>
                    <CommenterImg src="../enaturals/enaturals5.jpg" />
                </CommenterImgContainer>
                <CommentDetails>
                    <CommentInformation>
                    <CommentAuthor>{name}</CommentAuthor>
                        <CommentDate> 
                        <Comment style={{verticalAlign: "middle", fontSize: 15, marginRight: "5px", color: "#b8a398"}} />
                            {new Date(createdAt)}
                        </CommentDate>
                    </CommentInformation>
                    <UserComment>
                        {comment} 
                    </UserComment>
                    <ReplyButton onClick={handleReplyClick}>Reply</ReplyButton>
                </CommentDetails>
            </CommentContainer>
            <ReplyFormWrap display={showReplyForm}>
                <ReplyForm>
                    <ReplyTitle>
                        Reply to {name}
                        <CloseIconContainer onClick={handleReplyClick}>
                            <Close style={{fontSize: 25}}/>
                        </CloseIconContainer>
                    </ReplyTitle>
                    <ReplyContainer>
                        <ReplyInputGroup>
                            <ReplyInput type="text" placeholder="Your Name *"/>
                            <ReplyInput type="email" placeholder="Your Email *" />
                        </ReplyInputGroup>
                        <ReplyTextArea placeholder="Your comment *"></ReplyTextArea>
                        <CheckBoxLabel for="comment-form-checkbox">
                            <CheckBox type="checkbox" id="coment-form-checkbox"/>
                            By using this form you agree with the storage and handling of your data by this website.
                        </CheckBoxLabel>
                        <CommentBtnContainer>
                            <CommentBtn type="submit">Leave a comment</CommentBtn>
                        </CommentBtnContainer>
                    </ReplyContainer>
                </ReplyForm>
            </ReplyFormWrap>
        </>
    );
};

export default BlogComment;