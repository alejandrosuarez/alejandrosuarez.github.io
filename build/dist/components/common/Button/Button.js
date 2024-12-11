import React from "../../../../_snowpack/pkg/react.js";
import {Button as StyledButton} from "./Button.styles.js";
const Button = ({
  color,
  backgroundColor,
  padding,
  margin,
  borderRadius,
  fontSize,
  onClick,
  children
}) => {
  return /* @__PURE__ */ React.createElement(StyledButton, {
    color,
    backgroundColor,
    padding,
    margin,
    borderRadius,
    fontSize,
    onClick
  }, children);
};
export default Button;
