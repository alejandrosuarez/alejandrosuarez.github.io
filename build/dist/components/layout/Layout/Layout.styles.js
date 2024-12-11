import {device, size} from "../../../styles/media.js";
import {grayscale} from "../../../styles/styles.js";
import styled from "../../../../_snowpack/pkg/styled-components.js";
export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 5em;
`;
export const ContainerInner = styled.div`
  width: 100%;
  & h2 {
    margin-top: 0px;
  }
  & p {
    font-size: 17px;
    color: ${grayscale[800]};
  }
  @media ${device.mobileS} {
    display: block;
  }

  @media ${device.tabletL} {
    display: block;
  }

  gap: 50px;
`;
export const Heading = styled.div`
  position: relative;
  max-width: ${size.tablet};
  width: 100%;

  @media (max-width: ${size.tablet}) {
    box-sizing: border-box;
    width: 80%;
  }
`;
