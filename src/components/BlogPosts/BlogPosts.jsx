import React from "react";
import styled from "styled-components";
import BlogPost from "../BlogPost/BlogPost";
import { res750 ,res1023, bigDesktop } from "../../responsive";

const BlogContainer = styled.div`
  margin: 3rem auto;
  width: 85%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  ${res1023({width: "90%"})}
  ${res750({flexFlow: "column nowrap", width: "70%"})}
  ${res750({width: "80%"})}
  ${bigDesktop({width: "1500px"})}
`;

const BlogPosts = ({ posts }) => {
  return (
    <BlogContainer>
      {posts.map(post => (
        <BlogPost
          key={post.id}
          photo={post.photo}
          title={post.title}
          dateOfCreation={post.createTime}
          content={post.content}
        />
      ))}
    </BlogContainer>
  );
};

export default BlogPosts;
