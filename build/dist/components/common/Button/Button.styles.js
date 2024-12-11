import styled from "../../../../_snowpack/pkg/styled-components.js";
import {fonts} from "../../../styles/styles.js";
export const Button = styled.button`
  font-family: ${fonts.SECONDARY};
  padding: ${(props) => props.padding};
  border-radius: ${(props) => props.borderRadius};
  background-color: ${(props) => props.backgroundColor};
  color: ${(props) => props.color};
  font-size: ${(props) => props.fontSize};
  margin: ${(props) => props.margin};
  transition: 0.2s;
  font-size: 1.2rem;
  text-decoration: none;
  transition: 0.2s;
  border-bottom: white;

  font-weight: 500;
  border: none;

  & a {
    margin: 0px;
  }

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }

  &:focus {
    outline: none;
  }
`;
