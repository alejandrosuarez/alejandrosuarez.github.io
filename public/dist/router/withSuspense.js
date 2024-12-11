import {Loading} from "../components/index.js";
import React, {Suspense} from "../../_snowpack/pkg/react.js";
const withSuspense = (Component) => {
  return (props) => /* @__PURE__ */ React.createElement(Suspense, {
    fallback: /* @__PURE__ */ React.createElement(Loading, null)
  }, /* @__PURE__ */ React.createElement(Component, {
    ...props
  }));
};
export default withSuspense;
