import React, {useState} from "react";
import styled from "styled-components";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Twitter from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";
import { Comment, Search, WhatsappOutlined, Instagram, Close } from "@mui/icons-material";
import {res480, medPhone, res700,tabPort, res1023, bigDesktop, smallPhone} from '../../responsive';
import { posts, allComments, allReplies } from "../../data";

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

  ${res1023({flex: "initial", marginRight: "0px", marginBottom: "50px"})}
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

const Sidebar = styled.div`
  flex: 1;

  ${res1023({display: "flex", flexFlow: "row wrap", justifyContent: "space-between"})}
  ${res700({flexFlow: "column nowrap", justifyContent: "flex-start"})}
`;

const BlogPostImg = styled.img`
  width: 100%;
  height: 100%;
`;

const PostMeta = styled.div`
  margin: 3.5rem 0 2rem;
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

const Paragraph = styled.p`
  margin-bottom: 3.5rem;
  font-family: Lato,sans-serif;
`;

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

const RelatedBlogPosts = styled.div`
  display: flex;
  justify-content: space-between;

  ${res700({flexDirection: "column", justifyContent: "flex-start"})}
`;

const RelatedBlog = styled.div`
  flex: 0 0 48%;

  &:not(:last-child){
    ${res700({marginBottom: "20px"})}
  }

  ${res700({flex: "initial"})}
`;

const RelatedBlogImg = styled.img`
  width: 100%;
  height: 160px;
  margin-bottom: 10px;

  ${res1023({height: "180px"})}
`;

const RelatedPostHeader = styled.div`
  text-align: center;
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;
`;

const RelatedPostDate = styled.span`
  color: #ACBFA3;
  font-family: Lato, sans-serif;
`;

const RelatedPostTitle = styled.span`
  color: #4b5354;
  text-transform: uppercase;
  font-weight: 300;
`; 

const Comments = styled.div``;

const CommentContainer = styled.div`
  display: flex;

  &:not(:last-child){
    margin-bottom: 40px
  }
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

const UserComment = styled.p`
  color: #7E8485;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: Lato, sans-serif;
`;

const Replies = styled.div` 
  margin-left: 30px;
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

const ReplyComment = styled.p`
  color: #7E8485;
  font-size: 1.5rem;
  font-weight: 400;
  font-family: Lato, sans-serif;
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
  margin-bottom: 2.5rem;
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

const CommentFormCheckBox = styled.p`
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

const SearchWidget = styled.aside`
  background-color: #b8a398;
  padding-bottom: 4.5rem;

  ${res1023({flex: "0 0 48%", alignSelf: "flex-start"})}
  ${res700({flex: "initial", marginBottom: "20px", alignSelf: "initial"})}
`;

const SearchWidgetTitle = styled.h3`
  color: #fff;
  font-size: 2rem;
  font-weight: 300;
  padding: 65px 39px 39px;
  text-transform: uppercase;
`;

const SearchBtn = styled.button`
  flex: 0 0 20%;
  background-color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  cursor: pointer;
  color: #fff;
  transition: all .5s ease;
`;

const SearchInputForm = styled.form`
  display: flex;
  width: 80%;
  margin: 0 auto;
  border-bottom: 2px solid #f4f5f5;

  &:hover ${SearchBtn}{
    color: #acbfa3;
  }
`;

const SearchInput = styled.input`
  font-family: Lato, sans-serif;
  flex: 0 0 80%;
  font-size: 1.5rem;
  padding: 8px 10px 10px 2px;
  border: none;
  background-color: transparent;

  &:focus{
    outline: none;
  }
`;

const Widget = styled.div`
  background-color: #f2eeec;
  margin-top: 2.5rem;
  padding-bottom: 4.5rem;

  ${res1023({flex: "0 0 48%", marginTop: "0", marginBottom: "20px", alignSelf: "flex-start"})}
  ${res700({flex: "initial", marginBottom: "20px", alignSelf: "initial"})}
`;

const WidgetTitle = styled.h5`
  padding: 39px;
  background-color: #acbfa3;
  margin-bottom: 4rem; 
  color: #fff;
  text-transform: uppercase;
  font-size: 2rem;
  font-weight: 300;
`;


const Categories = styled.ul`
  width: 80%;
  margin: 0 auto;
  list-style-type: none;
`;

const CategoryItem = styled.li`
  color: #4b5354;
  font-size: 13px;
  text-transform: uppercase;
  font-weight: 400;
  font-family: Lato,sans-serif;

  &::before{
    content: ">";
    margin-right: 12px;
  }

  &:not(:last-child){
    margin-bottom: 13px;
  }
`;

const PostItemContainer = styled.article`
  width: 80%;
  margin: 0 auto;
`;

const PostItem = styled.div`
  height: 150px;
  padding: 2rem 0;
