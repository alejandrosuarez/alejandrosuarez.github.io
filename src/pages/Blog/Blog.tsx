import React from "react";
import { BLOG_POSTS } from "./Blog.constants";
import {
  BlogPostHeading,
  ContainerInner,
  Description,
  Label,
  BlogPost as StyledBlogPost,
  Date as StyledDate,
  StyledLink,
  Tags,
} from "./Blog.styles";

const Home = () => {
  // Sort blog posts by date in descending order
  const sortedPosts = [...BLOG_POSTS].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <ContainerInner>
      <p>Some thoughts and learnings from over the years</p>
      {sortedPosts.map((post) => {
        // Format the date for display
        const formattedDate = new Date(post.date).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        });

        return (
          <StyledLink to={`/blog/${post.slug}`} key={post.slug}>
            <StyledBlogPost>
              <BlogPostHeading>
                <h3>{post.title}</h3>
              </BlogPostHeading>
              <StyledDate>{formattedDate}</StyledDate>
              <Description style={{ marginBottom: "0px" }}>
                {post.description}
              </Description>
              <Tags>
                {post.tags.map((tag) => (
                  <Label key={tag}>
                    <p>{tag}</p>
                  </Label>
                ))}
              </Tags>
            </StyledBlogPost>
          </StyledLink>
        );
      })}
    </ContainerInner>
  );
};

export default Home;
