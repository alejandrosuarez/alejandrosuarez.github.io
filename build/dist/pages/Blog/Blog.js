import React from "../../../_snowpack/pkg/react.js";
import {BLOG_POSTS} from "./Blog.constants.js";
import {
  BlogPost,
  BlogPostHeading,
  ContainerInner,
  Date,
  Description,
  Label,
  StyledLink,
  Tags
} from "./Blog.styles.js";
const Home = () => {
  return /* @__PURE__ */ React.createElement(ContainerInner, null, /* @__PURE__ */ React.createElement("p", null, "some thoughts and learnings from over the years"), BLOG_POSTS.map((p) => {
    return /* @__PURE__ */ React.createElement(StyledLink, {
      to: `/blog/${p.slug}`,
      key: p.slug
    }, /* @__PURE__ */ React.createElement(BlogPost, null, /* @__PURE__ */ React.createElement(BlogPostHeading, null, /* @__PURE__ */ React.createElement("h3", null, p.title)), /* @__PURE__ */ React.createElement(Date, null, p.date), /* @__PURE__ */ React.createElement(Description, {
      style: {marginBottom: "0px"}
    }, p.description), /* @__PURE__ */ React.createElement(Tags, null, p.tags.map((t) => {
      return /* @__PURE__ */ React.createElement(Label, {
        key: t
      }, /* @__PURE__ */ React.createElement("p", null, t));
    }))));
  }));
};
export default Home;
