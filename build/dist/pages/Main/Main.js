import {Layout} from "../../components/index.js";
import {NavbarContainer, NavbarOptions} from "../../components/layout/Navbar/Navbar.styles.js";
import {usePageTransitions} from "../../hooks/usePageTransitions.js";
import React, {useState} from "../../../_snowpack/pkg/react.js";
import {animated} from "../../../_snowpack/pkg/react-spring.js";
import About from "../About/About.js";
import Blog from "../Blog/Blog.js";
import Projects from "../Projects/Projects.js";
import Work from "../Work/Work.js";
const pages = {
  about: /* @__PURE__ */ React.createElement(About, null),
  work: /* @__PURE__ */ React.createElement(Work, null),
  projects: /* @__PURE__ */ React.createElement(Projects, null),
  blog: /* @__PURE__ */ React.createElement(Blog, null)
};
const Main = () => {
  const [currentPage, setCurrentPage] = useState("about");
  const transitions = usePageTransitions(pages[currentPage]);
  return /* @__PURE__ */ React.createElement(Layout, null, /* @__PURE__ */ React.createElement(NavbarContainer, null, /* @__PURE__ */ React.createElement("h2", {
    onClick: () => setCurrentPage("about")
  }, "victor gonçalves"), /* @__PURE__ */ React.createElement(NavbarOptions, null, /* @__PURE__ */ React.createElement("p", {
    onClick: () => setCurrentPage("work")
  }, "work"), /* @__PURE__ */ React.createElement("p", {
    onClick: () => setCurrentPage("projects")
  }, "projects"), /* @__PURE__ */ React.createElement("p", {
    onClick: () => setCurrentPage("blog")
  }, "blog"))), transitions((style, item) => /* @__PURE__ */ React.createElement(animated.div, {
    style
  }, item)));
};
export default Main;
