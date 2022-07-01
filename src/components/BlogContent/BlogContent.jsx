import React, {useEffect, useState} from "react";
import styled from "styled-components";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Twitter from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";
import { WhatsappOutlined, Instagram } from "@mui/icons-material";
import {res480, medPhone, res700,tabPort, res1023, bigDesktop, smallPhone} from '../../responsive';
// import { posts, allComments, allReplies } from "../../data";
import toast from "react-hot-toast";
import { publicRequest, userRequest } from "../../requestMethod";
import { CircularProgress } from "@mui/material";
import BlogSidebar from "../BlogSidebar/BlogSidebar";
import BlogComments from "../BlogComments/BlogComments";
import RelatedBlogPosts from "../RelatedBlogPosts/RelatedBlogPosts";
import { convertToDefaultBlogTitle, formatDate } from "../../usefulFunc";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup';
import { notLoggedIn } from "../../redux/login-register-modalRedux";

const BlogContentWrapper = styled.section`
  padding: 5rem 0;
`;

const BlogContentContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;

  ${res1023({width: "70%", flexDirection: "column"})}
  ${tabPort({width: "90%"})}
  ${res700({width: "75%"})}
  ${medPhone({width: "90%"})}
  ${bigDesktop({width: "1440px"})}
`;

const BlogPostContent = styled.article`
  flex: 2;
  margin-right: 40px;
  justify-content: center;

  ${res1023({flex: "initial", marginRight: "0px", marginBottom: "50px"})}
`;

const ProgressWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 300px;
`;

// Height of BlogPost should be 1030px
const BlogPost = styled.div`
  
`;

const BlogPostAttachmentContainer = styled.div`
  width: 100%;
  height: 400px;

  ${res1023({height: "450px"})}
  ${res700({height: "300px"})}
`;

const BlogPostImg = styled.img`
  width: 100%;
  height: 100%;
`;

const PostMeta = styled.div`
  margin: 4rem 0;
  color: #ABB0B2;
  font-size: 13px;
  font-weight: 300;

  ${res480({display: "flex", flexDirection: "column"})}
`;

const PostMetaCateg = styled.span`
  font-style: italic;
  font-family: Lato,sans-serif; 

  &::after{
    content: "|";
    font-style: normal;
    margin: 0 20px;
    ${res480({display: "none"})}
  }
`;

const PostMetaDate = styled.span`
  font-style: italic;
  font-family: Lato,sans-serif; 

  &::after{
    content: "|";
    font-style: normal;
    margin: 0 20px;
    ${res480({display: "none"})}
  }
`;

const PostCommentsCount = styled.span`
  font-style: italic;
  font-family: Lato,sans-serif; 
`;


const BlogBody = styled.div`
  color: #7E8485;
  font-size: 1.5rem;
  font-family: Lato, sans-serif;
`;

// const Paragraph = styled.p`
//   margin-bottom: 3.5rem;
//   font-family: Lato,sans-serif;
// `;

const ShareContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;

  ${res700({flexDirection: "row"})}
`; 

const Icons = styled.div`
  display: flex;
  align-items: center;
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  border-radius: 50%;
  color: #fff;
  background-color: #acbfa3;
  transition: all .5s;

  &:hover{
    background-color: #b8a398;
  }

  &:not(:last-child){
    margin: 0 5px;
  }
`;

const RelatedPosts = styled.div`
  margin-top: 5rem;
  padding-top: 5rem;
  border-top: 1px solid #f4f5f5
`;

const RelatedTitle = styled.h3`
  font-size: 3rem;
  font-weight: 300;
  text-transform: uppercase;
  margin-bottom: 4rem;
`;

// const ReplyComment = styled.p`
//   color: #7E8485;
//   font-size: 1.5rem;
//   font-weight: 400;
//   font-family: Lato, sans-serif;
// `;

const CommentsFormWrap = styled.div`
  margin-top: 50px;
  padding-top: 50px;
  border-top: 1px solid #f4f5f5;
`;

const CommentFormTitle = styled.h4`
  font-size: 2.5rem;
  text-transform: uppercase;
  margin-bottom: 3.5rem;
  color: #4B5354;
  font-weight: 300;
`;

