import React, {useState} from "react";
import styled from "styled-components";
import { Comment, Close } from "@mui/icons-material";
import { smallPhone, res480 } from "../../responsive";
import { formatDate } from "../../usefulFunc";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import { notLoggedIn } from "../../redux/login-register-modalRedux";
import { userRequest } from "../../requestMethod";
import toast from "react-hot-toast";

const CommentContainer = styled.div`
  display: ${props => props.status !== "published"? "none" : "flex"};

  &:not(:last-child){
    margin-bottom: 20px
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
  display: ${props => props.display === "active"? "block" : "none"};
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

const ReplyInputContainer = styled.div`
  flex: 0 0 45%;
  display: flex;
  flex-direction: column;
`;

const ReplyInput = styled.input`
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

const ReplyTextAreaContainer = styled.div`
  display: flex;
  flex-direction: column;
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

const Error = styled.p`
  padding: 0 1.5rem;
  margin-bottom: 1rem;
  font-family: Lato, sans-serif;
  font-size: 1.5rem;
  color: red;
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
    const user = useSelector(state => state.user.currentUser);
    const [loading, setLoading] = useState(false);
    const [showReplyForm, setShowReplyForm] = useState(false);
    const dispatch = useDispatch();

    const formSchema = Yup.object().shape({
      name: Yup.string()
      .required("The name can't be empty"),
      email: Yup.string()
      .required("Empty email address")
      .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/, "E-mail address is invalid"),
      reply: Yup.string()
      .required("The message text can't be empty"),
      approve: Yup.bool().oneOf([true], "Aggree with the terms above")
    });
  
    const formOptions = {
       defaultValues: {
        name: (user === null)? "" : `${user.lastname} ${user.firstname}`,
        email:  (user === null)? "" : user.email
      }, 
      resolver: yupResolver(formSchema) 
    };

    const {register, handleSubmit, reset, formState: { errors }} = useForm(formOptions);

    const handleReplyClick = (e) => {
        if(e.target.innerHTML === "Reply"){
          setShowReplyForm(true);
        }else{
          setShowReplyForm(false);
        }
    };

    const onSubmit = (data) => {
      if(user === null){
        dispatch(notLoggedIn());
        return;
      }else{
        const postReply = async () => {
          try{
            setLoading(true);
            await userRequest.post(`/reply/${commentID}`, data);
            toast.success("Thanks for your reply!! Awaiting approval.");
            setLoading(false);
            reset();
          }catch(error){
            toast.error("Unable to post reply (501)");
          }
        };
  
        postReply();
      }
    };
    
    return (
        <>
            <CommentContainer status={status}>
                <CommenterImgContainer>
                    <CommenterImg src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" />
                </CommenterImgContainer>
                <CommentDetails>
                    <CommentInformation>
                    <CommentAuthor>{name}</CommentAuthor>
                        <CommentDate> 
                        <Comment style={{verticalAlign: "middle", fontSize: 15, marginRight: "5px", color: "#b8a398"}} />
                            {formatDate(createdAt)}
                        </CommentDate>
                    </CommentInformation>
                    <UserComment>
                        {comment} 
                    </UserComment>
                    <ReplyButton onClick={handleReplyClick}>Reply</ReplyButton>
                </CommentDetails>
            </CommentContainer>
            <ReplyFormWrap display={(showReplyForm === true)? "active": "non-active"}>
                <ReplyForm onSubmit={handleSubmit(onSubmit)}>
                    <ReplyTitle>
                        Reply to {name}
                        <CloseIconContainer onClick={handleReplyClick}>
                            <Close style={{fontSize: 25}}/>
                        </CloseIconContainer>
                    </ReplyTitle>
                    <ReplyContainer>
                        <ReplyInputGroup>
                            <ReplyInputContainer>
                              <ReplyInput {...register("name")} type="text" placeholder="Your Name *"/>
                              {errors.name && <Error>{errors.name.message}</Error>}
                            </ReplyInputContainer>
                            <ReplyInputContainer>
                              <ReplyInput {...register("email")} type="email" placeholder="Your Email *" />
                              {errors.email && <Error>{errors.email.message}</Error>}
                            </ReplyInputContainer>
                        </ReplyInputGroup>
                        <ReplyTextAreaContainer>
                          <ReplyTextArea {...register("reply")} placeholder="Your comment *"></ReplyTextArea>
                          {errors.reply && <Error>{errors.reply.message}</Error>}
                        </ReplyTextAreaContainer>
                        <CheckBoxLabel htmlFor="comment-form-checkbox">
                            <CheckBox {...register("approve")} type="checkbox" id="coment-form-checkbox"/>
                            By using this form you agree with the storage and handling of your data by this website.
                        </CheckBoxLabel>
                        {errors.approve && <Error>{errors.approve.message}</Error>}
                        <CommentBtnContainer>
                            <CommentBtn type="submit" disabled={loading}>Leave a reply</CommentBtn>
                        </CommentBtnContainer>
                    </ReplyContainer>
                </ReplyForm>
            </ReplyFormWrap>
        </>
    );
};

export default BlogComment;