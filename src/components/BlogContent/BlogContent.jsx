import React from "react";
import styled from "styled-components";
import AccessAlarmIcon from "@mui/icons-material/AccessAlarm";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import Twitter from "@mui/icons-material/Twitter";
import Facebook from "@mui/icons-material/Facebook";
import { WhatsappOutlined } from "@mui/icons-material";
import Instagram from "@mui/icons-material/Instagram";

const BlogContentWrapper = styled.section`
  padding: 5rem 0;
`;

const BlogContentWrapper = styled.div`
  width: 80%;
  margin: 0 auto;
  display: flex;
`;

const BlogPost = styled.article`
  padding: 3rem;
`;

const BlogContent = () => {
  const insertParagraphs = (noOfParagraphs, preText) => {
    const splicedParagraphs = preText.join(" ");

    return [...Array(noOfParagraphs)].map((paragraph, i) => (
      <Paragraph>{splicedParagraphs}</Paragraph>
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
              <PostMetaCateg>Spa procedures</PostMetaCateg>|
              <PostMetaDate>
                <AccessAlarmIcon />
                Semptember 30, 2019
              </PostMetaDate>
              <PostCommentsCount>
                <ChatBubbleOutlineIcon />0 Comments
              </PostCommentsCount>
            </PostMeta>
            <BlogContent>
              {insertParagraphs(3, "HelloThere MyNameIs Folorunhso")}

              <ShareContainer>
                Share:
                <IconContainer>
                  <Twitter />
                </IconContainer>
                <IconContainer>
                  <Facebook />
                </IconContainer>
                <IconContainer>
                  <Instagram />
                </IconContainer>
                <IconContainer>
                  <WhatsappOutlined />
                </IconContainer>
              </ShareContainer>
            </BlogContent>
          </BlogPost>
          <RelatedPosts>
              <Relatedtitle>You May Also Like</Relatedtitle>
              <RelatedBlogPosts>
                  <RelatedBlog1>
                      <RelatedBlogImg src={"../enaturals/enaturals5.jpg"} alt="Related media attachment"/>
                      <RealatedPostHeader>
                          <RelatedPostDate>September 30, 2019</RelatedPostDate>
                          <RelatedPostTitle>10 Habits of women who always have clear skin</RelatedPostTitle>
                      </RealatedPostHeader>
                  </RelatedBlog1>
                  <RelatedBlog2>
                        <RelatedBlogImg src={"../enaturals/enaturals5.jpg"} alt="Related media attachment"/>
                        <RealatedPostHeader>
                            <RelatedPostDate>September 30, 2019</RelatedPostDate>
                            <RelatedPostTitle>10 Habits of women who always have clear skin</RelatedPostTitle>
                        </RealatedPostHeader>
                  </RelatedBlog2>
              </RelatedBlogPosts>
          </RelatedPosts>
          <CommentsFormWrap>
              <CommentForm>
                  <CommentFormTitle>Leave a comment</CommentFormTitle>
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
              </CommentForm>
          </CommentsFormWrap>
        </BlogPostContent>
      </BlogContentContainer>
    </BlogContentWrapper>
  );
};

export default BlogContent;
