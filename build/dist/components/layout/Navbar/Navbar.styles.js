import {grayscale} from "../../../styles/variables.js";
import styled from "../../../../_snowpack/pkg/styled-components.js";
export const NavbarContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  align-items: center;

  &:hover {
    cursor: pointer;
  }
`;
export const NavbarOptions = styled.div`
  display: flex;
  gap: 2em;
  transition: 0.2s;
  & p {
    margin: 0px;
    color: ${grayscale[500]};
  }

  & p:hover {
    cursor: pointer;
    color: ${grayscale[900]};
  }
`;
