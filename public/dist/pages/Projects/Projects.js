import React from "../../../_snowpack/pkg/react.js";
import {PROJECTS} from "./Projects.constants.js";
import {
  Bar,
  ContainerInner,
  Description,
  Label,
  Project,
  ProjectHeading,
  ProjectLink,
  TechStack
} from "./Projects.styles.js";
const Projects = () => {
  return /* @__PURE__ */ React.createElement(ContainerInner, null, /* @__PURE__ */ React.createElement("p", null, "a collection of my past and current projects"), PROJECTS.map((p) => {
    return /* @__PURE__ */ React.createElement(Project, null, /* @__PURE__ */ React.createElement(ProjectHeading, null, /* @__PURE__ */ React.createElement("h3", null, p.title), p.link != "" && /* @__PURE__ */ React.createElement(Bar, null), p.link != "" && /* @__PURE__ */ React.createElement(ProjectLink, {
      href: p.link
    }, "paper")), /* @__PURE__ */ React.createElement(TechStack, null, p.techStack.map((t) => {
      return /* @__PURE__ */ React.createElement(Label, null, /* @__PURE__ */ React.createElement("p", null, t));
    })), /* @__PURE__ */ React.createElement(Description, {
      style: {marginBottom: "0px"}
    }, p.description));
  }));
};
export default Projects;
