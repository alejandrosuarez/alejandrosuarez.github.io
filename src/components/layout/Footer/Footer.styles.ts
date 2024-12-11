import { device } from '@app/styles/media'
import { colors } from '@app/styles/styles'
import styled from 'styled-components'

export const FooterContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  @media ${device.laptop} {
    min-width: 400px;
  }

  background-color: ${colors.DARK};
  min-height: 20vh;
`

export const ContainerInner = styled.div`
  width: 100%;
  @media ${device.mobileS} {
    width: 80%;
  }

  @media ${device.laptopM} {
    width: 100%;
    max-width: 1200px;
  }
  padding: 1em 0em 1em 0em;
  color: #ffffff;
`