const CommentForm = styled.form`
  width: 60%;

  ${res700({width: "100%"})}
`;

const CommentFields = styled.div`
  margin-bottom: 3rem;
`;

const CommentField = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2.5rem;
`;

const Error = styled.p`
    padding: 0 1.5rem;
    margin-bottom: 1rem;
    font-family: Lato, sans-serif;
    font-size: 1.5rem;
    color: red;
`;

const Input = styled.input`
  padding: 2rem 2.6rem;
  border: none;
  width: 100%;
  font-family: Lato,sans-serif;
  border-bottom: 2px solid #bdc0c0;
  transition: all .5s ease;
  font-size: 1.5rem;
  
  &:focus{
    outline: none;
    border-bottom: 2px solid #000;
  }
`; 


const CommentTextArea = styled.textarea`
  padding: 2rem 2.6rem;
  border: none;
  width: 100%;
  font-family: Lato,sans-serif;
  border-bottom: 2px solid #bdc0c0;
  height: 100px;
  resize: none;
  font-size: 1.5rem;
  transition: all .5s ease;

  &:focus{
    outline: none;
    border-bottom: 2px solid #000;
  }
`;

const CommentFormCheckBox = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
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


const CommentSection = styled.div`
  margin-top: 50px;
  border-top: 1px solid #f4f5f5;
  padding-top: 50px;
`;

const CommentTitle = styled.h4`
  font-size: 2.5rem;
  color: #4b5354;
  text-transform: uppercase;
  margin-bottom: 30px;
  font-weight: 300;

  ${smallPhone({marginBottom: "10px"})}
`;

const CommentsContainer = styled.div`
  padding: 10px 0;
`;

const NoBlogPostError = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: Lato, sans-serif;
    font-size: 2.5rem;
    height: 300px;
`;


