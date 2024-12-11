import {createGlobalStyle} from "../../_snowpack/pkg/styled-components.js";
const GlobalStyles = createGlobalStyle`

  /* Base Styles */
  html {
    font-size: 16px;
    overflow-y: scroll;
    scrollbar-width: thin;
    scrollbar-color: rgba(0, 0, 0, 0.2) transparent;
  }

  /* Scrollbar Styles */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 4px;
  }
`;
export default GlobalStyles;
