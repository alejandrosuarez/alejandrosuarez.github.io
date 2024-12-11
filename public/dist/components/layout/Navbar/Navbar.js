import React from "../../../../_snowpack/pkg/react.js";
import {NavbarContainer, NavbarOptions} from "./Navbar.styles.js";
const Navbar = ({setCurrentPage}) => {
  return /* @__PURE__ */ React.createElement(NavbarContainer, null, /* @__PURE__ */ React.createElement("h2", {
    onClick: () => setCurrentPage("about")
  }, "victor gonçalves"), /* @__PURE__ */ React.createElement(NavbarOptions, null, /* @__PURE__ */ React.createElement("p", {
    onClick: () => setCurrentPage("work")
  }, "work"), /* @__PURE__ */ React.createElement("p", {
    onClick: () => setCurrentPage("projects")
  }, "projects"), /* @__PURE__ */ React.createElement("p", {
    onClick: () => setCurrentPage("blog")
  }, "blog")));
};
export default Navbar;
