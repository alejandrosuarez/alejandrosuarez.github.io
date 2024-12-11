import React from "../../../_snowpack/pkg/react.js";
import {
  Container,
  HomeLink,
  Message,
  Title
} from "./NotFound.styles.js";
const NotFound = () => {
  return /* @__PURE__ */ React.createElement(Container, null, /* @__PURE__ */ React.createElement(Title, null, "404 - Page Not Found"), /* @__PURE__ */ React.createElement(Message, null, "Oops! The page you're looking for doesn't exist or has been moved."), /* @__PURE__ */ React.createElement(HomeLink, {
    to: "/"
  }, "Go Back Home"));
};
export default NotFound;
