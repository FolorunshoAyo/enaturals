import React from "react";
import styled from "styled-components";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Twitter from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";
import { Search, WhatsappOutlined } from "@mui/icons-material";
import Instagram from "@mui/icons-material/Instagram";

const BlogContentWrapper = styled.section`
  padding: 5rem 0;
`;

const BlogContentContainer = styled.div`
  width: 85%;
  margin: 0 auto;
  display: flex;
`;

const BlogPostContent = styled.article`
  flex: 2;
  margin-right: 40px;
`;

// Height of BlogPost should be 1030px
const BlogPost = styled.div`
  height: auto; 
`;

const BlogPostAttachmentContainer = styled.div`
  width: 100%;
  height: 30%;
`;

const Sidebar = styled.div`
  flex: 1;
`;

const BlogPostImg = styled.img`
  width: 100%;
  height: 100%;
`;

const PostMeta = styled.div`
  margin: 3.5rem 0 2rem;
  font-family: Lato, sans-serif; 
  color: #ABB0B2;
  font-size: 13px;
`;

const PostMetaCateg = styled.span`
  &::after{
    content: "|";
    margin: 0 25px;
  }
`;

const PostMetaDate = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  &::after{
    content: "|";
    margin: 0 25px;
  }
`;

const PostCommentsCount = styled.span``;


const BlogBody = styled.div`
  color: #7E8485;
  font-size: 1.5rem;
  font-family: Lato, sans-serif;
`;

const Paragraph = styled.p`
  margin-bottom: 3.5rem;
`;

const ShareContainer = styled.div`
  text-align: end;
`; 

const Icons = styled.div`
  display: inline-block;
`;

const IconContainer = styled.div`
  display: inline-block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: #fff;

  &:not(:last-child){
    margin-right: 10px;
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
  margin-bottom:
`;

const RelatedBlogPosts = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RelatedBlog = styled.div`
  flex: 0 0 48%;
`;

const RelatedBlogImg = styled.img`
  width: 100%;
  height: 160px;
  margin-bottom: 10px;
`;

const RelatedPostHeader = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
`;

const RelatedPostDate = styled.span`
  color: #ACBFA3;
  font-size: 1.2rem;
  font-family: Lato, sans-serif;
`;

const RelatedPostTitle = styled.span`
  font-size: 1.5rem;
  color: #4b5354;
`; 

const CommentsFormWrap = styled.div`
  margin-top: 50px;
  padding-top: 50px;
  border-top: 1px solid #f4f5f5;
`;

const CommentFormTitle = styled.h4`
  margin-bottom: 3.5rem;
  collor: #4B5354;
  font-weight: 300;
`;

const CommentForm = styled.form`
  width: 70%;
`;

const CommentFields = styled.div`
  margin-bottom: 3rem;
`;

const CommentField = styled.div`
  margin-bottom: 2rem;
`;

const Input = styled.input`
  padding: 20px 26px;
  border: none;
  width: 100%;
  border-bottom: 2px solid #bdc0c0;
`; 


const TextArea = styled.textarea`
  padding: 20px 26px;
  border: none;
  border-bottom: 2px solid #bdc0c0;
  height: 100px;
`;

const CommentFormCheckBox = styled.p`
  padding: 1rem 0;
`;

const CheckBoxLabel = styled.label`
  display: flex;
  align-items: center;
`;

const CheckBox = styled.input`
  margin-right: 20px;
`;

const CommentBtnContainer = styled.div`
  padding: 2rem 0;
  text-align: end;
`;

const CommentBtn = styled.button`
  padding: 2rem 4rem;
  border: 2px solid #b8a398;
  text-transform: uppercase;
  font-size: 2rem; 
`;

const SearchWidget = styled.aside`
  background-color: #b8a398;
  padding-bottom: 4.5rem;
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
  font-family: Lato,sans-serif;
  font-size: 13px;
`;

const Commenter = styled.span`
  margin-bottom: 10px;
  color: #4b5354;
`;

const CommentedIn = styled.span`
  color: #7E8485;
`;

const BlogContent = () => {
  const insertParagraphs = (noOfParagraphs, preText) => {
    const splicedParagraphs = preText.split(" ")

    return [...Array(noOfParagraphs)].map((paragraph, i) => (
      <Paragraph>{splicedParagraphs[i]}</Paragraph>
    ));
  };
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
              <PostMetaCateg>Spa procedures</PostMetaCateg>
              <PostMetaDate>
                <AccessAlarmIcon style={{fontSize: 10, color: "#b8a398", marginRight: "10px"}}/>
                Semptember 30, 2019
              </PostMetaDate>
              <PostCommentsCount>
                <ChatBubbleOutlineIcon style={{fontSize: 10, color: "#b8a398", marginRight: "10px"}}/> 0 Comments
              </PostCommentsCount>
            </PostMeta>
            <BlogBody>
              {insertParagraphs(3, "HelloThere MyNameIs Folorunhso")}

              <ShareContainer>
                Share:
                <Icons>
                  <IconContainer>
                    <Twitter style={{margin: "0 auto"}}/>
                  </IconContainer>
                  <IconContainer>
                    <Facebook style={{margin: "0 auto"}}/>
                  </IconContainer>
                  <IconContainer>
                    <Instagram style={{margin: "0 auto"}}/>
                  </IconContainer>
                  <IconContainer>
                    <WhatsappOutlined style={{margin: "0 auto"}}/>
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
                        <TextArea placeholder="Your comment *"/>
                      </CommentField>
                  </CommentFields>
                  <CommentFormCheckBox>
                    <CheckBoxLabel htmlFor="comment-form-checkbox">
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
                  <PostInfoDate>Semptember 30, 2019</PostInfoDate> By <PostInfoPostedBy>Tijani Abimbola</PostInfoPostedBy>
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
                <ChatBubbleOutlineIcon style={{fontSize: 25,color: "#b8a398", alignSelf: "flex-start"}}/>
                <CommentInfo>
                  <Commenter>Adam Brown on</Commenter>
                  <CommentedIn>Best Oils for skin moisturizing</CommentedIn>
                </CommentInfo>
              </CommentItem>
              <CommentItem>
              <ChatBubbleOutlineIcon style={{fontSize: 25,color: "#b8a398", alignSelf: "flex-start"}}/>
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
