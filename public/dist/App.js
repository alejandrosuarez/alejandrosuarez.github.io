import React from "../_snowpack/pkg/react.js";
import {RouterProvider} from "../_snowpack/pkg/react-router-dom.js";
import {ThemeProvider} from "../_snowpack/pkg/styled-components.js";
import router from "./router/router.js";
import GlobalStyles from "./styles/globalStyles.js";
import {theme} from "./styles/theme.js";
const App = () => {
  return /* @__PURE__ */ React.createElement(ThemeProvider, {
    theme
  }, /* @__PURE__ */ React.createElement(GlobalStyles, null), /* @__PURE__ */ React.createElement(RouterProvider, {
    router
  }));
};
export default App;
