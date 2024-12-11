import {grayscale} from "../../../styles/styles.js";
import styled from "../../../../_snowpack/pkg/styled-components.js";
export const Loader = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
  & p {
    font-size: 20px;
    color: ${grayscale[800]};
  }
`;
export default Loader;
