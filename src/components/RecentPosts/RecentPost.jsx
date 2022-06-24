import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { findAndReplace, formatDate } from "../../usefulFunc";

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
  font-size: 1.5rem;
  text-transform: uppercase;
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

const RecentPost = ({title, photo, author, createdAt}) => {
  const modBlogTitle = findAndReplace(title);
    return (
        <PostItemContainer>
            <PostItem>
                <PostDesc>
                    <PostDescImg src={photo} alt="Recent post's attachment"/>
                    <PostDescTitle>
                      <Link to={`/blog/${modBlogTitle}`} className="blogCategoryLink">
                        {title}
                      </Link>
                    </PostDescTitle>
                </PostDesc>
                <PostInfo>
                    <PostInfoDate>{formatDate(createdAt)}</PostInfoDate> By <PostInfoPostedBy>{author}</PostInfoPostedBy>
                </PostInfo>
            </PostItem>
        </PostItemContainer>
    )
};



export default RecentPost;