`;

const PostDesc = styled.div`
  display: flex;
  justify-content: space-between;
  height: 75%;
  margin-bottom: 10px;
`;

const PostDescImg = styled.img`
  flex: 0 0 40%;
  align-self: flex-start;
  height: 100%;
`;

const PostDescTitle = styled.h6`
  flex: 0 0 58%; 
  font-size: 13px;
  font-family: Lato, sans-serif;
  font-weight: 400;
`;

const PostInfo = styled.div`
  height: 25%;
  color: #acbfa3;
  font-size: 13px;
`;

const PostInfoDate = styled.span`
  font-family: Lato, sans-serif;

  &::after{
    content: "|";
    margin: 0 10px;
  }
`;

const PostInfoPostedBy = styled.span`

`;

const RecentComments = styled.ul`
  list-style-type: none;
  width: 80%;
  margin: 0 auto;
`;

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

const BlogContent = () => {
  const POST_ID = 1;
  const [showReplyForm, setShowReplyForm] = useState(false);

  const handleReplyClick = (e) => {
    if(e.target.classList[0] === "sc-uWCef"){
      setShowReplyForm(true);
    }else{
      setShowReplyForm(false);
    }
  };

  const insertComments = (postID) => {
    const comment = allComments[postID - 1];
    return (
      <Comments>
        <CommentContainer>
          <CommenterImgContainer>
            <CommenterImg src="../enaturals/enaturals5.jpg" />
          </CommenterImgContainer>
          <CommentDetails>
            <CommentInformation>
              <CommentAuthor>{comment.name}</CommentAuthor>
                <CommentDate> 
                  <Comment style={{verticalAlign: "middle", fontSize: 15, marginRight: "5px", color: "#b8a398"}} />
                    July 31st, 2017
                </CommentDate>
            </CommentInformation>
            <UserComment>
                {comment.comment} 
            </UserComment>
            <ReplyButton onClick={handleReplyClick}>Reply</ReplyButton>
          </CommentDetails>
        </CommentContainer>
        <ReplyFormWrap display={showReplyForm}>
          <ReplyForm>
            <ReplyTitle>
              Reply to {comment.name}
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
        {insertReplies(1)}
      </Comments>
    );
  };

  const insertReplies = (commentID) => {
    // Handle Replies
    const reply = allReplies[commentID - 1];

    return(
      <Replies>
        <CommentContainer>
          <ReplierImgContainer>
            <ReplyImg src="../enaturals/enaturals5.jpg" />
          </ReplierImgContainer>
          <ReplyDetails>
            <ReplyInformation>
              <ReplyAuthor>{reply.name}</ReplyAuthor>
                <ReplyDate> 
                  <Comment style={{verticalAlign: "middle", fontSize: 15, marginRight: "5px", color: "#b8a398"}} />
                    July 31st, 2017
                </ReplyDate>
            </ReplyInformation>
            <UserComment>
                {reply.reply} 
            </UserComment>
          </ReplyDetails>
        </CommentContainer>
      </Replies>
    );
  }

  const insertCategories = (categories) => {
    const result = categories.join(", ");

    return result; 
  }

  return (
    <BlogContentWrapper>
      <BlogContentContainer>
        <BlogPostContent>
          <BlogPost>
            <BlogPostAttachmentContainer>
              <BlogPostImg
                src={"../enaturals/enaturals5.jpg"}
                alt="blog media attachment"
              />
            </BlogPostAttachmentContainer>
            <PostMeta>
              <PostMetaCateg>{insertCategories(posts[POST_ID - 1].categories)}</PostMetaCateg>
              <PostMetaDate>
                <AccessAlarmIcon style={{fontSize: 12, color: "#b8a398", marginRight: "10px", verticalAlign: "middle"}}/>
                Semptember 30, 2019
              </PostMetaDate>
              <PostCommentsCount>
                <ChatBubbleOutlineIcon style={{fontSize: 12, color: "#b8a398", marginRight: "10px", verticalAlign: "middle"}}/> 0 Comments
              </PostCommentsCount>
            </PostMeta>
            <BlogBody>
              {posts[POST_ID - 1].content}

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
              <RelatedBlogPosts>
                  <RelatedBlog>
                      <RelatedBlogImg src={"../enaturals/enaturals5.jpg"} alt="Related media attachment"/>
                      <RelatedPostHeader>
                          <RelatedPostDate>September 30, 2019</RelatedPostDate>
                          <RelatedPostTitle>10 Habits of women who always have clear skin</RelatedPostTitle>
                      </RelatedPostHeader>
                  </RelatedBlog>
                  <RelatedBlog>
                        <RelatedBlogImg src={"../enaturals/enaturals5.jpg"} alt="Related media attachment"/>
                        <RelatedPostHeader>
                            <RelatedPostDate>September 30, 2019</RelatedPostDate>
                            <RelatedPostTitle>10 Habits of women who always have clear skin</RelatedPostTitle>
                        </RelatedPostHeader>
                  </RelatedBlog>
              </RelatedBlogPosts>
          </RelatedPosts>
          <CommentSection>
            <CommentTitle>1 Comments</CommentTitle>

            <CommentsContainer>
              {insertComments(POST_ID)}
            </CommentsContainer>

          </CommentSection>
          <CommentsFormWrap>
              <CommentFormTitle>Leave a comment</CommentFormTitle>
              <CommentForm>
                  <CommentFields>
                      <CommentField>
                        <Input type="text" placeholder="Your Name *"/>
                      </CommentField>
                      <CommentField>
                        <Input type="email" placeholder="Your E-mail *"/>
                      </CommentField>
                      <CommentField>
                        <CommentTextArea placeholder="Your comment *"/>
                      </CommentField>
                  </CommentFields>
                  <CommentFormCheckBox>
                    <CheckBoxLabel for="comment-form-checkbox">
                      <CheckBox type="checkbox" id="coment-form-checkbox"/>
                      By using this form you agree with the storage and handling of your data by this website.
                    </CheckBoxLabel>
                  </CommentFormCheckBox>
                  <CommentBtnContainer>
                    <CommentBtn type="submit">Leave a comment</CommentBtn>
                  </CommentBtnContainer>
              </CommentForm>
          </CommentsFormWrap>
        </BlogPostContent>
        <Sidebar>
          {/* Search Widget */}
          <SearchWidget>
            <SearchWidgetTitle>Search</SearchWidgetTitle>
            <SearchInputForm>
              <SearchInput type="text" placeholder="Search ..."/>
              <SearchBtn>
                <Search style={{fontSize: 20}}/>
              </SearchBtn>
            </SearchInputForm>
          </SearchWidget>

          <Widget>
            {/* Category Widget */}
            <WidgetTitle>Categories</WidgetTitle>
            <Categories>
              <CategoryItem>Natural Soap (6)</CategoryItem>
              <CategoryItem>Oils (12)</CategoryItem>
              <CategoryItem>Research (10)</CategoryItem>
              <CategoryItem>Skin Care (20)</CategoryItem>
              <CategoryItem>Soap Making (15)</CategoryItem>
              <CategoryItem>Spa Procedures (5)</CategoryItem>
            </Categories>
          </Widget>

          <Widget>
            {/* Recent Post Widget */}
            <WidgetTitle>Recent Posts</WidgetTitle>

            <PostItemContainer>
              <PostItem>
                <PostDesc>
                  <PostDescImg src="../enaturals/enaturals5.jpg" alt="Recent post's attachment"/>
                  <PostDescTitle>Types of relaxing Massage to make you happy</PostDescTitle>
                </PostDesc>
                <PostInfo>
                  <PostInfoDate>Semptember 30, 2019</PostInfoDate> By <PostInfoPostedBy> Tijani Abimbola</PostInfoPostedBy>
                </PostInfo>
              </PostItem>
            </PostItemContainer>

            <PostItemContainer>
              <PostItem>
                <PostDesc>
                  <PostDescImg src="../enaturals/enaturals5.jpg" alt="Recent post's attachment"/>
                  <PostDescTitle>Types of relaxing Massage to make you happy</PostDescTitle>
                </PostDesc>
                <PostInfo>
                  <PostInfoDate>Semptember 30, 2019</PostInfoDate> By <PostInfoPostedBy>Tijani Abimbola</PostInfoPostedBy>
                </PostInfo>
              </PostItem>
            </PostItemContainer>
          </Widget>

          <Widget>
            <WidgetTitle>Comments</WidgetTitle>
            <RecentComments>
              <CommentItem>
                <ChatBubbleOutlineIcon style={{fontSize: 25, color: "#b8a398", marginRight: "10px", alignSelf: "flex-start"}}/>
                <CommentInfo>
                  <Commenter>Adam Brown on</Commenter>
                  <CommentedIn>Best Oils for skin moisturizing</CommentedIn>
                </CommentInfo>
              </CommentItem>
              <CommentItem>
              <ChatBubbleOutlineIcon style={{fontSize: 25,color: "#b8a398",marginRight: "10px", alignSelf: "flex-start"}}/>
                <CommentInfo>
                  <Commenter>Adam Brown on</Commenter>
                  <CommentedIn>Best Oils for skin moisturizing</CommentedIn>
                </CommentInfo>
              </CommentItem>
            </RecentComments>
          </Widget>
        </Sidebar>
      </BlogContentContainer>
    </BlogContentWrapper>
  );
};

export default BlogContent;
