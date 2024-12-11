import React, {Children} from "../../../../_snowpack/pkg/react.js";
import {useTrail, animated} from "../../../../_snowpack/pkg/react-spring.js";
export const FadeIn = (props) => {
  const items = Children.toArray(props.children);
  const trail = useTrail(items.length, {
    from: {opacity: 0},
    to: {opacity: 1},
    config: {
      tension: 150
    }
  });
  return /* @__PURE__ */ React.createElement("div", {
    ...props
  }, /* @__PURE__ */ React.createElement("div", null, trail.map((props2, index) => /* @__PURE__ */ React.createElement(animated.div, {
    key: index.toString(),
    style: props2
  }, items[index]))));
};
