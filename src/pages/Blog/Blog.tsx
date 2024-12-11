import React from "react";
import { BLOG_POSTS } from "./Blog.constants";
import {
  BlogPost,
  BlogPostHeading,
  ContainerInner,
  Date,
  Description,
  Label,
  StyledLink,
  Tags,
} from "./Blog.styles";

const Home = () => {
  return (
    <ContainerInner>
      <p>some thoughts and learnings from over the years</p>
      {BLOG_POSTS.map((p) => {
        return (
          <StyledLink to={`/blog/${p.slug}`} key={p.slug}>
            <BlogPost>
              <BlogPostHeading>
                <h3>{p.title}</h3>
              </BlogPostHeading>
              <Date>{p.date}</Date>
              <Description style={{ marginBottom: "0px" }}>
                {p.description}
              </Description>
              <Tags>
                {p.tags.map((t) => {
                  return (
                    <Label key={t}>
                      <p>{t}</p>
                    </Label>
                  );
                })}
              </Tags>
            </BlogPost>
          </StyledLink>
        );
      })}
    </ContainerInner>
  );
};

export default Home;
