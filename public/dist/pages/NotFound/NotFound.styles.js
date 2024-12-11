import {device} from "../../styles/media.js";
import {Link} from "../../../_snowpack/pkg/react-router-dom.js";
import styled from "../../../_snowpack/pkg/styled-components.js";
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;
  text-align: center;
  padding: 2rem;
`;
export const Title = styled.h1`
  font-size: 3rem;
  color: ${({theme}) => theme.colors.dark};
  margin-bottom: 1rem;

  @media ${device.tablet} {
    font-size: 2.5rem;
  }

  @media ${device.mobileL} {
    font-size: 2rem;
  }
`;
export const Message = styled.p`
  font-size: 1.2rem;
  color: ${({theme}) => theme.grayscale[700]};
  margin-bottom: 2rem;

  @media ${device.tablet} {
    font-size: 1rem;
  }

  @media ${device.mobileL} {
    font-size: 0.9rem;
  }
`;
export const HomeLink = styled(Link)`
  padding: 0.75em 1.5em;
  background-color: ${({theme}) => theme.colors.primary};
  color: ${({theme}) => theme.colors.ternary};
  border-radius: 5px;
  font-size: 1rem;
  font-weight: bold;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({theme}) => theme.colors.highlight};
    cursor: pointer;
  }

  @media ${device.mobileL} {
    padding: 0.5em 1em;
    font-size: 0.9rem;
  }
`;
export const Image = styled.img`
  width: 300px;
  max-width: 80%;
  height: auto;
  margin-bottom: 2rem;

  @media ${device.tablet} {
    width: 250px;
  }

  @media ${device.mobileL} {
    width: 200px;
  }
`;
