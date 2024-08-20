import styled from "styled-components"
import { HeaderSectionStyled } from "./types"

export const Container = styled.div<HeaderSectionStyled>`
  background-image: ${({ $backgroundImage }) =>
    $backgroundImage ? `url(${$backgroundImage})` : "none"};
  background-color: ${({ $backgroundColor, theme }) =>
    $backgroundColor ? theme.colors[$backgroundColor] : "transparent"};
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  padding: ${({ $paddingTop }) => $paddingTop || "70px"} 70px 70px 70px;
  height: ${({ $height }) => $height || "auto"};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
  @media ${(props) => props.theme.devices.mobile} {
    padding: 50px 10px;
    height: ${({ $lessMargin, $heightMobile }) => $lessMargin ? "55vh" : $heightMobile ? $heightMobile : "auto"};
    background-repeat: no-repeat;
    background-position: center center;
    background-size: cover;
  }
`

export const SubtitleDiv = styled.div`
  max-width: 60rem;
`

export const DivTitleShadow = styled.div`
  -webkit-text-stroke: 1px ${({ theme }) => theme.colors.yellowCalm};
  text-shadow: 0 0 25px ${({ theme }) => theme.colors.yellowCalm};
`
