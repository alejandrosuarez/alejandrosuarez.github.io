// src/App.tsx
import React from "react";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import router from "./router/router";
import GlobalStyles from "./styles/globalStyles";
import { theme } from "./styles/theme";

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
};

export default App;