const BlogContent = ({ blogTitle }) => {
  const user = useSelector(state => state.user.currentUser);
  const [blogPost, setBlogPost] = useState([]);
  const [commentNo, setCommentNo] = useState(0);
  const [loading, setLoading] = useState(true);
  const [postCommentLoading, setPostCommentLoading] = useState(false);
  const dispatch = useDispatch();
  // The line of code helps to convert hyphenated text to a spaced out text for database reading.
  const convertedBlogTitle = convertToDefaultBlogTitle(blogTitle);
  const formSchema = Yup.object().shape({
    name: Yup.string()
    .required("The name can't be empty"),
    email: Yup.string()
    .required("Empty email address")
    .matches(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(.\w{2,3})+$/, "E-mail address is invalid"),
    comment: Yup.string()
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

  useEffect(() => {
    const getBlogPost = async () => {
      try{
        setLoading(true);
        const res = await publicRequest.get(`/blogs/find/${convertedBlogTitle}`);
        setBlogPost(res.data);
        setLoading(false);
      }catch(error){
        toast.error("Unable to get blog post (501)")
      }
    }

    getBlogPost();
  }, [blogTitle, convertedBlogTitle]);

  useEffect(() => {
    const getCommentsNo = async () => {
      try{
        const res = await publicRequest.get(`/comment/${blogPost[0]._id}`);
        const publishedCommentNo = res.data.filter(comment => comment.status !== "pending");
        setCommentNo(publishedCommentNo.length);
      }catch(error){
        toast.error("Unable to get comments no");
      }
    }

    if(blogPost.length === 1){
      getCommentsNo();
    }
  }, [blogPost]);

  const insertCategories = (categories) => {
    const result = categories.join(", ");

    return result; 
  }

  const onSubmit = (data) => {
    if(user === null){
      dispatch(notLoggedIn());
      return;
    }else{
      const postComments = async () => {
        try{
          setPostCommentLoading(true);
          await userRequest.post(`/comment/${blogPost[0]._id}`, {...data, postTitle: convertedBlogTitle});
          toast.success("Thanks for your comment!! Awaiting approval.");
          setPostCommentLoading(false);
          reset();
        }catch(error){
          toast.error("Unable to post comments (501)");
        }
      };

      postComments();
    }
  };

  return (
    <BlogContentWrapper>
        <BlogContentContainer>
          <BlogPostContent>
            {
              loading?
              <ProgressWrapper>
                <CircularProgress size="8rem" />
              </ProgressWrapper>
              :
              (blogPost.length === 0)?
              <NoBlogPostError>
                Unable to fetch blog post
              </NoBlogPostError>
              :
              <>
                <BlogPost>
                    <BlogPostAttachmentContainer>
                      <BlogPostImg
                        src={blogPost[0].photo}
                        alt="blog media attachment"
                      />
                    </BlogPostAttachmentContainer>
                    <PostMeta>
                      <PostMetaCateg>{insertCategories(blogPost[0].categories)}</PostMetaCateg>
                      <PostMetaDate>
                        <AccessAlarmIcon style={{fontSize: 12, color: "#b8a398", marginRight: "10px", verticalAlign: "middle"}}/>
                        {formatDate(blogPost[0].createdAt)}
                      </PostMetaDate>
                      <PostCommentsCount>
                        <ChatBubbleOutlineIcon style={{fontSize: 12, color: "#b8a398", marginRight: "10px", verticalAlign: "middle"}}/> {commentNo} Comments
                      </PostCommentsCount>
                    </PostMeta>
                    <BlogBody>
                      <div className="blogContent" dangerouslySetInnerHTML={{__html: blogPost[0].content}}>
                      </div>

                      <ShareContainer>
                        <Icons>
                          Share:
                          <IconContainer>
                            <Twitter style={{fontSize: 15}}/>
                          </IconContainer>
                          <IconContainer>
                            <Facebook style={{fontSize: 15}}/>
                          </IconContainer>
                          <IconContainer>
                            <Instagram style={{fontSize: 15}}/>
                          </IconContainer>
                          <IconContainer>
                            <WhatsappOutlined style={{fontSize: 15}}/>
                          </IconContainer>
                        </Icons>
                      </ShareContainer>
                    </BlogBody>
                </BlogPost>
                <RelatedPosts>
                    <RelatedTitle>You May Also Like</RelatedTitle>
                    {/* RELATED BLOG POSTS RENDERED HERE */}
                    <RelatedBlogPosts blogTitle={blogPost[0].title} categories={blogPost[0].categories}/>
                </RelatedPosts>
                <CommentSection>
                  <CommentTitle>{commentNo} Comments</CommentTitle>
                  <CommentsContainer>
                    {/* BLOG COMMENTS RENDERED HERE */}
                    <BlogComments postID={blogPost[0]._id}/>
                  </CommentsContainer>
                </CommentSection>
                <CommentsFormWrap>
                    <CommentFormTitle>Leave a comment</CommentFormTitle>
                    <CommentForm onSubmit={handleSubmit(onSubmit)}>
                        <CommentFields>
                            <CommentField>
                              <Input {...register("name")} type="text" placeholder="Your Name *"/>
                              {errors.name && <Error>{errors.name.message}</Error>}
                            </CommentField>
                            <CommentField>
                              <Input {...register("email")} type="email" placeholder="Your E-mail *"/>
                              {errors.email && <Error>{errors.email.message}</Error>}
                            </CommentField>
                            <CommentField>
                              <CommentTextArea {...register("comment")} placeholder="Your comment *"/>
                              {errors.comment && <Error>{errors.comment.message}</Error>}
                            </CommentField>
                        </CommentFields>
                        <CommentFormCheckBox>
                          <CheckBoxLabel htmlFor="comment-form-checkbox">
                            <CheckBox {...register("approve")} type="checkbox" id="coment-form-checkbox"/>
                            By using this form you agree with the storage and handling of your data by this website.
                          </CheckBoxLabel>
                          {errors.approve && <Error>{errors.approve.message}</Error>}
                        </CommentFormCheckBox>
                        <CommentBtnContainer>
                          <CommentBtn type="submit" disabled={postCommentLoading}>Leave a comment</CommentBtn>
                        </CommentBtnContainer>
                    </CommentForm>
                </CommentsFormWrap>
              </>
            }
          </BlogPostContent>
          {/* SIDEBAR COMPONENT HERE*/}
          <BlogSidebar />
      </BlogContentContainer>
    </BlogContentWrapper>
  );
};

export default BlogContent;
