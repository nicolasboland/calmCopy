import styled from "styled-components";
import { theme } from "@/utils/Theme";


export const Inner = styled.div`
  position: absolute;
  font-family: ${props => props.theme.fonts.regular}, "Arial";
  > b {
    font-family: ${props => props.theme.fonts.extraBold}, "Arial";
  }
`;

export const TitleDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const DivIconPlus = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`

interface ImgRotateProps {
  $isActive?: boolean;
}

export const ImgRotate = styled.div<ImgRotateProps>`
  transform: rotate(${(props) => (props.$isActive ? -180 : 0)}deg);
  transition: all 0.2s;
`;
interface ImgStaticProps {
  $isActive?: boolean;
}

export const ImgStatic = styled.div<ImgStaticProps>`
  float: right;
`;

export const Content = styled.div<{$isActive?: boolean, $itemName: string, $render?: boolean}>`
  position: relative;
  overflow: hidden;
  transition: height 0.5s;
  height: 0;
  height: ${(props) => {
    if(props.$render) {
      const inner = document.getElementById(props.$itemName);
      return `${props.$isActive && inner ? inner.scrollHeight  : 0}px`;
    }
  }};
`;

export const DivContainerAccordion = styled.div<{ $isLastUnit?: boolean}>`
  width: 100%;
  border-style: solid;
  border-width: 0px 0px 1px 0px;
  border-color: ${(props) => `${props.theme.colors.lead}40`};
  ${props => props.$isLastUnit && "border-radius: 10px;"}
  &:last-child {
    border: none;
  }
`;

export const DivTitleAccordion = styled.div`
  padding: 1rem 1.2rem;
  cursor: pointer;
`;

export const DivTextAccordion = styled.div`
  color: ${props => props.theme.colors.offBlack};
  font-family: ${props => props.theme.fonts.light}, Arial;
  font-size: .8em;
`;

export const DescriptionAccordion = styled.div<{$isProductSS?: boolean, $isFromCapas?: boolean}>`
  transition: all 0.35s;
  line-height: 1.5;
  font-weight: 300;
  border-top: solid;
  border-width: 1px 0px 0px 0px;
  border-color: ${(props) => `${props.theme.colors.lead}40`};
  a {
    text-decoration: none;
    color: ${theme.colors.yellowCalm};
    font-family: ${props => props.theme.fonts.light}, Arial;
    font-size: 1.1rem;
  }
  b {
    font-family: ${props => props.theme.fonts.extraBold}, Arial;
  }
  p {
    color: ${props => props.$isProductSS ? `${theme.colors.offBlack}` : props.theme.colors.millionGray};
    font-family: ${props => props.theme.fonts.light}, Arial;
    padding: 20px;
    font-size: ${props => props.$isProductSS ? `1rem` : "1.1rem"};
  }
  ul {
    list-style-type: circle;
    color: ${props => props.$isProductSS ? `${theme.colors.offBlack}` : props.theme.colors.millionGray};
    font-family: ${props => props.theme.fonts.light}, Arial;
    font-size: ${props => props.$isProductSS ? `1rem` : "1.1rem"};
    margin-left: 2rem;
  }

  @media ${props => props.theme.devices.mobile} {
    p {
    font-size: ${props => props.$isFromCapas ? `.9rem` : props.$isProductSS ? `.8rem` : "1.1rem"};
    }
    ul {
      font-size: ${props => props.$isFromCapas ? `.9rem` : props.$isProductSS ? `.8rem` : "1.1rem"};
    }
  }
`;