import {size} from "../../styles/media.js";
import {grayscale} from "../../styles/variables.js";
import {Link} from "../../../_snowpack/pkg/react-router-dom.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
export const ContainerInner = styled.div`
  position: relative;
  max-width: ${size.tablet};
  width: 100%;
`;
export const Project = styled.div`
  width: 100%;
  margin-bottom: 1.5em;
  padding: 1.5em;
  box-sizing: border-box;
  border: 1px solid ${grayscale[200]};
  border-radius: 2px;
`;
export const BlogPost = styled.div`
  width: 100%;
  margin-bottom: 1.5em;
  padding: 1.5em;
  box-sizing: border-box;
  border: 1px solid ${grayscale[200]};
  border-radius: 2px;
`;
export const BlogPostHeading = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  & h3 {
    margin: 0px;
  }
`;
export const Date = styled.p`
  color: ${grayscale[500]};
  margin-bottom: 0px;
`;
export const Description = styled.p`
  color: ${grayscale[700]};
  margin-bottom: 0px;
`;
export const Tags = styled.div`
  width: 100%;
  margin-top: 1em;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;
export const Label = styled.div`
  background-color: ${grayscale[50]};
  border-radius: 50px;
  padding: 4px 8px;
  & p {
    margin: 0px;
    text-decoration: none;
    font-size: 14px;
    line-height: 1rem;
    color: ${grayscale[800]};
  }
`;
export const Bar = styled.div`
  width: 15px;
  height: 1px;
  background-color: ${grayscale[300]};
`;
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;

  &:hover {
    text-decoration: none;
  }
`;
